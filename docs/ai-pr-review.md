# Using AI as a Pull Request Reviewer

After a PR is open, AI can act as a first-pass reviewer — a fast second opinion before (or alongside) a human maintainer.

## The prompt

> Review the current changes as if you were an open-source maintainer.
>
> Look for:
> - correctness problems
> - unnecessary changes
> - bugs
> - missing tests
> - accessibility issues
> - unclear code
> - anything that could prevent the Pull Request from being merged
>
> Do not modify the code.
>
> Give me a prioritized review.

## What to do with the output

1. **Read every point.** Don't skim to the bottom.
2. **Decide what's valid.** Some flagged issues will be real, some will be style opinions, some will be flat wrong (AI reviewers hallucinate too). You are responsible for that judgment call, not the AI.
3. **Explain the decision.** In the PR thread or commit message, briefly note why you accepted or rejected a piece of feedback. This is what a real reviewer does, and it makes your reasoning visible to the next person.
4. **Implement appropriate fixes.** Only the ones you decided were valid.
5. **Test.** Re-run whatever you tested before, plus anything the fix touches.
6. **Commit.** A separate commit for review fixes (e.g. `fix: clamp basket position per review feedback`) keeps history readable.
7. **Push.** This updates the existing PR automatically — no need to open a new one.

## Teaching point

AI can assist with review, but humans remain responsible for engineering judgment. An AI reviewer that says "this is fine" doesn't make it fine, and an AI reviewer that flags something doesn't automatically make it wrong. Treat it the way you'd treat a very fast, occasionally overconfident colleague: useful input, not a verdict.

## Where this fits in the workshop

After you open your PR (any track), run this prompt against your own diff before a human looks at it. It's good practice, and it often catches the same class of issue a human reviewer would flag — meaning your PR is in better shape by the time a real person reviews it.
