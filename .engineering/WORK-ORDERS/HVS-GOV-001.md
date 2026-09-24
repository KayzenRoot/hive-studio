# HVS-GOV-001 — Harness-First Development and Per-Response Checkpoints

- Status: `IN_PROGRESS`
- Risk: `STANDARD` (cross-cutting engineering governance; no production or external side effects)
- Repository: `KayzenRoot/hive-studio`
- Base SHA: `fc43d93e219b4266a6d1c2b4745284fdbc1b98e0`
- Branch: `foundation/hvs-gov-001-harness-checkpoint`

## OBJECTIVE

Make isolated, registered, problem-focused harnesses and durable checkpoints for every Hive Studio project response canonical requirements before product-code planning.

## CONTEXT

HVS-BOOT-001 is approved and merged. Product modules, runtime, database and test runner remain intentionally undecided until HVS-PLAN-001. The user explicitly requires minimizing test scope/token overhead while preserving contract coverage, and wants GitHub to be the source of truth with a checkpoint every project response.

## SCOPE

- Add canonical harness architecture, machine-readable foundation registry and per-response checkpoint protocol.
- Update architecture, requirements, scope, Definition of Done, test plan, decisions, backlog, Source Hierarchy, AGENTS/Copilot instructions and Codex prompt contract.
- Extend the deterministic T0 verifier to validate the harness registry and checkpoint-event presence.
- Create this Work Order, exact-base Context Lock and checkpoint event `CP-HVS-GOV-001-001`.
- Record the accepted next step as HVS-PLAN-001 with a requirement-to-harness map.

## OUT OF SCOPE

Product module implementation, choice/addition of test-runner dependencies, concrete harnesses beyond the existing foundation gate, application changes, Docker/HIVE runtime setup, external APIs, live ad spend, and completion of full product discovery.

## FILES/SOURCES TO READ

- `.engineering/CHECKPOINT.md`, `.engineering/DECISIONS-LEDGER.md`, `.engineering/SCOPE.md`, `.engineering/DEFINITION-OF-DONE.md`
- `.engineering/ARCHITECTURE.md`, `.engineering/REQUIREMENTS.md`, `.engineering/TEST-BENCHMARK-PLAN.md`, `.engineering/SOURCE-HIERARCHY.md`
- `AGENTS.md`, `.github/copilot-instructions.md`, `docs/CODEX-PROMPT-AND-EXECUTION.md`
- `scripts/verify-foundation.mjs`, `.engineering/integrations/INTEGRATION-PINS.json`
- Context Lock `.engineering/context-locks/HVS-GOV-001.json`

## REQUIREMENTS

- A product module is not implementation-ready until its owner, contracts and registered harness map are defined.
- Defect/acceptance mapping selects the smallest sufficient harness set; shared dependencies and interfaces add relevant adjacent proofs.
- Every harness specifies stable ID, owner, layer, scope, command, trigger, dependency links, deterministic fixture strategy, isolation/cleanup, side-effect/network/data boundary, hard timeout and evidence location.
- Harnesses use disposable namespaced state, synthetic fixtures, bounded lifecycle, and fail closed without proven isolation.
- Every Hive Studio project response produces one append-only checkpoint event in GitHub; `NO_STATE_CHANGE` is valid only with an explicit reason. Update the current checkpoint summary and reference its event ID/link in the reply.
- Checkpoint events never self-approve. Use branch, PR, bounded checks and exact-head audit; no direct main write.
- Do not select the runtime, test framework or product module layout here.

## ARCHITECTURE RULES

The central registry is `.engineering/HARNESS-REGISTRY.json`. The current active entry is `HAR-FOUNDATION-T0`. Module/component, contract, integration/workflow, system, safety, performance and recovery harness layers are available as design patterns; HVS-PLAN-001 selects those needed by the complete product. T0 remains dependency-free and five-minute bounded.

## CONSTRAINTS

Preserve HVS-BOOT-001 and its exact integration pins. No force-push, main mutation, broad cleanup, new dependency, live external mutation, secret, or claim of unimplemented product harnesses.

## ACCEPTANCE CRITERIA

1. Harness policy gives targeted-test rules, dependency closure, isolation, deterministic fixtures, bounded lifecycle, evidence and token-efficient failure packets.
2. A valid machine-readable registry contains the foundation harness and hard timeout.
3. T0 checks the registry, canonical documents, and at least one well-named checkpoint event without initializing submodules or network calls.
4. Every project-response checkpoint has an explicit schema and GitHub persistence/PR flow, including a truthful no-state-change event.
5. Architecture/Requirements/Scope/DoD/Test Plan/Decisions/Backlog/Agent guidance consistently include these requirements.
6. No product stack, runner, or module structure is prematurely selected.
7. The final exact head passes T0 within five minutes; diff and evidence are audited; checkpoint delta is approved only after that audit.

## TESTS

- `node scripts/verify-foundation.mjs` on the final candidate head; hard limit 5 minutes.
- Validate registry JSON, unique IDs and finite timeout bounds through the T0 verifier.
- Review exact-base diff, repository status, checkpoint event, updated source hierarchy and absence of secrets or product code.
- No product-module tests, GEF full suite, HIVE Docker tests or benchmark are relevant; no integration pins changed.

## DELIVERABLES

One focused PR, harness architecture and registry, checkpoint protocol, cross-linked canonical/agent instructions, Work Order, Context Lock, per-response checkpoint event, exact-head T0 evidence and accepted Checkpoint Delta.

## REVIEW FORMAT

Final response in Brazilian Portuguese: verdict, base/head, changed files, checkpoint ID/link, CI command/result/duration, errors corrected, risks/omitted checks and next necessary increment.

## STOP CONDITION

APPROVED only when all criteria have exact-head evidence and no unresolved HIGH/CRITICAL finding. Otherwise make only a same-Work-Order Correction Delta or mark BLOCKED. HVS-PLAN-001 is the only next increment; no product code before its Source Pack is approved.
