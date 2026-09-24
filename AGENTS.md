# Hive Studio — Agent and Executor Rules

## Authority and current phase

1. Read `.engineering/CHECKPOINT.md`, then `.engineering/DECISIONS-LEDGER.md`.
2. Follow `.engineering/SOURCE-HIERARCHY.md`; Scope, DoD, Architecture, Requirements and Security are canonical and versioned.
3. For a task, read only the active Work Order, its Context Lock, and the specific sources/files it names. Git state, tests and exact-head evidence outrank conversational memory.
4. This repository targets a complete product, not an MVP. Do not shrink the approved final scope. At the same time, do not invent or implement unplanned features: product requirements and architecture remain open for planning.
5. No product application code or live external API writes until the Source Pack and the relevant Work Order are approved.

## Work Order and prompt contract

Every increment uses a stable ID across branch, Work Order, prompt, PR, evidence, corrections and checkpoint. The Work Order and executor prompt must contain: OBJECTIVE; CONTEXT; SCOPE; OUT OF SCOPE for this increment; FILES/SOURCES TO READ; REQUIREMENTS; ARCHITECTURE RULES; CONSTRAINTS; ACCEPTANCE CRITERIA; TESTS with hard time budgets; DELIVERABLES; REVIEW FORMAT; STOP CONDITION.

Compile a Context Lock from exact Git SHAs and critical source fingerprints where available. If a canonical source or decision changes, mark the lock STALE and recompile before execution. Prompts should link to relevant files and deltas, not paste the whole repository or repeat settled context.

## Execution

- Inspect repository state, relevant canonical sources and existing tests before editing.
- Work only on the admitted branch and scope. Do not write directly to `main`; do not force-push, rewrite history, or perform destructive cleanup.
- Prefer small, deterministic edits; reuse passing evidence only when the exact inputs remain unchanged.
- Do not add a dependency or change an external integration contract without recording why and updating the relevant source.
- Keep API keys, access tokens, ad-account credentials, customer data, generated private content and local `.env` files out of Git, logs, prompts and fixtures.
- Treat all ad-spend, payment, publishing, refund, account-permission or other external mutations as disabled by default. No spend increase may occur without an operator-defined hard cap and a functioning emergency pause; exact product rules are still to be planned.
- Stop and report blockers when an API capability, permission, license, canonical decision or test environment cannot be verified. Never fake a successful integration or test.

## Bounded verification — no unbounded test loops

The mandatory pull-request foundation gate is `node scripts/verify-foundation.mjs`, with a five-minute hard job timeout. It uses only Node built-ins and does not start Docker or contact external services.

Use impact-based testing: static/contract checks first; tests for changed modules second; only relevant integration proofs after that. Do not run the full suite after every prompt. Do not repeat the same failing command without changing the causal input. Diagnose the failure, fix it or stop with evidence.

- Foundation/format/contracts: at most 5 minutes on every PR.
- Focused changed-module tests: target at most 10 minutes.
- Relevant integration tests: target at most 15 minutes; use service health checks and bounded retries.
- Full product regression: scheduled or release-bound, split into independent shards, no job over 30 minutes.
- Release-only financial/security proof obligations: separate explicit gate, no job over 45 minutes.
- Every CI job and external call must have a timeout. At most one diagnostic rerun is allowed for a likely infrastructure flake; do not mark an unexplained flaky failure as passed.
- If a budget is exceeded, stop the run, preserve the failure output, and report what was not proven. Never silently skip a required test to meet a deadline.

The GEF source validation workflow is isolated from normal product PRs and runs only when the GEF submodule changes or when manually dispatched. See `.engineering/TEST-BENCHMARK-PLAN.md`.

## Review, evidence and checkpoint

Each executor handoff reports base/head SHA, changed files, decisions, exact commands and outcomes, checks not run and why, risks, evidence links, and a proposed Checkpoint Delta. “Completed” or a green unrelated workflow is not evidence. Review in Brazilian Portuguese. No next increment while the current one is CORRECTION REQUIRED or BLOCKED. An executor may propose but may not promote a canonical checkpoint before independent exact-head audit.
