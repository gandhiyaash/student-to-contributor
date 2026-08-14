**Labels:** good first issue, beginner, documentation

## Problem

New contributors have no low-risk way to make a first real commit, branch, and Pull Request.

## Context

Every student gets their own file under `students/` — see [`students/README.md`](../students/README.md) and [`students/TEMPLATE.md`](../students/TEMPLATE.md). This is deliberately one-file-per-student (not a shared table) so that many contributors can do this at the same time without ever touching the same lines.

This repository uses the standard fork workflow — see [`docs/fork-workflow.md`](../docs/fork-workflow.md). You do not need or get write access to this repository; you fork it, push to your fork, and open a Pull Request from there.

## Expected behavior

A new file exists at `students/<your-name>.md`, following the template in `students/TEMPLATE.md`, opened as a Pull Request from your fork.

## Acceptance criteria

- [ ] A new file is added under `students/` — no existing file touched.
- [ ] Filename is lowercase, hyphen-separated, ending in `.md` (e.g. `alice-johnson.md`).
- [ ] File starts with a `# Your Name` heading, has a `GitHub: @username` line, and a `## What I learned` heading.
- [ ] Your GitHub username is not already used in any other file under `students/`.
- [ ] CI (`contributors-format` check) passes.
- [ ] PR is opened from your fork, targeting this repository's `main` branch.

## Hints

See [`tasks/beginner.md`](../tasks/beginner.md) Issue 1 for exact step-by-step instructions, and [`docs/fork-workflow.md`](../docs/fork-workflow.md) if you haven't forked yet.
