# Work Order HVS-PLAN-001 — Complete Product Source Pack

Status: ACTIVE — MODULE MAP CANDIDATE MILESTONE RECORDED; FULL PLAN NOT COMPLETE

## Objective

Complete product discovery and freeze the canonical Source Pack for the entire platform. Define the logical module boundaries, capability map, operators and workflows; compare and select the product architecture and external contracts; specify security, privacy, spend controls, costs, deployment, recovery, test evidence and measurable Definition of Done. No product code in this Work Order.

## Current milestone

This response proposes 20 domain/platform modules, an Operator Control Center shell, a pipeline for research-led illustrated e-books, a sales-learning loop, an official-capability policy and module/shared harness IDs. The proposal is tracked in MODULE-CATALOG.md, MODULE-MAP.json and HARNESS-REGISTRY.json. It is still a candidate: HVS-PLAN-001 remains active until the full Source Pack acceptance criteria below are resolved and approved.

## Scope

- Reconcile the proposed modules and priority classifications with user intent and full-product target.
- Specify end-to-end workflows, roles, data model boundaries, integration capabilities and failures.
- Compare current supported API contracts for Kiwify, Meta/Instagram and viable alternatives.
- Define the final e-book formats, visual/layout/accessibility quality gates and review requirements.
- Define truthful offer, sales page, organic content, campaign, attribution and customer lifecycle requirements.
- Specify autonomous operating modes and hard budget/publishing/payment controls.
- Select architecture, model-provider strategy, runner, storage, deployment and observability based on current evidence.
- Complete privacy, rights, legal-policy, security and threat review at the product level.
- Map each requirement, failure class and acceptance criterion to the smallest sufficient harness, command, time budget and evidence.
- Freeze measurable SLOs, cost ceilings, recovery and release DoD.

## Out of scope

- Product application code, schema migrations, production secrets, credentials, user data or live external writes.
- Creating/publishing real products, Instagram content, ads, refunds, payments or account permission changes.
- Treating the candidate module map, unresolved price/budget examples, or public API index observations as final operational approval.
- Choosing a stack, model, vendor or test framework without the comparison and evidence required by the Source Pack.

## Acceptance criteria for the complete Work Order

1. Every included module has an owner boundary, inputs/outputs, dependencies, failure modes, user-facing behavior, data/privacy classification and priority.
2. The complete customer journey from create-product through reviewed e-book, sales/fulfillment, organic/paid growth, reconciliation and learning is specified.
3. Ebook format, layout, image provenance, accessibility, page-render preview and measurable quality thresholds are approved.
4. Platform adapters have a versioned verified capability matrix, app/account permissions, sandbox proof requirements, unavailable/assisted-only fallbacks and recovery semantics.
5. Autonomy states, operator permissions, spend/publication/financial hard caps, idempotency, kill switch, stale-data behavior and reconciliation are testable and approved.
6. Pricing/unit economics, fees, generation/provider cost, infrastructure, data retention, backup/restore, deployment and monitoring are evaluated against explicit ceilings.
7. Security, privacy, content-rights, consent and regulatory/platform-policy obligations have evidence-backed dispositions with no unresolved critical/high risk.
8. Every requirement has a unique ID, priority, source, acceptance criteria, harness ID(s), bounded test command/time and evidence destination.
9. Each product/shared harness is executable and isolated, or has an explicit approved dependency/runner decision and bounded implementation plan; planned entries are never represented as tests passed.
10. The final Source Pack, exact-head T0, impact tests, independent audit, checkpoint delta and approval are recorded in GitHub.

## Test/evidence budget

- T0 foundation: node scripts/verify-foundation.mjs, hard maximum 5 minutes.
- Product harnesses are reserved in the candidate registry but remain non-runnable until runner/architecture selection; commands are null by design.
- Future harness budgets must follow TEST-BENCHMARK-PLAN.md; no full suite runs for this documentation milestone.
- Evidence: bounded exact-head GitHub Actions, module/capability matrices, decision records and checkpoint event.

## Stop condition

Keep HVS-PLAN-001 open and block product implementation until every acceptance criterion above is resolved, the complete Source Pack is approved, and an exact-head audit accepts the final plan.