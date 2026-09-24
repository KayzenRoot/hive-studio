# Test and Benchmark Plan

Status: `DRAFT — FOUNDATION GATES ACTIVE; PRODUCT TEST PLAN OPEN`

## Time-bounded test tiers
| Tier | When | Purpose | Hard maximum |
|---|---|---|---:|
| T0 Foundation fast gate | Every PR | Source Pack, pin manifest and exact Git tree links; no submodule download | 5 minutes |
| T0a Integration source contract | When a submodule pointer changes | Confirm checked-out source SHA and tag/package versions | 10 minutes |
| T1 Focused | Changed module only | Relevant unit/contract tests | 10 minutes |
| T2 Integration | Changed external/service boundary only | Bounded contract and integration proof | 15 minutes |
| T3 Full regression | Scheduled or release-bound; parallel shards | Cross-module regression | 30 minutes per job |
| T4 Release assurance | Explicit pre-release gate for financial/security critical flows | Safety, recovery, permissions and reconciliation | 45 minutes per job |

The current repository implements T0 without initializing submodules, T0a on integration-pin changes, and a separate GEF source-validation job capped at 30 minutes. Product T1–T4 suites are not claimed to exist.

## Execution rules
- Run cheap static and deterministic checks before tests that start services.
- Derive impacted tests from changed paths and contract dependencies; do not rerun unrelated suites after a narrow failure.
- All jobs, test processes, API requests, service health checks and retry loops require finite timeouts.
- T0 must not start Docker, contact Meta/Kiwify, create external resources or require secrets.
- Maximum one evidence-producing rerun after a causal fix; an infrastructure retry is allowed once with the failure classified.
- On timeout or failed proof, capture concise logs, stop dependent work and report unverified criteria.
- Full benchmarks are opt-in or release-bound. Record machine, dataset, seed, baseline and variance; no benchmark loops without a sample/iteration cap.

## High-assurance future tests
Any module that can spend money, publish content, refund or alter account permissions must include dry-run and sandbox contracts, hard-cap boundary tests, kill-switch tests, idempotency/replay tests, partial-failure recovery, spend/revenue reconciliation and an independent exact-head audit. Tests must use isolated test accounts, never the user's live budget by default.
