# Harness-First Architecture

Status: `CANDIDATE GOVERNANCE REQUIREMENT — PRODUCT MODULE MAP PENDING HVS-PLAN-001`

## Goal

Make each defect, requirement and module diagnosable in a small, repeatable test environment. A harness is a registered, bounded proof surface with its own fixtures, command, isolation rules and evidence—not a duplicate production stack and not permission to omit affected contracts.

## Required layers

- **Foundation/component:** one module or deterministic repository contract; cheapest checks run first.
- **Contract:** a stable interface between modules or an external adapter, exercised with controlled fakes or an explicitly authorized sandbox.
- **Integration/workflow:** only the services and modules needed to prove an impacted flow, using disposable state and bounded health checks.
- **System/regression:** cross-module proof, scheduled or release-bound and split into bounded shards.
- **Safety/performance/recovery:** dedicated proof surfaces for spend/publishing/payment controls, latency/cost, migrations, backup/restore and partial-failure recovery; never run live side effects by default.

A defect normally starts in one focused harness. If impact analysis shows a shared dependency or contract, add the relevant neighboring harnesses. Do not run every product suite for an isolated change, and do not stop at a narrow test when the change crosses a shared boundary.

## Registry contract

`.engineering/HARNESS-REGISTRY.json` is the central index. Every entry must have a stable ID, owner/module, layer, purpose, command, trigger, hard timeout, dependency/impact links, fixture strategy, service/network/side-effect policy, isolation and cleanup instructions, and evidence destination. Work Orders map acceptance criteria and defect classes to registry IDs. The registry itself is validated by the dependency-free T0 gate.

The candidate product module boundaries and planned harness IDs are recorded in MODULE-MAP.json and HARNESS-REGISTRY.json by HVS-PLAN-001. Runner/framework choice and concrete commands remain deferred until the full Source Pack and architecture are approved. Do not add a test framework or a second production-like deployment solely to create a harness.

## Isolation and reproducibility

- Use synthetic, sanitized fixtures with stable identifiers/seeds and a recorded fixture fingerprint.
- Give each run a disposable unique namespace for databases, queues, files and containers; never reuse developer or production state.
- Use controlled clocks/randomness when behavior depends on time or randomness.
- Bound setup, service health checks, retries, command execution and teardown. Surface leaked resources as failures.
- Keep credentials and real customer content out of fixtures, CI logs and prompts. External sandboxes need a separately authorized Work Order, minimum permissions and explicit spend/side-effect caps.
- Harnesses must fail closed when isolation or required configuration cannot be proven.

## Targeted execution and failure packets

For every Work Order, construct `acceptance criterion / failure class → harness ID → command → time budget → evidence`. Select harnesses from changed files, dependency/contract links and the affected requirement. Cache results only when commit SHA, harness config and fixture fingerprint match.

A failure packet contains the harness ID, exact command, commit, failing assertion/error excerpt, relevant paths, environment/fixture fingerprint, elapsed time, and artifact/evidence link. Include this packet—not full unrelated logs or broad repository context—in the next prompt. Allow one evidence-producing rerun after a causal fix; stop on budget exhaustion or an unexplained flake.

## Current foundation entry

`HAR-FOUNDATION-T0` runs `node scripts/verify-foundation.mjs` on each PR with a 5-minute hard timeout. Only HAR-FOUNDATION-T0 is implemented and runnable. Product/shared entries in the candidate registry are planned design records with command=null; they are not tests, do not pass, and cannot be selected for execution.


## Planned-to-runnable lifecycle

The registry supports status implemented or planned. A planned entry must have a null command and explicit implementation gate; it reserves ownership, fixtures, dependencies, isolation, side-effect policy and a hard time budget. Promotion to implemented requires an approved architecture/runner, a real bounded command, validated fixtures, cleanup proof, acceptance mapping and exact-head evidence. Never report a planned harness as passing.
