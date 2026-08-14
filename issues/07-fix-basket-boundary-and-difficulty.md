**Labels:** advanced, bug, enhancement

## Problem

Two related gaps in `update()` in [`src/app.js`](../src/app.js):

1. Holding an arrow key lets the basket move completely off the visible canvas — its position is never clamped to a valid range, so it can become impossible to see or control.
2. The game never gets harder. Fall speed is fixed at spawn time and the spawn interval never changes, so minute 10 of a run feels identical to minute 1.

## Context

This is the closest thing this game has to an "input validation" problem — a value (`basket.x`) needs to be constrained to a safe range, the same way you'd validate any user-controlled input.

## Expected behavior

- The basket's x position is always clamped so it stays fully within the canvas bounds, no matter how long a key is held.
- Difficulty increases gradually as the score (or elapsed time) grows — e.g. fall speed or spawn frequency scales up smoothly, without ever making the game unfairly impossible.

## Acceptance criteria

- [ ] Basket can never move (even partially) outside the canvas, in either direction.
- [ ] Difficulty visibly increases the longer a run goes on.
- [ ] Difficulty scaling is smooth, not a sudden jump that feels unfair.
- [ ] No regression to existing movement or collision behavior.
- [ ] CI passes.

## Hints

`Math.min` / `Math.max` (or `Math.clamp` if you write one) is enough for the boundary fix. For difficulty, consider scaling `item.speed` at spawn time based on current `score`, or gradually shortening `SPAWN_INTERVAL_MS`. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 7.
