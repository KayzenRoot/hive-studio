# Checkpoint Protocol

Status: `APPROVED — ACTIVE CONTRACT`

## Scope

Every response about Hive Studio project work must leave a durable checkpoint event in this repository. A checkpoint is a compact handoff record, not a duplicate of the Source Pack and not automatic approval of the work. Unrelated conversations do not create Hive Studio records.

## One event per project response

Create an append-only file at `.engineering/checkpoints/CP-<WORK-ORDER-ID>-<NNN>.md`. Use a stable unique ID and increment the sequence for that Work Order. Each event records:

- timestamp (UTC), event ID, type (`STATE_CHANGE`, `NO_STATE_CHANGE`, `BLOCKED` or `AUDIT`), status and Work Order;
- repository, base SHA, candidate branch/head or merged SHA, and PR/evidence links;
- concise changes and approved decisions since the prior event;
- tests/checks with exact commands, result and duration; checks not run with why; corrected errors and unresolved risks;
- current stop condition and exactly one next action.

Do not store secrets, credentials, customer data or full logs. Link to bounded evidence and include only the relevant failure excerpt/fingerprint.

For a reply that did not change project state, still add a `NO_STATE_CHANGE` event explaining why and pointing to the latest accepted checkpoint. Never fabricate progress or test evidence.

## Current checkpoint and GitHub flow

- Update `.engineering/CHECKPOINT.md` in the same increment so it points to the latest event and summarizes accepted state, active Work Order, blockers and next action.
- Persist checkpoint events through the normal branch → PR → T0 → exact-head audit → checkpoint decision → merge flow. Do not write directly to `main`.
- An event can say `CANDIDATE` or `PENDING`; only a successful exact-head audit may promote it to `APPROVED`. The executor proposes the delta and records evidence; it does not self-approve.
- The final response names the checkpoint ID and links to its GitHub file and PR. If GitHub cannot be updated, say clearly that the checkpoint is not persisted; do not imply chat memory is the source of truth.
- Keep the current summary concise and the event log append-only. GitHub commits, PRs, CI results and canonical documents outrank conversation memory.

## Checkpoint quality

A useful checkpoint answers: where did we stop, what exactly is accepted, what remains, which evidence proves it, what is blocked, and what single action resumes the work. Before opening a new Work Order, verify the checkpoint against the current main SHA and mark the old Context Lock stale when its authority changed.
