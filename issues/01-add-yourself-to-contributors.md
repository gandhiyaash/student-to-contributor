**Labels:** good first issue, documentation

## Problem

New contributors have no low-risk way to make a first real commit, branch, and Pull Request.

## Context

`students/contributors.md` holds a running list of everyone who has contributed to this repository, in a table format specifically designed so multiple people can add rows without conflicting with each other.

## Expected behavior

Your name appears as a new row at the bottom of the table in `students/contributors.md`, with your GitHub username and a one-line description of your contribution.

## Acceptance criteria

- [ ] A new row is added at the bottom of the table (existing rows untouched).
- [ ] The row has exactly 3 columns: Name, GitHub username (starting with `@`), Contribution.
- [ ] Your GitHub username is not already used elsewhere in the file.
- [ ] CI (`contributors-format` check) passes.

## Hints

See [`tasks/beginner.md`](../tasks/beginner.md) Issue 1 for exact step-by-step instructions.
