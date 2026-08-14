**Labels:** intermediate, bug, live-demo

## Problem

Play the game: coins and bombs fall, the basket moves, but nothing ever happens when they touch. Score stays at 0 forever, lives never drop. The game is, put simply, broken — you cannot actually catch anything.

## Context

This is the **central issue used in the live AI-assisted development demonstration** — see [`docs/ai-live-demo.md`](../docs/ai-live-demo.md). The bug lives in a single function in `src/app.js`: `isColliding(basketBox, item)`. It's meant to check whether the basket's box and a falling item's box overlap, but as written it never returns `true` for any position.

## Expected behavior

- Catching a falling coin (basket overlaps it) increases the score by 10.
- Catching a falling bomb (basket overlaps it) decreases lives by 1.
- The fix is contained to the collision logic — no unrelated changes.

## Acceptance criteria

- [ ] `isColliding` correctly detects overlap between the basket and a falling item on both axes.
- [ ] Catching a coin increases score.
- [ ] Catching a bomb decreases lives and (eventually) triggers game over at 0 lives.
- [ ] Coins/bombs that fall past the basket without overlapping are still removed normally (no regression).
- [ ] Only `src/app.js` changed.
- [ ] CI passes.

## Hints

Read `isColliding` closely — the three conditions are combined with `&&` when they describe mutually exclusive positions (an item can't simultaneously be to the right of the basket's right edge and to the left of the basket's left edge). If you have AI access, see [`docs/claude-code-prompts.md`](../docs/claude-code-prompts.md) for ready-made investigate/plan/implement prompts. If this issue is already resolved by the time you pick it up (the facilitator may have implemented it live), pick a different issue.

See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 4 for full step-by-step instructions.
