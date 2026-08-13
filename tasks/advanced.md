# Advanced Track

Goal: work like a real contributor on a codebase you don't fully control — read carefully, keep changes scoped, verify your own work. Pick **one** issue below.

## Issue 7 — Improve input validation

**Objective:** The address field currently accepts any non-empty text. Add lightweight, forgiving validation.

**Steps:**
1. Branch: `feature/input-validation-<your-username>`.
2. In `src/app.js`, add a basic sanity check for the address (e.g. minimum length, no spaces, or a simple pattern check that doesn't reject valid Lightning addresses like `name@domain.com`).
3. Show a clear inline warning (not a hard block) if the input looks malformed — this is an educational tool, not a wallet, so avoid false confidence or false rejection.
4. Test with: a valid-looking BTC address, a valid-looking Lightning address, garbage text, empty string.

**Success criteria:** Obviously-invalid input is flagged without blocking legitimate-looking addresses; no false positives on the examples above.

**Hints:** Don't try to fully validate real Bitcoin addresses (checksum, bech32, etc.) — that's out of scope and would mislead students into thinking this is a real wallet.

---

## Issue 8 — Add automated tests

**Objective:** This project currently has zero tests. Add a small, dependency-light test setup.

**Steps:**
1. Branch: `feature/add-tests-<your-username>`.
2. Choose a minimal approach (plain JS test functions run via Node, or a tiny framework if already permitted by CI — check `.github/workflows/validate.yml`).
3. Write tests for the tip-card generation logic in `src/app.js` (you may need to refactor a small pure function out of the DOM-handling code so it's testable).
4. Document how to run the tests in `CONTRIBUTING.md`.

**Success criteria:** Tests run with a single documented command, cover at least the empty-address case and the happy path, and pass in CI.

---

## Issue 9 — Improve accessibility

**Objective:** Make the app usable with a keyboard and screen reader.

**Steps:**
1. Branch: `feature/accessibility-<your-username>`.
2. Audit `src/index.html` for missing `label`/`for` pairs, missing `aria-live` regions for dynamic feedback (like copy success), and poor focus order.
3. Fix issues without changing the visual design.
4. Test by tabbing through the whole form with only the keyboard.

**Success criteria:** Every interactive element is reachable and operable by keyboard; dynamic feedback (copy success, validation errors) is announced via `aria-live`.

---

## Issue 10 — Fix a deliberately introduced bug

**Objective:** Practice debugging someone else's code under time pressure — the core open-source skill.

**Context:** A bug has been intentionally introduced somewhere in `src/app.js` or `src/style.css` (ask your facilitator which branch/tag has it, or check the issue on GitHub for the exact repro steps).

**Steps:**
1. Branch: `fix/bug-<short-description>-<your-username>`.
2. Reproduce the bug first — write down exact steps.
3. Use `git log`, `git diff`, and/or an AI debugging prompt (see `docs/claude-code-prompts.md`) to find the root cause.
4. Apply the smallest possible fix.
5. Re-test the exact repro steps, plus one or two adjacent cases you might have broken.

**Success criteria:** Bug no longer reproduces; no unrelated code changed; you can explain the root cause in the PR description.
