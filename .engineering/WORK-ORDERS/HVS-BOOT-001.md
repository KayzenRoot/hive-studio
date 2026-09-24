# HVS-BOOT-001 — GEF Bootstrap and HIVE Foundation

- Status: `IN_PROGRESS`
- Risk: `STANDARD` (repository/developer-tooling setup; no product financial action)
- Repository: `KayzenRoot/hive-studio`
- Base SHA: `9053a1aef09882b13d501b6238623da6060b30cb`
- Branch: `foundation/hvs-boot-001-gef-hive`

## OBJECTIVE
Install the requested GEF Bootstrap and latest published stable HIVE source as reproducibly pinned submodules; establish the Source Pack starter, Codex execution contract and fast, bounded verification.

## CONTEXT
Repository was empty. GEF Bootstrap v1.0.0 is a source workspace, not a published npm CLI/package. Its license is All Rights Reserved. HIVE GitHub publishes v1.0.3 as a stable release; the in-tag README and release-candidate receipt still say unpublished, so record that inconsistency and do not claim independent release-receipt verification.

## SCOPE
- Pin GEF v1.0.0 and HIVE v1.0.3 at exact commits.
- Add `.gitmodules`, setup docs, integration-pin manifest and deterministic foundation validator.
- Add initial canonical project source files marked draft where product decisions remain open.
- Add Codex/agent rules, test budgets and read-only fast/GEF workflows with hard timeouts.
- Create an exact-base Context Lock and this Work Order.

## OUT OF SCOPE
Product application code, detailed feature planning, framework/database/provider selection, production HIVE coupling, Kiwify/Meta/Instagram API mutation, publishing, checkout, payments, ad spend, secret configuration, deployment and modification of upstream GEF/HIVE repositories.

## FILES/SOURCES TO READ
- GEF tag v1.0.0 at commit `866fe3af8cccc65c929aaf6a47a924401fa448b3`: README, installation/quickstart, package.json, LICENSE, production acceptance.
- HIVE tag v1.0.3 at commit `52bd3dab54dd4f16264072e198ed1fc23168f7fa`: VERSION, Docker Compose, install/upgrade docs, release record and publish request.
- Current empty target repo metadata; this Work Order and Context Lock.

## REQUIREMENTS
- Exact immutable submodule pins; do not track mutable `main`.
- Preserve GEF license boundary; do not copy its source into consumer files.
- No secrets, live integrations or app implementation.
- Every required foundation/source file exists and validates using Node built-ins only.
- Normal PR gate completes within 5 minutes. Full GEF validation runs only on submodule change or manual dispatch, with a 30-minute job timeout.
- Record the HIVE v1.0.3 release-document mismatch without silently rewriting upstream history or claiming artifact receipt verification.

## ARCHITECTURE RULES
Submodules remain separately versioned source workspaces. HIVE's Docker Compose/data lifecycle remains isolated under its own directory. Product-runtime use of HIVE and the final product stack require later approval.

## CONSTRAINTS
No direct main mutations beyond the minimum empty-repository seed required to create a branch. No force-push, history rewrite, destructive operations, credentials or external API mutations.

## ACCEPTANCE CRITERIA
1. `.gitmodules` links the canonical repositories and Git tree pins exactly match both recorded full SHAs.
2. Recursive checkout exposes Hive `VERSION=1.0.3` and GEF package version `1.0.0`.
3. Source-pack starter documents correctly label open product decisions as draft.
4. Codex instructions include the required Work Order fields, context locking, scope control and exact-head evidence handoff.
5. T0 validator passes without dependencies/network/services; mandatory CI has a 5-minute timeout.
6. GEF full validation is isolated to a 30-minute bounded job, not run on routine product changes.
7. No product source, secret, external mutation or unsupported integration claim is introduced.
8. Exact-head diff and CI are reviewed; checkpoint remains proposed until audit.

## TESTS
- Run `node scripts/verify-foundation.mjs` on the exact candidate.
- Confirm the GitHub Fast Gate passes for the PR head.
- Confirm GEF full validation is defined and bounded; run only if the GEF submodule itself changes or via explicit workflow dispatch.
- Inspect `.gitmodules`, integration SHAs, draft labels and absence of secret files.
- Do not claim Docker/HIVE runtime health: no local Docker runtime test is part of this increment.

## DELIVERABLES
One focused PR, pinned submodules, Source Pack starter, AGENTS/Codex contract, bounded CI, exact-head evidence bundle and proposed Checkpoint Delta.

## REVIEW FORMAT
Final review in Brazilian Portuguese: verdict, base/head, files, check names/results/durations, tests not run and reason, upstream HIVE caveat, risks, exact-head evidence and checkpoint disposition.

## STOP CONDITION
APPROVED only if all criteria have exact-head evidence and no unresolved HIGH/CRITICAL defect. Otherwise issue only a same-Work-Order Correction Delta or mark BLOCKED. Do not create HVS-PLAN-001 implementation work before approval.
