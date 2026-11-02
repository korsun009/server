# Nextcloud share-link patches: preservation snapshot 2026-11-02

These are local modifications to Nextcloud, not an independently authored copy of Nextcloud Server. Original code remains subject to its AGPL-3.0-or-later and contributor notices. No upstream submission or DCO attestation is made by this snapshot.

## Provenance and restoration

- `unicode-custom-share-tokens.patch`: `nextcloud/server` base `388f842ba8279c4798df20b8ea5583ac8e056879`, local branch `feat/unicode-custom-share-tokens`. Changes NFC normalization, Unicode validation and controller/frontend tests (3 tracked files).
- `v33-readable-link-menu.patch`: base `1a9581f8f91a2135ea9ff6e38cb718e7021d966a` (`v33.0.6`), local branch `local/v33-readable-link-menu`. Adds the explicit readable clipboard action and translations.
- Copy `SharingEntryLink.spec.ts` to `apps/files_sharing/src/components/SharingEntryLink.spec.ts` in the v33 checkout. Its original production-domain fixture was replaced with `cloud.example.invalid` and a synthetic token in this exported copy only.
- Optional original local build helper: copy `webpack.local-no-spdx.cjs` to `build/frontend-legacy/`. It disables the SPDX generation plugin for the original dependency-free local build; it is not a general recommendation for new builds.
- Apply each patch ONLY to its respective base with `git apply --check` then `git apply`. These are two independent target versions, not consecutive patches.
- Restore upstream source, its submodules, locked frontend dependencies and matching PHP/Node build environment separately. Generated assets must be rebuilt for the exact deployed version. This archive performs no deployment.

## Scope and verification

Only reviewed source differences, localization additions, the component test and build helper are preserved. No upstream history, workflows, production config, credentials, actual share records, databases, dependencies, compiled dist or source maps are included in this branch.

The original worktrees/indexes/branches are retained unmodified. Existing historical test evidence is documented in project plans dated 2026-08-26; no new functional or live tests are claimed by this preservation run. Restoration validation uses patch application checks against Git objects at the recorded bases.

Canonical project: `X:\Documents\Проекты Codex\Яндекс диск по свойски`.
Source chat: `019fae82-76b6-7000-a831-61bd0b352c06`.
Coordinator chat: `01a19b0c-5c28-7f70-a647-d5109356529f`.
Repository: `https://github.com/korsun009/server` (existing public fork).
Preservation branch: `preservation/share-link-patches-2026-11-02`.
Version tag: `share-link-patches-snapshot-2026-11-02`.
