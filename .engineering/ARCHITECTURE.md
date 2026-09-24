# Architecture

Status: `DRAFT — NO PRODUCT STACK APPROVED`

No product-runtime framework, database, provider, hosting target or external commerce/marketing integration has been approved. Architecture planning must compare viable approaches, document tradeoffs, security and failure modes, and record decisions before product implementation.

## Foundation topology
- `integrations/gef-bootstrap` is a source-workspace submodule used for engineering governance references and separately bounded validation.
- `integrations/hive` is a pinned HIVE source submodule for local development context/memory. Its Compose stack remains independently operated from its own directory.
- Neither submodule is imported as a product application library, and product-runtime coupling to HIVE is not approved.
- External commerce, publishing and advertising systems must be isolated behind explicit adapters if selected in the approved architecture.
