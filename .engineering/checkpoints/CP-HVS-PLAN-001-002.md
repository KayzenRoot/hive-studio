# CP-HVS-PLAN-001-002 — T0 Schema Correction

- Timestamp: 2026-09-24 (UTC)
- Event type: STATE_CHANGE
- Status: CANDIDATE_PENDING_T0
- Work Order: HVS-PLAN-001
- Repository: KayzenRoot/hive-studio
- Base: 7c7ffde53a0d6cb89011ff5cf4a5198371085018
- Candidate branch: planning/hvs-plan-001-module-map
- Prior candidate head: a835e9612bee28b95d91b839c125cc11f49e1a81
- Pull request: [PR #3](https://github.com/KayzenRoot/hive-studio/pull/3)
- Current candidate head: see PR #3; this event is committed with the schema correction.
- Previous response checkpoint: CP-HVS-PLAN-001-001

## This response

- Corrected MODULE-MAP.json to expose depends_on and requirement_ids fields expected by the T0 contract validator.
- Added T0 schema checks that require 20 unique module IDs and one planned owned harness per module.

## Validation and risks

- First T0 attempt failed on candidate a835e9612bee28b95d91b839c125cc11f49e1a81; workflow run [36021615052](https://github.com/KayzenRoot/hive-studio/actions/runs/36021615052) reported 20 module entries missing boundary/dependency/harness fields because the map used deps instead of depends_on.
- Correction is committed in this candidate; rerun of node scripts/verify-foundation.mjs is pending on the new exact PR head.
- No product or live external tests were run. Full Source Pack, framework, API write permissions and budget remain unresolved.

## Next action

Run the bounded T0 gate on the corrected PR head; inspect only any failure packet and fix the smallest affected surface.