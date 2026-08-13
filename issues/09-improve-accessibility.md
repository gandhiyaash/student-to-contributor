**Labels:** advanced, accessibility

## Problem

The app hasn't been audited for keyboard or screen-reader usability. Some interactive elements and dynamic feedback (like copy-success messages) may not be properly exposed to assistive technology.

## Context

Structure is in [`src/index.html`](../src/index.html); dynamic feedback is written in [`src/app.js`](../src/app.js).

## Expected behavior

Every interactive element is reachable and operable using only the keyboard (Tab, Shift+Tab, Enter/Space), and dynamic feedback is announced via `aria-live` regions, without changing the visual design.

## Acceptance criteria

- [ ] Every form field has a properly associated `<label>`.
- [ ] Full form + buttons are operable via keyboard only, in a sensible focus order.
- [ ] Dynamic feedback (copy success, validation errors) uses `aria-live` so screen readers announce it.
- [ ] No visual/design regressions.
- [ ] CI passes.

## Hints

Test by unplugging your mouse (or just not touching it) and tabbing through the entire form. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 9.
