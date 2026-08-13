**Labels:** advanced, bug

## Problem

The "Generate Tip Card" button does nothing when clicked. No tip card appears, no error is visible on the page.

## Context

This bug lives on the `bug/broken-generate-button` branch (created from `main` by the facilitator — see `.github/scripts/introduce-bug.sh`). It is not present on `main`.

```bash
git fetch origin
git switch bug/broken-generate-button
```

Open `src/index.html` in a browser, open the DevTools console, and try clicking "Generate Tip Card."

## Expected behavior

Clicking "Generate Tip Card" with a name/address/message filled in generates and displays the tip card, exactly as it does on `main`.

## Acceptance criteria

- [ ] Root cause identified and stated in the PR description.
- [ ] Smallest possible fix applied (no unrelated refactoring).
- [ ] Manually re-tested: normal input generates a card correctly.
- [ ] No new console errors introduced.
- [ ] CI passes.

## Hints

Check the browser console immediately after loading the page, before even clicking anything — the real failure may be visible there already. Compare `src/index.html` against `src/app.js`: does every `document.getElementById(...)` call in the JS match an actual `id` in the HTML?

Use the debugging prompt from [`docs/claude-code-prompts.md`](../docs/claude-code-prompts.md) if you have AI access. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 10 for the full debugging workflow this issue is meant to practice.
