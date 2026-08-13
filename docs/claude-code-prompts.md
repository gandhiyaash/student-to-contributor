# Claude Code Prompt Library

Ready-to-use prompts for working in this repository. Every prompt names a "verify" step — never treat an AI response as done until you've done that step yourself.

## Explore a repository

> Explore this repository and give me a beginner-friendly overview: what the application does, how the code is organized, and how the pieces connect.

**When:** First time opening an unfamiliar codebase.
**What it does:** Produces a map of the repository without changing anything.
**Verify:** Open the files it names and confirm they actually contain what it describes.

## Understand a file

> Explain what `src/app.js` does, function by function, in beginner-friendly language. Don't modify it.

**When:** Before editing a file you didn't write.
**What it does:** Walks through logic and intent.
**Verify:** Trace one function manually with a specific input and check the explanation matches.

## Plan a feature

> Based on the codebase, propose a minimal implementation plan for [issue description]. Do not modify any files yet. List which files you'd change, what you'd change, and how you'd test it.

**When:** After understanding the issue, before writing code.
**What it does:** Produces a scoped plan you can approve or push back on.
**Verify:** Does the plan touch only files relevant to the issue? If it lists an unrelated file, ask why before proceeding.

## Implement a feature

> Implement the approved plan. Keep the change minimal and focused on the issue. Do not modify unrelated files. List every file changed and how to test it.

**When:** After you've approved a plan.
**What it does:** Writes the actual diff.
**Verify:** Run `git diff` yourself and read every line — don't trust the summary alone.

## Explain a diff

> Explain the current git diff to me file by file: what changed, why, what behavior it affects, and what I should verify manually. Do not modify anything.

**When:** Right after AI (or anyone) makes changes, before you test.
**What it does:** Turns a raw diff into a reviewable explanation.
**Verify:** Cross-check its "what I should verify manually" list — then actually verify those things.

## Debug a failure

> Investigate this failure: [paste error/symptom]. Do not modify the code yet. Explain what's failing, why, what evidence supports the diagnosis, and the smallest safe fix. Wait for approval before modifying anything.

**When:** Something is broken and the cause isn't obvious.
**What it does:** Separates diagnosis from fix, so you can sanity-check the diagnosis first.
**Verify:** Does the "evidence" actually point to the stated cause, or is it a guess? Ask it to show you the specific evidence if unclear.

## Write tests

> Write tests for [function/feature]. Cover the happy path and at least one edge case. Explain how to run them.

**When:** Adding test coverage (see [Issue 8](../tasks/advanced.md)).
**What it does:** Drafts test code and run instructions.
**Verify:** Run the tests yourself. Confirm they fail if you deliberately break the code (a test that always passes is worse than no test).

## Review a change

> Review this diff as if you were an open-source maintainer. Look for correctness problems, unnecessary changes, missing tests, accessibility issues, and unclear code. Do not modify anything. Give a prioritized review.

**When:** Before opening a PR, or after opening one.
**What it does:** A second opinion, prioritized.
**Verify:** You decide which feedback is valid — see [`docs/ai-pr-review.md`](ai-pr-review.md).

## Review a Pull Request

> Here is the PR diff: [paste]. Review it as an open-source maintainer would: correctness, scope, readability, missing tests, and anything that would block a merge.

**When:** Reviewing someone else's (or your own) PR before merge.
**What it does:** Structured, prioritized review output.
**Verify:** Same as above — AI flags candidates, a human decides what's real.

## Improve documentation

> Read [file]. Suggest edits that make it clearer for a beginner, without changing its meaning. Show me a diff, don't apply it yet.

**When:** Editing docs (see [Beginner Issue 2](../tasks/beginner.md)).
**What it does:** Suggests clarity improvements.
**Verify:** Read the suggested version out loud — does it still say what you meant?
