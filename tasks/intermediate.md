# Intermediate Track

Goal: make a real, visible change to the game or its docs. Pick **one** issue below.

## Issue 4 — Fix the Broken Catch Mechanic

This is the same issue used in the live AI demo (see [`docs/ai-live-demo.md`](../docs/ai-live-demo.md)). If the facilitator already fixed it live, pick a different issue — or find and fix a follow-up bug it exposes.

**Objective:** The game currently doesn't work at all — coins and bombs fall right through the basket. Fix the collision detection so the game is actually playable.

**Why it matters:** Right now the entire game is unplayable. This is about as central as a bug gets.

**Steps:**
1. `git switch -c fix/catch-mechanic-<your-username>`
2. Open [`src/app.js`](../src/app.js) and find `isColliding(basketBox, item)`.
3. Read the three conditions carefully — are they even logically possible to all be true at once?
4. Fix the function so it correctly detects when the basket's box and the falling item's box overlap.
5. Test: start the game, catch several coins (score should go up by 10 each), let a bomb hit you (a life should be lost).
6. Commit, push, open a PR.

**Success criteria:**
- Catching a coin increases score.
- Catching a bomb decreases lives.
- Coins/bombs that miss the basket still disappear normally when they fall off-screen.
- No unrelated files changed.

**Hints:** See `docs/claude-code-prompts.md` for a ready-made "implement a feature" prompt if you have AI access.

---

## Issue 5 — Add mobile touch controls

**Objective:** Right now only ← → arrow keys move the basket. On a phone, there's no way to play at all.

**Steps:**
1. Branch: `feature/touch-controls-<your-username>`.
2. In `src/app.js`, add touch (and ideally mouse-drag) support so dragging across the canvas moves the basket.
3. Keep the existing keyboard controls working.
4. Test using your browser's device toolbar / responsive mode (or a real phone if you have one).

**Success criteria:** Basket is fully controllable by touch, arrow keys still work, no lag or jumpiness.

**Common mistakes:** Forgetting `touchmove` needs `event.preventDefault()` in some browsers to avoid the page scrolling while you drag; breaking keyboard controls while adding touch.

---

## Issue 6 — Replace bomb-hit alert with inline feedback

**Objective:** Every bomb hit currently freezes the game with a blocking `alert()`. Replace it with feedback that doesn't interrupt play.

**Steps:**
1. Branch: `feature/bomb-feedback-<your-username>`.
2. In `src/app.js`, remove the `alert("Ouch! You hit a bomb.")` call.
3. Add a brief, noticeable visual cue instead — e.g. flash the canvas or basket red for ~300–500ms — using `src/style.css` and a small amount of state/timing logic in `app.js`.
4. Test: get hit by several bombs in a row, confirm the game never pauses and feedback is clearly visible each time.

**Success criteria:** No `alert()` calls remain; feedback is visible but brief; the game loop never stops.
