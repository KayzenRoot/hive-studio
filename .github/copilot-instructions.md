# Instructions for coding agents

Before acting, read the repository-root `AGENTS.md`, then the canonical checkpoint, Decisions Ledger and the active Work Order/Context Lock. Follow the source hierarchy; do not implement product code while the Source Pack is still open.

Every task must have a stable Work Order ID, an exact branch/base, bounded scope, explicit files, acceptance criteria, test-time budget, evidence bundle and STOP CONDITION. Use impact-based tests and hard timeouts; the mandatory fast gate is at most five minutes. Never loop on a failing test, overrun a test budget silently, or claim a check that was not run.

Treat external publishing, payment and advertising spend as disabled by default. Do not commit secrets or perform direct writes to `main`. Preserve all unrelated work. The complete-product goal is not permission to invent requirements; planning must freeze the full DoD before feature execution.
