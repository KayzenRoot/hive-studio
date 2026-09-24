# Hive Studio

A complete platform for creating and operating digital products and their marketing lifecycle. The product target is a complete system, not an MVP; detailed requirements and architecture remain a planning deliverable.

## Current status

- Foundation setup is approved; HVS-PLAN-001 is active. A candidate 20-module map is in `.engineering/MODULE-CATALOG.md` and `.engineering/MODULE-MAP.json`; product implementation remains blocked until the full Source Pack is approved.
- No product application code, external API writes, social publishing, or advertising spend has been implemented.
- Canonical planning starts from `.engineering/CHECKPOINT.md`, `.engineering/SOURCE-HIERARCHY.md` and the active Work Order.

## Pinned engineering integrations

- GEF Bootstrap v1.0.0: `integrations/gef-bootstrap`, exact commit recorded in `.engineering/integrations/INTEGRATION-PINS.json`.
- HIVE v1.0.3: `integrations/hive`, exact commit recorded in the same pin manifest.
- Both are Git submodules. Clone with `git clone --recurse-submodules https://github.com/KayzenRoot/hive-studio.git`.

## Verify the foundation

Requires Git and Node.js 22 or newer. This fast check reads the recorded Git submodule pointers and does not download submodule contents:

```sh
node scripts/verify-foundation.mjs
```

When changing the GEF pin, its bounded full validation is run separately:

```sh
cd integrations/gef-bootstrap
npm ci
npm run validate
npm audit --audit-level=high
```

See [GEF setup](docs/GEF-BOOTSTRAP.md), [HIVE setup](docs/HIVE-INTEGRATION.md), [Codex execution contract](docs/CODEX-PROMPT-AND-EXECUTION.md), [harness architecture](.engineering/HARNESS-ARCHITECTURE.md), the [checkpoint protocol](.engineering/CHECKPOINT-PROTOCOL.md), and the [candidate module catalog](.engineering/MODULE-CATALOG.md). Product harness entries marked planned are not runnable. Canonical sources are under `.engineering/`.

Advertising and financial side effects remain disabled until planning defines verified hard caps, authorization, monitoring, and an emergency stop.

