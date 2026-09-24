# Deployment

Status: `DRAFT — PRODUCT DEPLOYMENT TARGET OPEN`

Product deployment target, hosting, local/cloud split, operating cost and release topology remain undecided. Do not deploy product code before the deployment source and security model are approved.

The pinned HIVE submodule has a separately documented local Docker Compose deployment for development support. Its data volumes and `.env` belong to HIVE; do not run destructive volume reset commands during setup or upgrades. See `docs/HIVE-INTEGRATION.md` and the upstream HIVE upgrade guide.
