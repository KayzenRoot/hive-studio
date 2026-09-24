# HIVE Development Integration

## Installed version and boundary
- Published GitHub release tag: `v1.0.3`
- Exact tag commit: `52bd3dab54dd4f16264072e198ed1fc23168f7fa`
- Path: `integrations/hive`
- License: Apache-2.0; retained as an unmodified submodule.
- Current intent: local development context/memory support. Product-runtime dependency is undecided.

GitHub currently labels v1.0.3 a published stable release and publishes `hive-v1.0.3.zip` with SHA-256 `bad6b3f892221ecb5477f1f3f7546a0f83e611014d1c130d24089e607ca4483e`. However, the tagged README, release notes and candidate receipt still state that v1.0.3 is not published. The published release record and armed publisher request support pinning the tag, but this setup does not independently download the archive or validate its attached receipt. Reconcile the mismatch before using that receipt as release assurance; do not change upstream files from this project.

## Initialize local HIVE

After cloning Hive Studio with submodules, use Docker Desktop/Compose and follow the pinned HIVE installation guide. Example from the HIVE submodule directory:

```powershell
Copy-Item .env.example .env
docker compose config --quiet
docker compose up -d --build
docker compose ps
```

On Linux/macOS:

```sh
cp .env.example .env
docker compose config --quiet
docker compose up -d --build
docker compose ps
```

HIVE data and its `.env` stay local and must not be committed. Do not use `docker compose down -v` during setup or upgrade.

## Register this repository safely

HIVE v1.0.3 can auto-discover immediate child Git repositories under `HIVE_PROJECTS_ROOT` (enabled by default). Before pointing HIVE at a host folder, choose a dedicated directory containing only projects you intend HIVE to index; a broad parent folder may expose sibling repositories to local indexing. The mount is read-only in HIVE Compose. Do not assume HIVE has indexed this repository until its project registry and indexing status show success.

For installation prerequisites, storage, backups, health checks and upgrades, use `integrations/hive/docs/INSTALLATION.md`, `UPGRADING.md` and the tagged release notes.
