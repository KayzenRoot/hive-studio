# Decisions Ledger

Status: `DRAFT — FOUNDATION REVIEW PENDING`

| ID | Decision | Status | Authority / note |
|---|---|---|---|
| D-001 | Canonical repository is `KayzenRoot/hive-studio`. | APPROVED | User provided the exact repository. |
| D-002 | Product target is complete, not an MVP. | APPROVED | User's explicit direction; detailed scope still requires planning. |
| D-003 | Pin GEF Bootstrap v1.0.0 as a Git submodule; do not copy its All Rights Reserved files. | PROPOSED | Exact tag/commit and upstream install model are recorded in the integration pin manifest. |
| D-004 | Pin HIVE v1.0.3 as a Git submodule, using the published GitHub release tag commit. | PROPOSED | Release is marked stable by GitHub, but its tagged README and candidate receipt still state “not published”; reconcile before treating its receipt as release assurance. |
| D-005 | Keep HIVE as local development support only until a separate ADR decides whether product runtime depends on it. | PROPOSED | Avoids silently coupling the product to a developer tool. |
| D-006 | PR validation is impact-based, has hard timeouts, and avoids running full dependency suites on every prompt. | APPROVED | User requested short, objective tests without loss of quality; exact tiers are in TEST-BENCHMARK-PLAN.md. |
| D-007 | No external ad spend or financial mutation is enabled by default; exact caps and controls must be approved before implementation. | PROPOSED | Safety constraint; detailed product rules remain open. |

Record future decisions as ADRs with context, options, consequences, status and supersession links. Do not rewrite approved history; append amendments.
