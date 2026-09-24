# Instructions for coding agents

Before acting, read the repository-root `AGENTS.md`, then the canonical checkpoint, Decisions Ledger and the active Work Order/Context Lock. Follow the source hierarchy; do not implement product code while the Source Pack is still open.

Every task must have a stable Work Order ID, an exact branch/base, bounded scope, explicit files, acceptance criteria, test-time budget, evidence bundle and STOP CONDITION. Use impact-based tests and hard timeouts; the mandatory fast gate is at most five minutes. Never loop on a failing test, overrun a test budget silently, or claim a check that was not run.

Treat external publishing, payment and advertising spend as disabled by default. Do not commit secrets or perform direct writes to `main`. Preserve all unrelated work. The complete-product goal is not permission to invent requirements; planning must freeze the full DoD before feature execution.


Harnesses and checkpoints are mandatory project contracts: resolve changes to the smallest sufficient IDs in `.engineering/HARNESS-REGISTRY.json`, include shared-contract tests when impact requires them, and never use production state or live financial/publishing actions in a harness. For every Hive Studio project response, persist a checkpoint event under `.engineering/checkpoints/`, update the current checkpoint pointer and report its ID/link; use `NO_STATE_CHANGE` when appropriate. Read `.engineering/CHECKPOINT-PROTOCOL.md`.


For product planning, consult .engineering/MODULE-CATALOG.md and MODULE-MAP.json, but treat them as candidate until the full HVS-PLAN-001 Source Pack is accepted. Registry entries with status planned and command null are design records only, never runnable tests or passing proof.
