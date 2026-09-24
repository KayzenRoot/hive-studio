# Security

Status: `DRAFT — FOUNDATION REVIEW PENDING`

## Foundation controls
- Submodules are pinned to immutable commit SHAs. GEF files are not copied into this repository; its upstream license is All Rights Reserved. HIVE remains an unmodified Apache-2.0 submodule.
- Local `.env`, HIVE data, generated assets, customer data and credentials are ignored or kept inside their owning local service; never commit secrets.
- CI permissions are read-only and each job has a hard timeout.

## Product security constraints to freeze during planning
- External account tokens require least privilege, secure storage, expiry/revocation handling and redaction.
- Content and customer data need defined retention, deletion, consent and access controls.
- No ad spend or financial mutation by default. Before enabling automation, require operator-defined hard daily and total caps, server-side enforcement, a kill switch, idempotent commands, audit trail, spend reconciliation and fail-closed behavior on missing/ambiguous budget state.
- Publish/payment/refund/account-authorization operations need explicit capability boundaries and safe recovery.
- Generated factual, health, financial or earnings claims need domain-appropriate policy checks and human review where required.

These are design constraints, not a completed security certification.
