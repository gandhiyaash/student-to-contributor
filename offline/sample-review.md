# Example: AI PR Review (Step from `docs/ai-pr-review.md`)

**Prompt used:**
> Review the current changes as if you were an open-source maintainer. Look for: correctness problems, unnecessary changes, bugs, missing tests, accessibility issues, unclear code, anything that could prevent the Pull Request from being merged. Do not modify the code. Give me a prioritized review.

**Example response, reviewing the diff in [`sample-diff.md`](sample-diff.md):**

> **High priority**
> 1. **Accessibility:** `#copy-feedback` uses `role="status"` which is good (it'll be announced by screen readers), but the button itself has no `aria-label` beyond its visible text — that's actually fine here since "Copy address" is already descriptive. No change needed, just confirming it's correct.
> 2. **Missing test coverage:** There's no automated test for the copy behavior (Issue 8 in the advanced track covers adding a test framework at all, so this is likely acceptable for this PR's scope, but worth a one-line note in the PR description).
>
> **Medium priority**
> 3. **Silent no-op on empty address:** The `if (!address) return;` is correct but gives the user zero feedback if it somehow fires. Given the button is only visible after a card is generated, this is low-risk, but consider a code comment explaining why it's safe to no-op silently here (a future reader might think it's a bug).
> 4. **Clipboard API fallback:** `navigator.clipboard` requires a secure context (HTTPS or localhost). The `catch` block handles the rejection reasonably, but on genuinely unsupported browsers `navigator.clipboard` itself may be `undefined`, which would throw *before* the `try` — worth confirming this is wrapped correctly.
>
> **Low priority / nitpicks**
> 5. `copy-btn` and `copy-feedback` CSS class names are fine but slightly inconsistent with the existing `tip-*` prefix convention — not blocking, just noting the pattern drift.
>
> **Nothing here blocks merging.** The change is small, scoped, and testable manually as described in the PR.

**What a human does with this:**
- Point 1: agree, no action.
- Point 2: valid, but out of scope for this PR — note it as a follow-up rather than blocking this one.
- Point 3: valid and cheap to fix — add the comment.
- Point 4: worth double-checking manually; if `navigator.clipboard` can truly be `undefined`, wrap the whole call, not just `writeText`.
- Point 5: a style opinion, not a defect — skip it, keep the PR focused.

This selective acceptance — not blanket agreement — is the actual skill being taught. See [`../docs/ai-pr-review.md`](../docs/ai-pr-review.md).
