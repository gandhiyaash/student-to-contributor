# Example: What a Real Pull Request Looks Like

If you were online, `git push -u origin fix/catch-mechanic` followed by opening a PR on GitHub would produce something like this (using the [PR template](../.github/pull_request_template.md)):

---

**Title:** fix: correct basket/item collision detection

**What changed?**
Fixed `isColliding` in `src/app.js` — the x-axis check used two conditions that could never both be true, so the game could never register a catch. Coins and bombs fell straight through the basket with no effect. Corrected it to a standard AABB overlap check.

**Why did you make this change?**
Closes the "Fix the Broken Catch Mechanic" issue — the game was completely unplayable; score and lives never changed no matter what the player did.

**How did you test it?**
- Caught several coins, confirmed score increased by 10 each time.
- Took a bomb hit, confirmed a life was lost and feedback appeared.
- Let several coins/bombs fall past the basket untouched, confirmed no score change and no errors.
- Lost all 3 lives, confirmed the Game Over screen showed the correct final score.
- Clicked "Play Again," confirmed the game reset and played normally again.

**Screenshots if relevant:**
*(a short clip or before/after screenshot of a successful catch would go here)*

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
