**Labels:** intermediate, enhancement, ux

## Problem

Submitting the form with an empty address currently triggers a plain browser `alert()` — jarring, inconsistent with the rest of the app's styling, and blocks the whole page until dismissed.

## Context

The validation happens in the click handler in [`src/app.js`](../src/app.js). Styling for form elements is in [`src/style.css`](../src/style.css).

## Expected behavior

An inline, styled error message appears near the address field when it's empty, instead of a browser `alert()`. The error clears once the user starts typing a valid address.

## Acceptance criteria

- [ ] No `alert()` calls remain for this case.
- [ ] Error message is visible, styled, and positioned near the address input.
- [ ] Error clears automatically once valid input is entered.
- [ ] CI passes.

## Hints

See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 6.
