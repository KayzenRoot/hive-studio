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

The current repository implements T0 without initializing submodules, T0a on integration-pin changes, and a separate GEF source-validation job capped at 30 minutes. The foundation T0 contract is registered as `HAR-FOUNDATION-T0`. Product-module harnesses are not claimed to exist; HVS-PLAN-001 must map every planned module and contract to a harness before implementation.

## Harness targeting and isolation
- Resolve the changed path/requirement/defect to registry IDs first; run the smallest sufficient affected harness set plus required T0. Include dependency/contract harnesses for shared libraries and external boundaries; never use narrow targeting to hide plausible regressions.
- Each harness declares owner, layer, purpose, command, triggers, impacted dependencies, fixtures, service requirements, isolation and cleanup, network/side-effect boundary, timeout and evidence destination.
- Use deterministic seeds, fixed clocks where relevant, sanitized synthetic fixtures and disposable, uniquely namespaced state. Setup, health checks and teardown are bounded. A failed teardown is reported and isolated from developer data.
- Unit/component harnesses stay inside a module; contract harnesses use controlled fakes or explicit sandboxes; integration/workflow harnesses run only for impacted boundaries; performance and migration/recovery harnesses are opt-in or release-bound.
- Never use production credentials/data or trigger live advertising, payments, publishing, refunds or permission changes. Real external sandbox work requires explicit approval and a dedicated bounded Work Order.
- Cache only when commit, harness configuration and fixture fingerprints match. Reuse concise failure packets instead of full logs or repository rediscovery.

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


## HVS-PLAN-001 module-harness candidate

MODULE-MAP.json and HARNESS-REGISTRY.json reserve one direct harness for each proposed module plus shared contracts for Kiwify, Instagram, Meta, ebook preflight, attribution economics, budget safety, workflow replay and source/rights traceability. These 28 product/shared entries are planned only and have no executable commands until architecture and runner are approved. Their proposed bounded targets are 10 minutes for component/platform proof and 15 minutes for external/workflow proof; the validated T0 remains 5 minutes. No product or live-account tests are claimed.
