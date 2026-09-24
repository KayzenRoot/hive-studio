# Decisions Ledger

Status: `DRAFT — PRODUCT DECISIONS REMAIN OPEN`

| ID | Decision | Status | Authority / note |
|---|---|---|---|
| D-001 | Canonical repository is `KayzenRoot/hive-studio`. | APPROVED | User provided the exact repository. |
| D-002 | Product target is complete, not an MVP. | APPROVED | User's explicit direction; detailed scope still requires planning. |
| D-003 | Pin GEF Bootstrap v1.0.0 as a Git submodule; do not copy its All Rights Reserved files. | APPROVED | Exact tag/commit and upstream install model are recorded in the integration pin manifest. |
| D-004 | Pin HIVE v1.0.3 as a Git submodule, using the published GitHub release tag commit. | APPROVED WITH CAVEAT | Release is marked stable by GitHub, but its tagged README and candidate receipt still state “not published”; reconcile before treating its receipt as release assurance. |
| D-005 | Keep HIVE as local development support only until a separate ADR decides whether product runtime depends on it. | APPROVED | Avoids silently coupling the product to a developer tool. |
| D-006 | PR validation is impact-based, has hard timeouts, and avoids running full dependency suites on every prompt. | APPROVED | User requested short, objective tests without loss of quality; exact tiers are in TEST-BENCHMARK-PLAN.md. |
| D-007 | No external ad spend or financial mutation is enabled by default; exact caps and controls must be approved before implementation. | PROPOSED | Safety constraint; detailed product rules remain open. |
| D-008 | Every product module uses registered, isolated, problem-focused harnesses selected by impact/dependency closure; no all-suite default. | APPROVED | Explicit user direction; harness tooling and module map remain for HVS-PLAN-001. |
| D-009 | Every Hive Studio project response records a durable checkpoint event in GitHub; the canonical checkpoint is a concise current-state pointer and is promoted only after exact-head audit. | APPROVED | Explicit user direction; follow `.engineering/CHECKPOINT-PROTOCOL.md`. |

| D-010 | Use the 20-module map, three product/platform groups and cross-module Operator Control Center shell as the proposed logical boundary for complete planning. | PROPOSED | Candidate only in MODULE-CATALOG.md and MODULE-MAP.json; full Source Pack and user approval still pending. |
| D-011 | Gate every connector action by an evidenced API capability and permission state; preserve assisted-only behavior where write support is not verified. | PROPOSED | Capability matrix and cited public API evidence are in MODULE-CATALOG.md; each provider still requires versioned contract tests. |
| D-012 | Provide policy-bounded autonomy modes, with server-enforced budget limits and fail-closed pause/reconciliation before financial actions. | PROPOSED | Consistent with the complete-automation goal and SECURITY.md; exact modes and caps remain open. |

Amendment to D-008: the HVS-PLAN-001 candidate now maps each proposed module to a planned harness ID. Those entries are design-only, non-runnable and do not count as test evidence.

Record future decisions as ADRs with context, options, consequences, status and supersession links. Do not rewrite approved history; append amendments.

