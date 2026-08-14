# Advanced Track

Goal: work like a real contributor on a codebase you don't fully control — read carefully, keep changes scoped, verify your own work. Pick **one** issue below.

## Issue 7 — Fix basket boundary and difficulty scaling

**Objective:** The basket can be moved completely off-canvas by holding an arrow key, and the game never gets harder no matter how long you survive.

**Steps:**
1. Branch: `feature/boundary-difficulty-<your-username>`.
2. In `src/app.js`'s `update()`, clamp `basket.x` so it always stays within `[0, canvas.width - BASKET_WIDTH]`.
3. Add gradual difficulty scaling — e.g. increase `item.speed` at spawn time based on current `score`, or shrink `SPAWN_INTERVAL_MS` slowly over time.
4. Test: hold an arrow key down for several seconds (basket should stop at the edge, not disappear); play for 60+ seconds and confirm it visibly gets harder.

**Success criteria:** Basket never leaves the canvas; difficulty ramps up smoothly, never suddenly or unfairly.

**Hints:** `Math.min(Math.max(x, 0), max)` is your friend for clamping.

---

## Issue 8 — Add automated tests

**Objective:** This project currently has zero tests. Add a small, dependency-light test setup for the collision logic.

**Steps:**
1. Branch: `feature/add-tests-<your-username>`.
2. Extract `isColliding` (and optionally the score/lives update logic) into a form that's testable outside the browser — e.g. guard an export with `if (typeof module !== "undefined") module.exports = { isColliding };` at the bottom of `app.js`, or split it into its own file loaded by both `index.html` and your test file.
3. Choose a minimal test approach (plain Node assertions, or a tiny framework if it fits the CI constraints in `.github/workflows/validate.yml`).
4. Write tests: a clearly-overlapping case, a clearly-not-overlapping case, and an edge/boundary case.
5. Document how to run the tests in `CONTRIBUTING.md`.

**Success criteria:** Tests run with a single documented command, cover at least the three cases above, and pass in CI. Deliberately re-break `isColliding` locally and confirm the tests actually fail — then put the fix back.

---

## Issue 9 — Improve accessibility

**Objective:** Make key game events perceivable without seeing the screen.

**Steps:**
1. Branch: `feature/accessibility-<your-username>`.
2. `src/index.html` already has an empty `<p id="status" aria-live="polite">` — nothing writes to it yet.
3. In `src/app.js`, update `#status`'s text at the moments you catch a coin, get hit by a bomb, and when the game ends — short, clear sentences.
4. Avoid re-announcing the exact same text repeatedly (bad screen-reader experience) — vary the message slightly or throttle updates.
5. Test with your OS's screen reader (VoiceOver on macOS: Cmd+F5) or by watching the DOM update in dev tools.

**Success criteria:** Coin catches, bomb hits, and game over are all announced via `#status`; no visual regressions; announcements are readable, not spammy.

---

## Issue 10 — Fix a deliberately introduced bug

**Objective:** Practice debugging someone else's code under time pressure — the core open-source skill.

**Context:** A bug has been intentionally introduced on the `bug/broken-restart-button` branch — ask your facilitator, or check Issue 10 on GitHub for exact repro steps.

**Steps:**
1. `git fetch origin && git switch bug/broken-restart-button`
2. Branch off it: `git switch -c fix/restart-button-<your-username>`
3. Reproduce the bug first — play until game over, click "Play Again," write down exactly what happens (or doesn't).
4. Use `git diff main` (comparing against `main`), `git log`, and/or an AI debugging prompt (see `docs/claude-code-prompts.md`) to find the root cause.
5. Apply the smallest possible fix.
6. Re-test: full loop of play → lose → Game Over → Play Again → play again, more than once in a row.

**Success criteria:** "Play Again" reliably resets and restarts the game; no unrelated code changed; you can explain the root cause in the PR description.
