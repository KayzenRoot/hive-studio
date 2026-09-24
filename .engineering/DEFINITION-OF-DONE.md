# Definition of Done

Status: `DRAFT — COMPLETE-PRODUCT CRITERIA TO BE FROZEN`

The product version is complete only when the entire approved product scope—not an MVP subset—meets its testable acceptance criteria and all required integrations, operational controls, documentation, security, deployment and recovery evidence are proven.

At minimum, the final DoD must cover:
- Every approved requirement and module has exact-head implementation and test evidence.
- Quality, accessibility, reliability, performance and supported-device targets are measured.
- External API permissions, publication, checkout, sales events, refunds and account disconnections are validated in approved test accounts.
- Ad-spend controls, configured caps, stop behavior, idempotency, ledgers, reconciliation, auditability and operator emergency override pass high-assurance tests.
- Security/privacy review, secrets handling, data retention/deletion and legal/policy requirements are reviewed.
- Installation, backup/restore, upgrade, rollback, monitoring, support and operator documentation are tested.
- Zero unresolved CRITICAL/HIGH findings; medium/low dispositions are explicit.
- Every product module has registered, isolated harnesses for relevant unit/component behavior and each boundary it owns; each Work Order maps requirements/defects to the smallest sufficient harness set and includes shared-dependency regression where applicable.
- Harnesses use deterministic fixtures, namespaced disposable state, bounded setup/teardown and no production data or live financial/publishing side effects.
- A central harness registry records owner, layer, command, trigger, dependencies, fixtures, timeout and evidence for each harness.
- Every Hive Studio project response has a versioned checkpoint event in GitHub, and the canonical checkpoint accurately points to the latest accepted state and next action.
- Exact-head CI, independent audit and Checkpoint Delta are approved.

Thresholds, providers and requirement-to-evidence mapping remain open until planning. This draft does not authorize release.


## E-book and growth criteria to quantify during planning

- Every release has source/rights lineage for factual claims and visual assets, a reviewed manuscript, intentional typographic hierarchy, consistent cover/interior art direction, captions/alt text, accessibility metadata and a versioned preview.
- PDF/EPUB candidate exports pass structural validation and rendered-page preflight for missing assets/fonts, overflow, navigation/link errors, legibility, metadata and supported-device behavior; numerical thresholds and supported devices are approved before implementation.
- Sales experiments report qualified traffic, checkout completion, average order value, bump/upsell attach, fees, refunds and net contribution with sample size and attribution uncertainty. CTR or platform ROAS alone is not success evidence.
- Customer-facing proof and product claims are source-backed; no fabricated testimonials, false scarcity or guaranteed earnings/sales claims.
