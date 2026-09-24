import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const expected = new Map([
  ["integrations/gef-bootstrap", "866fe3af8cccc65c929aaf6a47a924401fa448b3"],
  ["integrations/hive", "52bd3dab54dd4f16264072e198ed1fc23168f7fa"],
]);
const errors = [];
const requireFile = (path) => {
  try {
    return readFileSync(resolve(root, path), "utf8");
  } catch {
    errors.push("Required file is missing or unreadable: " + path);
    return "";
  }
};

const modules = requireFile(".gitmodules");
for (const [path, url] of [
  ["integrations/gef-bootstrap", "https://github.com/KayzenRoot/gef-bootstrap.git"],
  ["integrations/hive", "https://github.com/KayzenRoot/hive.git"],
]) {
  if (!modules.includes("path = " + path) || !modules.includes("url = " + url)) {
    errors.push("Unexpected or missing submodule declaration: " + path);
  }
}

const status = spawnSync("git", ["submodule", "status", "--recursive"], {
  cwd: root,
  encoding: "utf8",
  timeout: 5000,
  windowsHide: true,
});
if (status.error || status.status !== 0) {
  errors.push("git submodule status failed; initialize with --recurse-submodules.");
} else {
  const lines = status.stdout.split(/\r?\n/);
  for (const [path, sha] of expected) {
    const line = lines.find((entry) => {
      const candidate = entry.match(/^([ +\-]?)([0-9a-f]{40})\s+(\S+)/);
      return candidate?.[3] === path;
    });
    const match = line?.match(/^([ +\-]?)([0-9a-f]{40})\s+(\S+)/);
    if (!match) {
      errors.push("Submodule is not initialized: " + path);
    } else {
      if (match[1] !== " ") errors.push("Submodule checkout is not at its recorded gitlink: " + path);
      if (match[2] !== sha) errors.push("Submodule commit does not match the approved pin: " + path);
    }
  }
}

const hiveVersion = requireFile("integrations/hive/VERSION").trim();
if (hiveVersion !== "1.0.3") errors.push("HIVE VERSION must be 1.0.3; found " + (hiveVersion || "missing"));

try {
  const gef = JSON.parse(requireFile("integrations/gef-bootstrap/package.json"));
  if (gef.version !== "1.0.0") errors.push("GEF workspace package version must be 1.0.0.");
  if (gef.private !== true) errors.push("GEF workspace privacy boundary changed; review before use.");
} catch {
  errors.push("GEF package.json is not valid JSON.");
}

const manifest = requireFile(".engineering/integrations/INTEGRATION-PINS.json");
try {
  const pins = JSON.parse(manifest);
  if (pins.integrations?.hive?.commit !== expected.get("integrations/hive")) errors.push("HIVE pin manifest mismatch.");
  if (pins.integrations?.gef_bootstrap?.commit !== expected.get("integrations/gef-bootstrap")) errors.push("GEF pin manifest mismatch.");
  if (!pins.integrations?.hive?.known_upstream_documentation_mismatch) errors.push("HIVE release-document mismatch must remain visible.");
} catch {
  errors.push("Integration pin manifest is not valid JSON.");
}

for (const path of [
  ".engineering/SOURCE-HIERARCHY.md",
  ".engineering/PROJECT-OVERVIEW.md",
  ".engineering/REQUIREMENTS.md",
  ".engineering/SCOPE.md",
  ".engineering/ARCHITECTURE.md",
  ".engineering/SECURITY.md",
  ".engineering/TEST-BENCHMARK-PLAN.md",
  ".engineering/DEPLOYMENT.md",
  ".engineering/BACKLOG.md",
  ".engineering/DEFINITION-OF-DONE.md",
  ".engineering/DECISIONS-LEDGER.md",
  ".engineering/CHECKPOINT.md",
  ".engineering/WORK-ORDERS/HVS-BOOT-001.md",
  ".engineering/context-locks/HVS-BOOT-001.json",
]) requireFile(path);

if (errors.length) {
  for (const error of errors) console.error("FAIL: " + error);
  process.exitCode = 1;
} else {
  console.log("PASS: Source Pack, exact GEF/HIVE submodule pins, release caveat and versions verified.");
}
