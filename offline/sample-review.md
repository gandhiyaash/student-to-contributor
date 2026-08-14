# Example: AI PR Review (Step from `docs/ai-pr-review.md`)

**Prompt used:**
> Review the current changes as if you were an open-source maintainer. Look for: correctness problems, unnecessary changes, bugs, missing tests, accessibility issues, unclear code, anything that could prevent the Pull Request from being merged. Do not modify the code. Give me a prioritized review.

**Example response, reviewing the diff in [`sample-diff.md`](sample-diff.md):**

> **High priority**
> 1. **Missing test coverage:** There's no automated test proving `isColliding` is correct now, or guarding against this exact class of regression in the future (Issue 8 covers adding a test framework at all, so likely acceptable for this PR's scope — but worth a one-line note in the PR description).
>
> **Medium priority**
> 2. **Boundary behavior unverified:** The new checks use strict `<`/`>` rather than `<=`/`>=`, meaning an item exactly touching the basket's edge (zero-pixel overlap) won't count as caught. That's a reasonable, common choice for this kind of check, but worth confirming it matches what the plan actually intended — the PR description doesn't explicitly mention edge-touching behavior.
> 3. **No comment explaining the fix:** Future readers won't know this was a deliberately-reintroduced regression fix unless they check git blame or the linked issue. Not blocking, but a one-line comment above `isColliding` explaining the invariant (basket and item boxes must overlap on both axes) would help.
>
> **Low priority / nitpicks**
> 4. The parameter name `basketBox` vs. the variable name `basket` used everywhere else is a small inconsistency — harmless, not worth a separate commit.
>
> **Nothing here blocks merging.** The fix is correct, minimal, and directly addresses the stated bug.

**What a human does with this:**
- Point 1: valid, but out of scope for this PR — track as a follow-up (Issue 8), don't block on it.
- Point 2: worth a quick manual check — try to catch an item that barely grazes the basket's edge, confirm the behavior feels fair in actual play.
- Point 3: cheap and useful — add the comment.
- Point 4: a style opinion, not a defect — skip it, keep the PR focused.

This selective acceptance — not blanket agreement — is the actual skill being taught. See [`../docs/ai-pr-review.md`](../docs/ai-pr-review.md).
