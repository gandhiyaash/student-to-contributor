# Example: What a Real Pull Request Looks Like

If you were online, `git push -u origin feature/copy-address` followed by opening a PR on GitHub would produce something like this (using the [PR template](../.github/pull_request_template.md)):

---

**Title:** feat: add copy address button

**What changed?**
Added a "Copy address" button to the tip card that copies the displayed Bitcoin/Lightning address to the clipboard, with a "Copied!" success message that clears after 2 seconds.

**Why did you make this change?**
Closes the "Add a Copy Address Button" issue — users previously had to manually select and copy the address text, which is error-prone on mobile.

**How did you test it?**
- Generated a card with a normal address, clicked copy, pasted elsewhere, confirmed exact match.
- Tested with an empty address (button doesn't error, no-ops safely).
- Clicked rapidly multiple times — no stacked feedback.
- Tested on a narrow (375px) viewport.

**Screenshots if relevant:**
*(a before/after screenshot of the tip card would go here)*

**Checklist:**
- [x] I tested my changes.
- [x] I reviewed my diff.
- [x] I kept the change focused.
- [x] CI passes.

---

**What happens next, on GitHub:**

```text
PR opened
 ↓
CI runs automatically (see .github/workflows/validate.yml)
 ↓
✅ CI passes
 ↓
A maintainer (or AI, see sample-review.md) reviews the diff
 ↓
Reviewer leaves comments or approves
 ↓
Author responds / pushes fixes if requested
 ↓
Maintainer clicks "Merge"
```

See [`sample-review.md`](sample-review.md) for what an AI review pass on this exact PR would look like, and [`sample-ci-success.md`](sample-ci-success.md) / [`sample-ci-failure.md`](sample-ci-failure.md) for what the CI run itself looks like in both outcomes.
