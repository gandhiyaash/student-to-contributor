**Labels:** advanced, testing

## Problem

This project currently has zero automated tests. Every change is verified manually, which doesn't scale as more contributors touch the code.

## Context

Application logic lives in [`src/app.js`](../src/app.js). CI configuration is in [`.github/workflows/validate.yml`](../.github/workflows/validate.yml) — any new test command should be lightweight and dependency-free, consistent with the existing checks.

## Expected behavior

A minimal, dependency-light test setup exists, with at least the tip-card generation logic covered (happy path + empty-address case), runnable with one documented command.

## Acceptance criteria

- [ ] Tests run via a single documented command (documented in `CONTRIBUTING.md`).
- [ ] At least the happy path and the empty-address case are covered.
- [ ] Tests actually fail if the logic is deliberately broken (verify this yourself before opening the PR).
- [ ] No heavy new dependencies introduced without justification.
- [ ] CI passes (and ideally runs the new tests too).

## Hints

You may need to extract a small pure function out of the DOM-handling code in `app.js` so it's testable in isolation. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 8.
