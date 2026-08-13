# Intermediate Track

Goal: make a real, visible change to the application or its docs. Pick **one** issue below.

## Issue 4 — Add the Copy Address Button

This is the same issue used in the live AI demo (see [`docs/ai-live-demo.md`](../docs/ai-live-demo.md)). If the facilitator already implemented it live, pick a different issue — or improve on the implementation (e.g. keyboard accessibility, better feedback timing).

**Objective:** Add a button that copies the tip card's Bitcoin address to the clipboard, with visible success feedback.

**Why it matters:** Currently users must manually select and copy the address — easy to get wrong, bad UX.

**Steps:**
1. `git switch -c feature/copy-address-<your-username>`
2. Edit [`src/index.html`](../src/index.html), [`src/app.js`](../src/app.js), and [`src/style.css`](../src/style.css) as needed.
3. Use `navigator.clipboard.writeText()`.
4. Show a temporary "Copied!" message or icon change.
5. Handle the case where the address field is empty (button should be disabled or do nothing gracefully).
6. Test manually: normal address, empty address, repeated clicks.
7. Commit, push, open a PR.

**Success criteria:**
- Clicking "Copy address" copies the exact address text.
- User sees success feedback.
- No error when the address is empty.
- No unrelated files changed.

**Hints:** See `docs/claude-code-prompts.md` for a ready-made "implement a feature" prompt if you have AI access.

---

## Issue 5 — Improve mobile layout

**Objective:** The tip card and form should look good on a 375px-wide screen.

**Steps:**
1. Branch: `feature/mobile-layout-<your-username>`.
2. Open `src/index.html` in a browser and resize to mobile width (or use dev tools device mode).
3. Fix any overflow, cramped spacing, or tiny tap targets in `src/style.css`.
4. Test at 375px and 768px widths.

**Success criteria:** No horizontal scroll, buttons are easily tappable (44px+ height), text doesn't overflow its container.

**Common mistakes:** Fixing it only for one screen size; breaking desktop layout while fixing mobile.

---

## Issue 6 — Improve empty-address feedback

**Objective:** Currently, submitting an empty address just shows a plain `alert()`. Replace it with inline, friendlier feedback.

**Steps:**
1. Branch: `feature/empty-address-feedback-<your-username>`.
2. In `src/app.js`, replace the `alert()` call with an inline error message shown near the address field.
3. Style the error in `src/style.css` (e.g. red border, small text below the input).
4. Clear the error once the user starts typing a valid address.

**Success criteria:** No `alert()` popups; error is visible, styled, and dismisses correctly.
