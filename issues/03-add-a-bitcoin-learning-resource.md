**Labels:** good first issue, documentation

## Problem

`docs/bitcoin.md` intentionally keeps its explanation to about 5 minutes, but points to a short "Further reading" list for anyone who wants to go deeper. That list could use more (good) entries.

## Context

The "Further reading" section sits near the bottom of [`docs/bitcoin.md`](../docs/bitcoin.md), with a comment marking exactly where new entries go.

## Expected behavior

One new link added to the list, with a one-sentence description, matching the existing entries' format.

## Acceptance criteria

- [ ] The link works and is genuinely useful to a beginner (not a duplicate of an existing entry).
- [ ] Format matches the existing list exactly.
- [ ] CI (`markdown-lint` check) passes.

## Hints

Pick something you actually read and found clear — not just the first search result. See [`tasks/beginner.md`](../tasks/beginner.md) Issue 3.
