# Codex Prompt and Execution Contract

## Goal
Minimize repeated discovery and unnecessary test work while preserving safety and evidence. Codex executes an approved contract; it does not create unapproved scope.

## Before each prompt
1. Read the current checkpoint and Decisions Ledger; resolve Scope, DoD, Architecture, Requirements and Security by source hierarchy.
2. Inspect Git status, branch and base SHA. Read only the active Work Order's named files.
3. Create/refresh a Context Lock with immutable SHAs/fingerprints. Mark it STALE if authority changes.
4. Compile an impact map from changed paths to directly affected tests; reuse evidence only when exact inputs match.

## Required prompt sections
Every implementation or correction prompt carries the stable Work Order ID and these fields: OBJECTIVE; CONTEXT; SCOPE; OUT OF SCOPE; FILES/SOURCES TO READ; REQUIREMENTS; ARCHITECTURE RULES; CONSTRAINTS; ACCEPTANCE CRITERIA; TESTS and hard time budget; DELIVERABLES; REVIEW FORMAT; STOP CONDITION.

Use an incremental prompt containing the Work Order and relevant deltas/paths, not a paste of the entire source pack. Do not produce a new feature prompt while the current increment is CORRECTION REQUIRED or BLOCKED.

## Executor sequence
ANALYZE → SOURCE CHECK → WORK ORDER → CONTEXT LOCK → PREFLIGHT → EXECUTE → TARGETED TESTS/EVIDENCE → PR → EXACT-HEAD AUDIT → CHECKPOINT DELTA → MERGE → NEXT.

- Preserve existing files and unrelated user work. Make only admitted changes on the named branch.
- Run the fastest deterministic checks first; add only tests implicated by the change. The T0 gate reads Git tree links without downloading submodules; source/version and full GEF jobs run only when their relevant submodule pointer changes.
- Each command and job needs a timeout. On a failure, capture the first useful error, diagnose its cause, fix the smallest affected surface, then rerun that proof. Do not loop blindly or silently extend a timeout.
- Report base/head SHA, files, decisions, tests with duration/result, omitted checks and reasons, security/architecture risks, evidence and proposed checkpoint delta.
- A green CI is not full acceptance; audit the exact head against Scope, Architecture, Requirements, acceptance criteria and DoD. Do not promote the checkpoint yourself.
- Stop on missing permissions, unsupported API operations, a stale lock, test-budget exhaustion, or an unverified external side effect.

## Test budgets
The mandatory fast gate is at most 5 minutes. Focused tests target 10 minutes, relevant integration 15 minutes, full regression at most 30 minutes/job, and explicit high-assurance release proofs at most 45 minutes/job. The test plan is canonical; higher-assurance requirements cannot be dropped to meet a budget—split/parallelize them and record all evidence instead.
