import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (path) => {
  try {
    return readFileSync(resolve(root, path), "utf8");
  } catch {
    errors.push("Required source file is missing or unreadable: " + path);
    return "";
  }
};

let pins;
try {
  pins = JSON.parse(read(".engineering/integrations/INTEGRATION-PINS.json"));
} catch {
  errors.push("Integration pin manifest is not valid JSON.");
  pins = {};
}
const integrations = [
  { key: "gef_bootstrap", path: "integrations/gef-bootstrap" },
  { key: "hive", path: "integrations/hive" },
];
const status = spawnSync("git", ["submodule", "status", "--recursive"], {
  cwd: root,
  encoding: "utf8",
  timeout: 5000,
  windowsHide: true,
});
const checkedOut = new Map();
if (status.error || status.status !== 0) {
  errors.push("git submodule status failed.");
} else {
  for (const line of status.stdout.split(/\r?\n/)) {
    const match = line.match(/^([ +\-]?)([0-9a-f]{40})\s+(\S+)/);
    if (match) checkedOut.set(match[3], { state: match[1], commit: match[2] });
  }
}

for (const integration of integrations) {
  const pin = pins.integrations?.[integration.key];
  const local = checkedOut.get(integration.path);
  if (!pin || !local || local.state !== " " || local.commit !== pin.commit) {
    errors.push("Submodule checkout differs from its immutable pin: " + integration.path);
  }
  const version = (pin?.ref ?? "").replace(/^v/, "");
  if (integration.key === "hive") {
    const actual = read("integrations/hive/VERSION").trim();
    if (actual !== version) errors.push("HIVE VERSION does not match its pinned tag.");
  }
  if (integration.key === "gef_bootstrap") {
    try {
      const pkg = JSON.parse(read("integrations/gef-bootstrap/package.json"));
      if (pkg.version !== version) errors.push("GEF package version does not match its pinned tag.");
      if (pkg.private !== true) errors.push("GEF workspace privacy boundary changed; review before use.");
    } catch {
      errors.push("GEF package.json is not valid JSON.");
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error("FAIL: " + error);
  process.exitCode = 1;
} else {
  console.log("PASS: Checked-out GEF/HIVE source SHAs and versions match the immutable pin manifest.");
}
