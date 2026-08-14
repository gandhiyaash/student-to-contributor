**Labels:** advanced, accessibility

## Problem

The game is playable by keyboard (arrow keys already move the basket), but players who can't see the canvas get no information at all — score changes, bomb hits, and game over are all silent and invisible unless you can see the screen.

## Context

There's already an empty status element in [`src/index.html`](../src/index.html): `<p class="status" id="status" role="status" aria-live="polite"></p>`. It exists but nothing in `src/app.js` ever writes to it.

## Expected behavior

Key game events (score increasing, a bomb hit, game over with final score) are announced through the existing `#status` element so screen readers pick them up automatically via `aria-live`. The canvas's `aria-label` should also stay meaningfully up to date (e.g. reflect current score/lives) rather than a single static label.

## Acceptance criteria

- [ ] Catching a coin announces something like "Coin caught! Score: 30."
- [ ] Catching a bomb announces something like "Bomb hit! 2 lives left."
- [ ] Game over announces the final score clearly.
- [ ] Announcements don't spam — avoid re-announcing identical text repeatedly in a way that's unusable with a screen reader.
- [ ] No visual design regressions.
- [ ] CI passes.

## Hints

Update `#status`'s `textContent` at the same points in `src/app.js` where you already update the score/lives HUD. Test by using your OS's built-in screen reader (VoiceOver on macOS: Cmd+F5) or simply by reading the DOM changes in dev tools. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 9.
