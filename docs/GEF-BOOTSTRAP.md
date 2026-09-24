# GEF Bootstrap Integration

## Installed version
- Stable tag: `v1.0.0`
- Exact commit: `866fe3af8cccc65c929aaf6a47a924401fa448b3`
- Path: `integrations/gef-bootstrap`
- Method: Git submodule; the root repository must not point to a floating branch.

GEF v1.0.0 is distributed as a source workspace. It is not a published npm package or supported global CLI. Its repository is marked All Rights Reserved, so this project keeps it as a separately versioned submodule and does not copy or adapt its implementation files.

## Initialize and verify

```sh
git submodule update --init --recursive
node scripts/verify-foundation.mjs
cd integrations/gef-bootstrap
npm ci
npm run validate
npm audit --audit-level=high
```

The GEF suite has a separate GitHub workflow, capped at 30 minutes, and runs only when this submodule pointer changes or when manually dispatched. Routine product PRs run the five-minute foundation gate, not the complete GEF workspace suite.

Hive Studio's own `AGENTS.md` and canonical Source Pack govern this project. The submodule's documentation informs the process but does not replace local requirements, scope, decisions or DoD.
