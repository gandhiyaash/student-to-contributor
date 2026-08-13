# What Open Source Actually Means

Forget the textbook definition for a second. Here's what actually happens.

Someone writes software and publishes the source code publicly, under a license that says "you may read this, use this, and usually modify and redistribute it." That's it. That's open source.

## Who's involved

- **Maintainers** — people with permission to merge changes into the project. They set direction, review Pull Requests, and own the "official" copy of the repository.
- **Contributors** — anyone who proposes a change. You don't need permission to *propose* a change (that's what a Pull Request is), only to *merge* one.
- **Users** — people who just use the software and never touch the code. Most open-source users never contribute, and that's fine.

You're about to become a contributor to this repository.

## The moving parts

- **Issues** — a tracked description of a problem, bug, or missing feature. This is where work starts.
- **Branches** — an isolated copy of the code where you make your change, so `main` stays stable while you work.
- **Pull Requests (PRs)** — a request to merge your branch into `main`, with a diff the maintainer can review.
- **Reviews** — a maintainer (or another contributor) reads your diff, asks questions, requests changes, or approves.
- **CI (Continuous Integration)** — automated checks that run on every PR, so humans don't have to manually verify basic things like "does this even run."
- **Licenses** — the legal terms under which the code can be used. They're why you're *allowed* to fork and reuse open-source code in the first place.

## The practical workflow

```text
Find project
    ↓
Read README
    ↓
Read CONTRIBUTING.md
    ↓
Find issue
    ↓
Understand issue
    ↓
Make change
    ↓
Test
    ↓
Commit
    ↓
Push
    ↓
Pull Request
    ↓
Review
    ↓
Iterate
    ↓
Merge
```

Every real open-source contribution — a one-line typo fix or a thousand-line feature — follows this same shape. You are about to do it, right now, in this repository. The "project" is this workshop, the README is [`../README.md`](../README.md), and the issues are in [`../tasks/`](../tasks/) and on the repository's GitHub Issues tab.

## A note on communication

Open source runs on written communication with strangers. A few habits that matter more than people expect:

- **Read before asking.** Check the README and CONTRIBUTING.md first — most questions are already answered there.
- **Be specific in PRs.** "Fixed the bug" tells a reviewer nothing. "Copy button now checks for an empty address before calling clipboard.writeText" tells them what to verify.
- **Feedback on your code isn't feedback on you.** A maintainer requesting changes is normal, expected, and not a rejection.
