# Source Hierarchy

Status: `DRAFT — PRODUCT PLANNING NOT COMPLETE`

Resolve conflicts in this order; never overwrite an approved decision by convenience:

1. Current `.engineering/CHECKPOINT.md` and its accepted exact-head evidence.
2. `.engineering/DECISIONS-LEDGER.md` and accepted ADRs.
3. `.engineering/SCOPE.md`.
4. `.engineering/DEFINITION-OF-DONE.md`.
5. `.engineering/ARCHITECTURE.md`.
6. `.engineering/HARNESS-ARCHITECTURE.md` and the validated `.engineering/HARNESS-REGISTRY.json`.
7. `.engineering/REQUIREMENTS.md`.
8. Security, test/benchmark, checkpoint protocol, deployment and other canonical sources.
9. The active Work Order and Context Lock, which may narrow but not contradict higher sources.
10. Implementation, tests, CI and exact-head audit evidence.
11. Conversation memory, which is context only and never proof.

The Git commit is the record of what exists; tests and evidence establish what is proven. GEF Bootstrap supplies engineering process references only. It does not define Hive Studio product requirements. HIVE is a separate development-support service unless a later approved ADR adopts a product-runtime dependency.
