**Labels:** intermediate, enhancement, ux

## Problem

Every time the basket catches a bomb, the game calls a blocking `alert("Ouch! You hit a bomb.")`. This freezes the whole page until the player clicks "OK," which is jarring and completely breaks the flow of the game — especially annoying since it can happen multiple times per run.

## Context

The alert is called inside `update()` in [`src/app.js`](../src/app.js), right after a bomb collision is detected and a life is deducted.

## Expected behavior

Bomb hits give clear, immediate visual feedback without blocking gameplay — for example, the basket or canvas briefly flashes red, or a small message appears near the HUD for a moment, then fades. The game keeps running the whole time.

## Acceptance criteria

- [ ] No `alert()` calls remain for the bomb-hit case.
- [ ] Visual feedback is clearly noticeable but brief (roughly half a second to a second).
- [ ] The game loop is not paused or blocked by the feedback.
- [ ] Life is still correctly deducted and the HUD still updates.
- [ ] CI passes.

## Hints

See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 6. A simple approach: set a short-lived flag (e.g. `hitFlashUntil = timestamp + 300`) and check it in `draw()` to tint the canvas or basket while it's active.
