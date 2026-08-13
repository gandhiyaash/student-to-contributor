**Labels:** good first issue, documentation

## Problem

Some of the documentation in this repository has small typos, awkward phrasing, or minor inaccuracies that are easy to miss on a first pass but worth fixing for the next reader.

## Context

Docs live in [`docs/`](../docs/) plus the top-level `.md` files (`README.md`, `CONTRIBUTING.md`, etc). Dense pages like `docs/git-vs-github.md` and `docs/bitcoin.md` are the most likely places to find something worth improving.

## Expected behavior

One clear, accurate fix to a real typo, broken link, or unclear sentence — not a rewrite of the whole file.

## Acceptance criteria

- [ ] The fix is accurate (doesn't introduce a new error).
- [ ] The diff is small and focused on one issue.
- [ ] CI (`markdown-lint` check) passes.

## Hints

Read the file out loud — awkward phrasing is easier to hear than see. See [`tasks/beginner.md`](../tasks/beginner.md) Issue 2.
