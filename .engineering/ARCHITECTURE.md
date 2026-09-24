# Architecture

Status: `DRAFT — NO PRODUCT STACK APPROVED`

No product-runtime framework, database, provider, hosting target or external commerce/marketing integration has been approved. Architecture planning must compare viable approaches, document tradeoffs, security and failure modes, and record decisions before product implementation.

## Harness-first verification invariant
Every product module must be testable through an isolated, registered harness. The harness registry, targeting rules, fixture/isolation contract, failure packet and checkpoint linkage are defined in `.engineering/HARNESS-ARCHITECTURE.md` and `.engineering/HARNESS-REGISTRY.json`. A candidate module map and planned harness entries are now recorded under .engineering/MODULE-CATALOG.md, MODULE-MAP.json and HARNESS-REGISTRY.json. They remain unapproved until the complete HVS-PLAN-001 Source Pack is accepted. The runtime stack, provider, runner, deployment and data architecture remain unselected.

## Foundation topology
- `integrations/gef-bootstrap` is a source-workspace submodule used for engineering governance references and separately bounded validation.
- `integrations/hive` is a pinned HIVE source submodule for local development context/memory. Its Compose stack remains independently operated from its own directory.
- Neither submodule is imported as a product application library, and product-runtime coupling to HIVE is not approved.
- External commerce, publishing and advertising systems must be isolated behind explicit adapters if selected in the approved architecture.


## Candidate logical boundaries

The proposed modules are grouped as Product Factory, Growth & Revenue and Platform Services. Connector capability/permission checks, workflow orchestration, security/audit and harness simulation are cross-cutting contracts. The Operator Control Center is the main presentation surface over these domains and must not duplicate business rules. See MODULE-CATALOG.md; no framework or vendor is selected by this map.
