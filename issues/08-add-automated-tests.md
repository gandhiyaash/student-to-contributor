**Labels:** advanced, testing

## Problem

This project currently has zero automated tests. Every change — including the collision fix in Issue 4 — is verified entirely by playing the game manually, which doesn't scale as more contributors touch the code.

## Context

The most test-worthy logic in [`src/app.js`](../src/app.js) is `isColliding` (once fixed by Issue 4) and the score/lives update logic. Both are currently written as plain functions inline in a browser-only script. CI configuration is in [`.github/workflows/validate.yml`](../.github/workflows/validate.yml) — any new test command should be lightweight and dependency-free, consistent with the existing checks.

## Expected behavior

A minimal, dependency-light test setup exists, with at least `isColliding` covered (overlapping case, non-overlapping case, edge-touching case), runnable with one documented command.

## Acceptance criteria

- [ ] Tests run via a single documented command (documented in `CONTRIBUTING.md`).
- [ ] `isColliding` is covered: clearly overlapping, clearly not overlapping, and at least one edge/boundary case.
- [ ] Tests actually fail if `isColliding` is deliberately broken (verify this yourself before opening the PR).
- [ ] No heavy new dependencies introduced without justification.
- [ ] CI passes (and ideally runs the new tests too).

## Hints

You'll likely need to extract `isColliding` (and maybe the scoring logic) into a small module that can be loaded both by the browser `<script>` tag and by Node for testing — e.g. a pattern like `if (typeof module !== "undefined") module.exports = { isColliding };`. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 8.
