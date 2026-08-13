# Example: AI Plan (Step 2 of the live demo)

**Prompt used:**
> Based on your investigation, propose a minimal implementation plan for the "Add a Copy Address Button" issue. Do not modify any files yet. Explain: 1. Which files you would change. 2. What you would change. 3. How you would handle an empty address. 4. How you would test the feature. Keep the plan minimal and avoid unrelated changes.

**Example response:**

> Here's a minimal plan — no files touched yet.
>
> **Files to change:**
> 1. `src/index.html` — replace the placeholder comment with a `<button id="copy-btn">Copy address</button>` inside `.tip-card`, plus a small `<span id="copy-feedback">` for the success message.
> 2. `src/app.js` — add a click handler on `#copy-btn` that calls `navigator.clipboard.writeText()` on the current address and toggles the feedback span.
> 3. `src/style.css` — add styles for `.copy-btn` and `.copy-feedback` (success state), reusing existing color variables (`--accent`, `--success`).
>
> **Handling an empty address:**
> The button only becomes meaningful once a tip card exists (the result card is hidden until generated), so by construction the address is non-empty by the time the button is visible. As a defensive check, the click handler will still verify `address` is non-empty before calling `clipboard.writeText`, and no-op silently if not — matching the issue's "handle empty address gracefully" requirement.
>
> **Testing:**
> - Generate a card with a normal address, click copy, paste elsewhere, confirm exact match.
> - Confirm the feedback message appears and clears after ~2 seconds.
> - Click copy multiple times rapidly — feedback shouldn't stack or break.
> - Try in a browser context where `navigator.clipboard` might be undefined — should fail without crashing the page.
>
> This plan touches only the three files above and adds no new dependencies.

**What a human should check before approving:** Does the plan actually stay inside "small and focused" per the issue? Does it avoid touching `students/` or `docs/`? Yes on both — that's what makes this plan approvable as-is.
