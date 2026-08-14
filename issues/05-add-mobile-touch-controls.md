**Labels:** intermediate, enhancement, mobile

## Problem

The basket can only be moved with the ← and → arrow keys. On a phone or tablet there's no keyboard, so the game is currently unplayable on mobile — there's no way to move the basket at all.

## Context

Movement is handled in [`src/app.js`](../src/app.js) inside the `keydown`/`keyup` listeners and the `update()` function, which reads `keys.ArrowLeft` / `keys.ArrowRight`.

## Expected behavior

The basket can be moved on a touch device — for example, by dragging a finger left/right anywhere on the canvas, or tapping the left/right half of the canvas to nudge the basket in that direction.

## Acceptance criteria

- [ ] Basket is controllable via touch (and ideally mouse drag, for trackpad users) on the canvas.
- [ ] Existing keyboard controls (← →) still work unchanged.
- [ ] Basket movement stays smooth — no jumping or lag on touch input.
- [ ] Only `src/app.js` (and `src/index.html`/`src/style.css` if strictly needed) changed.
- [ ] CI passes.

## Hints

`touchstart`, `touchmove`, and `mousemove` events on the canvas element are the relevant browser APIs. Test with your browser's device toolbar / responsive mode if you don't have a physical touch device handy. See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 5.
