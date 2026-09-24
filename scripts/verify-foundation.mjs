import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const requireFile = (path) => {
  try {
    return readFileSync(resolve(root, path), "utf8");
  } catch {
    errors.push("Required file is missing or unreadable: " + path);
    return "";
  }
};

let pins;
try {
  pins = JSON.parse(requireFile(".engineering/integrations/INTEGRATION-PINS.json"));
} catch {
  errors.push("Integration pin manifest is not valid JSON.");
  pins = {};
}
const integrations = [
  { key: "gef_bootstrap", path: "integrations/gef-bootstrap", url: "https://github.com/KayzenRoot/gef-bootstrap.git" },
  { key: "hive", path: "integrations/hive", url: "https://github.com/KayzenRoot/hive.git" },
];
const modules = requireFile(".gitmodules");
for (const integration of integrations) {
  const pin = pins.integrations?.[integration.key];
  if (!modules.includes("path = " + integration.path) || !modules.includes("url = " + integration.url)) {
    errors.push("Unexpected or missing submodule declaration: " + integration.path);
  }
  if (!pin || pin.path !== integration.path || !/^v\d+\.\d+\.\d+$/.test(pin.ref ?? "") || !/^[0-9a-f]{40}$/.test(pin.commit ?? "")) {
    errors.push("Invalid or missing immutable version pin: " + integration.path);
  }
}
if (!pins.integrations?.hive?.known_upstream_documentation_mismatch) {
  errors.push("HIVE release-document mismatch must remain visible.");
}

const paths = integrations.map(({ path }) => path);
const tree = spawnSync("git", ["ls-tree", "HEAD", "--", ...paths], {
  cwd: root,
  encoding: "utf8",
  timeout: 5000,
  windowsHide: true,
});
if (tree.error || tree.status !== 0) {
  errors.push("Could not read submodule gitlinks from HEAD.");
} else {
  const actual = new Map();
  for (const line of tree.stdout.split(/\r?\n/)) {
    const match = line.match(/^([0-7]{6})\s+(\w+)\s+([0-9a-f]{40})\t(.+)$/);
    if (match) actual.set(match[4], { mode: match[1], type: match[2], commit: match[3] });
  }
  for (const integration of integrations) {
    const pin = pins.integrations?.[integration.key];
    const entry = actual.get(integration.path);
    if (!entry || entry.mode !== "160000" || entry.type !== "commit") {
      errors.push("Git tree is missing an exact submodule link: " + integration.path);
    } else if (pin?.commit !== entry.commit) {
      errors.push("Git tree link does not match the approved manifest pin: " + integration.path);
    }
  }
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
  console.log("PASS: Source Pack, manifest and exact submodule gitlinks verified without submodule checkout.");
}
