**Labels:** intermediate, enhancement, live-demo

## Problem

The Bitcoin address on a generated tip card is currently displayed as plain text but cannot be copied easily — users must manually select the text, which is error-prone, especially on mobile.

## Context

This is the **central issue used in the live AI-assisted development demonstration** — see [`docs/ai-live-demo.md`](../docs/ai-live-demo.md). Relevant files: `src/index.html` (contains a placeholder comment marking where the button belongs), `src/app.js` (handles tip-card generation), `src/style.css`.

## Expected behavior

- A "Copy address" button appears on the generated tip card.
- Clicking it copies the exact displayed address to the clipboard.
- The user sees clear success feedback after copying.
- Clicking with no address present is handled gracefully (no error, no crash).
- The change is small and focused — no unrelated files touched.

## Acceptance criteria

- [ ] Copy button present and functional on the tip card.
- [ ] Copied text matches the displayed address exactly.
- [ ] Visible success feedback appears after copying.
- [ ] Empty-address case handled without errors.
- [ ] Repeated clicks don't break or stack feedback state.
- [ ] Only `src/index.html`, `src/app.js`, `src/style.css` changed.
- [ ] CI passes.

## Hints

If you have AI access, see [`docs/claude-code-prompts.md`](../docs/claude-code-prompts.md) for ready-made investigate/plan/implement prompts. If this issue is already resolved by the time you pick it up (the facilitator may have implemented it live), pick a different issue or propose an improvement (accessibility, keyboard support, feedback timing) as a follow-up PR.

See [`tasks/intermediate.md`](../tasks/intermediate.md) Issue 4 for full step-by-step instructions.
