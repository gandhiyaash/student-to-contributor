**Labels:** advanced, bug

## Problem

After losing all 3 lives, the "Game Over" screen appears correctly with the final score — but clicking "Play Again" does nothing. The game stays frozen on the game-over screen forever.

## Context

This bug lives on the `bug/broken-restart-button` branch (created from `main` by the facilitator — see `.github/scripts/introduce-bug.sh`). It is not present on `main`.

```bash
git fetch origin
git switch bug/broken-restart-button
```

Play a round, lose all 3 lives on purpose (let bombs hit you, or just wait for coins/bombs to pile up), and click "Play Again" once the Game Over screen appears.

## Expected behavior

Clicking "Play Again" resets score, lives, and all falling items, hides the Game Over overlay, and starts a fresh round — exactly as it does on `main`.

## Acceptance criteria

- [ ] Root cause identified and stated in the PR description.
- [ ] Smallest possible fix applied (no unrelated refactoring).
- [ ] Manually re-tested: full loop of play → lose → Game Over → Play Again → play again works repeatedly.
- [ ] No new console errors introduced.
- [ ] CI passes.
- [ ] **PR's base branch is `bug/broken-restart-button`, not `main`** — `main` never had this bug, so a PR against `main` would show no diff at all. Change the base branch on GitHub's "Compare & pull request" screen before submitting.

## Hints

Check the browser console right when the page first loads, before you even click anything — the real failure is already visible there, even though Start and gameplay both seem to work fine. Compare the `id` used in `src/index.html` for the restart button against the `id` `src/app.js` queries with `document.getElementById(...)` — do they match exactly?

Use the debugging prompt from [`docs/claude-code-prompts.md`](../docs/claude-code-prompts.md) if you have AI access. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 10 for the full debugging workflow this issue is meant to practice.
