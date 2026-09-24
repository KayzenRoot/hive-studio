# Module Catalog

Status: CANDIDATE DOMAIN MAP — HVS-PLAN-001 REMAINS OPEN

## Product shape

Hive Studio is planned as a complete digital-product creation and growth operation. The module boundaries below connect a single create-product action to research, a polished e-book, an offer and sales presence, permission-aware organic/paid marketing, measurement and bounded automation. This is a proposed logical map; it does not select frameworks, vendors, database, deployment, model provider or test runner, and it does not authorize live external writes or ad spend.

The primary operator experience is an Operator Control Center: start a run, set policy, review generated work, inspect evidence and outcomes. It is a presentation shell over the modules, not a second source of business rules.

## Product Factory

| ID | Module | Responsibility | Priority | Harness |
|---|---|---|---|---|
| MOD-01 | Workspace & Product Portfolio | Workspaces, products, briefs, versions, lifecycle states and the single create-product entry point. | NECESSARY | HAR-01 |
| MOD-02 | Market & Demand Intelligence | Evidence-led niche and audience research, demand signals, source freshness, confidence and competitor observations. | NECESSARY | HAR-02 |
| MOD-03 | Audience, Positioning & Offer Strategy | Audience outcomes, positioning, offer structure, pricing hypotheses, and optional main-offer, order-bump and upsell ladder. | NECESSARY | HAR-03 |
| MOD-04 | Research, Evidence & Rights Ledger | Source provenance, citations, claim-to-source links, licensing, permissions, freshness and asset origins. | NECESSARY | HAR-04 |
| MOD-05 | Editorial Studio | Structured outline and manuscript drafting, chapter editing, voice consistency, versions and review notes. | NECESSARY | HAR-05 |
| MOD-06 | Content Quality & Trust | Fact, consistency, originality, completeness, readability and policy checks; route risky claims to qualified human review. | NECESSARY | HAR-06 |
| MOD-07 | Brand & Visual Studio | Art direction, covers, purposeful illustrations, diagrams, charts, captions, alt text and provenance-aware asset creation. | NECESSARY | HAR-07 |
| MOD-08 | E-book Composition & Export | Compile structured content into polished digital and print-ready layouts; candidate outputs include accessible PDF and reflowable EPUB with rendered-page preflight. | NECESSARY | HAR-08 |
| MOD-09 | Digital Asset Vault & Versioning | Versioned manuscripts, exports, images and creatives with checksums, licenses, prompts, lineage and rollback. | NECESSARY | HAR-09 |

## Growth & Revenue

| ID | Module | Responsibility | Priority | Harness |
|---|---|---|---|---|
| MOD-10 | Sales Page & Conversion Studio | Truthful mobile-first offer pages, copy and creative variants, accessibility/performance checks and controlled experiments. | NECESSARY | HAR-10 |
| MOD-11 | Commerce, Checkout & Fulfilment | Capability-gated commerce adapters for product/checkout actions, purchase/refund events, entitlement and delivery handoff. | NECESSARY | HAR-11 |
| MOD-12 | Customer Lifecycle & CRM | Consent-aware onboarding, support, feedback, refund insight and relevant next-product journeys. | IMPORTANT | HAR-12 |
| MOD-13 | Instagram Profile & Organic Studio | Profile strategy, content calendar, captions, carousels/reels/story assets and only officially supported publishing operations. | NECESSARY | HAR-13 |
| MOD-14 | Paid Campaign Studio | Meta campaign planning, audience/creative variants, preview, launch, measurement and pause through explicit account capabilities and spend policy. | NECESSARY | HAR-14 |
| MOD-15 | Autonomy Policy & Spend Guard | Per-account and per-campaign operating modes, hard budget caps, approval rules, kill switch, idempotency, spend ledger and fail-closed stop behavior. | NECESSARY | HAR-15 |
| MOD-16 | Attribution, Economics & Growth Experiments | Join consented funnel, sales, ad cost, fees and refund signals; report uncertainty and optimize for net contribution rather than clicks alone. | NECESSARY | HAR-16 |

## Platform Services

| ID | Module | Responsibility | Priority | Harness |
|---|---|---|---|---|
| MOD-17 | Durable Workflow Orchestrator | Resumable end-to-end workflows with checkpoints, retries, idempotency, approvals, bounded jobs and clear recovery states. | NECESSARY | HAR-17 |
| MOD-18 | Integration & AI Provider Control Plane | Capability registry, API/version and permission checks, credential references, quotas, model routing, cost tracking and safe fallbacks. | NECESSARY | HAR-18 |
| MOD-19 | Identity, Privacy, Security & Audit | Identity, workspace boundaries, least privilege, consent, retention/deletion, secret redaction, revocation and immutable action evidence. | NECESSARY | HAR-19 |
| MOD-20 | Harness, Simulation & Evaluation Lab | Harness registry, deterministic fixtures, connector fakes, workflow simulations, e-book quality evaluations and bounded evidence packets. | NECESSARY | HAR-20 |

Priority is a proposed planning classification, not a smaller-product/MVP cut. NEEDS/IMPORTANT categories, boundaries and their acceptance criteria still require reconciliation in the complete Source Pack. Additional sales platforms and social/ad channels are FUTURE until discovery proves they belong in this target; building payment rails or bypassing official APIs is OUT OF SCOPE for the current plan.

## E-book quality pipeline

