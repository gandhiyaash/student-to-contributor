**Labels:** intermediate, enhancement, ui

## Problem

The Tip Jar form and result card were built and tested primarily at desktop width. On a typical phone screen (~375px wide) some elements may overflow, crowd together, or become hard to tap.

## Context

Layout and spacing live in [`src/style.css`](../src/style.css); structure is in [`src/index.html`](../src/index.html).

## Expected behavior

The form and generated tip card look clean and usable at common mobile widths, with no horizontal scrolling and comfortably tappable buttons.

## Acceptance criteria

- [ ] No horizontal scroll at 375px width.
- [ ] Interactive elements (inputs, buttons) are at least ~44px tall for easy tapping.
- [ ] No text or content overflows its container.
- [ ] Desktop layout (768px+) is not broken by the fix.
- [ ] CI passes.

## Hints

Use your browser's device toolbar / responsive mode to test at 375px and 768px. See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 5.
