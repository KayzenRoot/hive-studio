# HIVE Local Development Integration

## Pinned source and readiness

- Published GitHub release tag: `v1.0.3`
- Exact tag commit: `52bd3dab54dd4f16264072e198ed1fc23168f7fa`
- Path: `integrations/hive`
- License: Apache-2.0; retained as an unmodified Git submodule.
- Intended use here: local development context/memory support, not a production dependency.

GitHub labels v1.0.3 as a published stable release, but the HIVE v1.0.3 installation guide says HIVE is pre-alpha and not production-ready. Treat “stable” as the release channel, not production readiness.

The tagged README, release notes and candidate receipt also still state that v1.0.3 is not published, while GitHub reports the release as published stable and the tag includes an armed publisher request. GitHub lists `hive-v1.0.3.zip` with SHA-256 `bad6b3f892221ecb5477f1f3f7546a0f83e611014d1c130d24089e607ca4483e`; this setup records that metadata but does not independently download/re-hash the archive or validate the receipt. Reconcile the upstream mismatch before relying on that receipt as release assurance. Do not edit the upstream HIVE repository from this project.

## Start HIVE locally

This repository pins HIVE; it does not start Docker or choose machine-specific paths automatically. Use the pinned `integrations/hive/docs/INSTALLATION.md` as the source of truth.

1. Clone Hive Studio with submodules:
   `git clone --recurse-submodules https://github.com/KayzenRoot/hive-studio.git`
2. Open a terminal in `integrations/hive` and read the OS-specific prerequisites.
3. Choose two separate local directories: one writable HIVE data root and one narrowly scoped project root containing only repositories you explicitly want HIVE to index. Do not point the project root at a broad home/workspace folder or place it inside the HIVE data root.
4. Copy `.env.example` to `.env` if it does not already exist. Set `HIVE_DATA_ROOT` and `HIVE_PROJECTS_ROOT` there to those separate paths; keep `.env` local and uncommitted.
5. Follow the upstream doctor/install flow for your OS. For Windows, the tagged guide uses:
   `python scripts/hive_install.py doctor`
   then `python scripts/hive_install.py install --yes`.
   For Linux, the tagged guide uses `python scripts/hive_install.py doctor`, `docker compose config --quiet`, then `docker compose up -d --build`.
6. Check `docker compose ps` and the health endpoint at `http://localhost:8000/api/v1/health`; the dashboard defaults to `http://localhost:3000`.

HIVE v1.0.3 auto-discovers valid Git repositories that are immediate children of `HIVE_PROJECTS_ROOT` by default, scanning at a bounded interval and with a maximum project count. If you want Hive Studio indexed, put its committed clone as an immediate child of the chosen dedicated project root. A root shared with unrelated/sensitive repositories could expose them to local indexing. Do not assume registration succeeded until HIVE reports the repository and indexing status.

HIVE's `.env` and data stay local. Never use `docker compose down -v` for setup or upgrades; follow HIVE's backup and upgrade guide before maintenance.