1. Validate audience and problem from cited, dated research; keep uncertainty visible.
2. Build an evidence ledger so factual claims link to permitted sources and asset origins.
3. Draft a structured outline and manuscript with version history, editorial review and clear claim checks.
4. Define an art direction and create a coherent cover plus relevant interior images, diagrams or charts. Record provenance, permissions, captions and alt text; do not decorate with irrelevant stock art.
5. Compose from semantic content and reusable design tokens: clear hierarchy, readable type, consistent grid, intentional page breaks, running elements, navigation, citations, metadata and accessible contrast.
6. Export proposed PDF and reflowable EPUB variants. Render them and run preflight for overflow, awkward/orphaned pages, missing/low-resolution assets, fonts, broken links, table of contents, metadata and accessibility. Make a page-preview artifact available before release.
7. Preserve immutable release versions and their source/evidence/asset lineage. A failed preflight blocks release and points to the exact page or asset.

The quality gate should combine automated structural checks with visual page inspection and editorial review. Exact accessibility standard, export formats, supported languages, print needs and human-review rules remain to be selected. Health, financial, legal and earnings claims need a separate qualified review path.

## Growth loop designed to improve sales

- **Validate before producing:** compare audience problems and demand signals; store sources, dates, confidence and counter-evidence.
- **Make the offer understandable:** connect audience outcome, e-book contents, delivery and price hypothesis; model an optional order bump or upsell only when it adds real value.
- **Ship a trustworthy page:** mobile-first load and readability checks, transparent terms, source-backed claims and genuine proof only.
- **Reuse the best source asset:** derive Instagram posts, carousels, short-video scripts and email/onboarding content from reviewed chapters, with channel-specific edits and provenance.
- **Run bounded experiments:** test a small number of message/creative/page hypotheses; use account permissions and a spend policy; pause cleanly and record the reason.
- **Optimize on business outcomes:** track qualified traffic, page/checkout completion, average order value, bump/upsell attach, fees, refunds and estimated net contribution. Label attribution gaps and small samples; clicks or platform-reported ROAS alone do not establish profit.
- **Improve after purchase:** use consented support and feedback to fix the book and choose relevant follow-up products. Ask for honest feedback without fabricated testimonials or coercive incentives.

No system can guarantee purchases or profit. The goal is to make quality, learning speed, transparent economics and controlled experimentation easier to repeat.

## Candidate technology hypotheses

These are ideas for prior-art review and measurable trials, not claims of exclusive novelty or approved architecture:

- **Evidence-to-offer lineage:** trace research source → audience/offer → manuscript claim → page/creative → order/refund outcome.
- **Semantic publishing compiler:** generate PDF/EPUB from structured content and design tokens, then attach rendered-page evidence and preflight diagnostics to each version.
- **Margin-aware experiment planner:** rank next tests by expected contribution and uncertainty, accounting for fees/refunds and sample sufficiency rather than click-through rate alone.
- **Bounded autonomy controller:** make each action pass through observe → simulate → policy check → optional approval → execute → reconcile; pause when account state is stale or ambiguous.
- **Cost-aware generation router:** reuse unchanged outputs, route simple tasks to economical providers and reserve stronger models for high-impact review; report cost per accepted artifact.

Any hypothesis moves forward only after prior-art review, a baseline, quality/cost measurement and a failure-mode review.

## External capability evidence

Connector operations are gated by a versioned capability registry: VERIFIED-READ, VERIFIED-WRITE, ASSISTED-ONLY, SANDBOX-ONLY or UNAVAILABLE. Store the API version, permission set, evidence link, verification date, rate limit and failure semantics. Never silently substitute browser automation for an undocumented endpoint.

As checked on 2026-09-24, Kiwify's public API reference index lists product listing/details and sales operations but does not show a product-create route. That is an observation about the index, not proof that no route exists. Keep product creation assisted-only until a supported write path is documented and verified. Official index: https://docs.kiwify.com.br/llms.txt

Meta's official Instagram API material describes publishing and insights for eligible professional accounts; login model, linked Page, account type and permissions constrain each path. The Marketing API has campaign/ad-set budget and insights objects, while actual writes require approved app/account permissions and version-specific contract tests. Official references: https://www.postman.com/meta/instagram/overview and https://www.postman.com/meta/workspace/meta/documentation/23987686-4f83a1b2-cf7d-4b7a-8b1a-1dd139bcc3c5

## Explicitly unresolved

- Operator persona(s), team/workspace model, product types and supported languages.
- Final must-have vs important scope, formats, accessibility targets, quality thresholds and human review gates.
- Commerce provider(s), page hosting, purchase/delivery/refund event ownership and any documented Kiwify product-write path.
- Meta app review, Instagram publishing permissions, ad-account boundaries, API versions, attribution quality and failure behavior.
- Allowed autonomous action modes, per-account caps, approval policy, emergency pause and stop thresholds. The earlier R$50/day is an example from discussion, not an approved budget.
- Model/provider selection, workflow runner, database/storage, hosting/deployment, cost and recovery targets.
- Legal/privacy obligations, consent, retention/deletion, rights clearance and customer support responsibility.
- Exact harness runner, command contracts and acceptance-to-evidence mapping.

## Source records

- Official Kiwify API reference index: https://docs.kiwify.com.br/llms.txt
- Official Meta Instagram API collections: https://www.postman.com/meta/instagram/overview
- Official Meta Marketing API collection: https://www.postman.com/meta/workspace/meta/documentation/23987686-4f83a1b2-cf7d-4b7a-8b1a-1dd139bcc3c5
- Repository policy and pending decisions: .engineering/REQUIREMENTS.md, .engineering/SCOPE.md, .engineering/SECURITY.md and .engineering/HARNESS-ARCHITECTURE.md
