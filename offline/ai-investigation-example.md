# Example: AI Investigation (Step 1 of the live demo)

This is a realistic transcript of what running the Step 1 prompt from [`../docs/ai-live-demo.md`](../docs/ai-live-demo.md) produces against this repository.

**Prompt used:**
> Explore this repository and understand how the Bitcoin address is currently displayed. Do not modify anything. Identify: 1. The relevant files. 2. How the current implementation works. 3. Where the new functionality should probably live. 4. Any potential edge cases. Then explain your findings in beginner-friendly language.

**Example response:**

> I looked through the repository without changing anything. Here's what I found:
>
> **1. Relevant files**
> - `src/index.html` — contains the form (name, address, message) and the result card where the address is displayed (`#tip-address`).
> - `src/app.js` — handles the "Generate Tip Card" button click, reads the form values, and writes them into the result card's DOM elements.
> - `src/style.css` — styling for the form and card, including `.tip-address`.
>
> **2. How it currently works**
> When the user clicks "Generate Tip Card," `app.js` reads `#name`, `#address`, and `#message`, validates that address isn't empty (showing a plain `alert()` if it is), and sets `textContent` on `#tip-name`, `#tip-address`, and `#tip-message`. The result card (`#result-card`) is then un-hidden.
>
> **3. Where the copy feature should live**
> There's an HTML comment in `index.html` right inside `.tip-card` marking where a copy button belongs. The button itself should go there; its click handler belongs in `app.js`, probably using `navigator.clipboard.writeText(address)`. Styling for the button/feedback state belongs in `style.css`, following the existing `.tip-*` naming pattern.
>
> **4. Edge cases**
> - Address is empty when the button is clicked (shouldn't be possible if the form validated first, but the button should handle it gracefully anyway, e.g. by being disabled when there's no address).
> - `navigator.clipboard` isn't available in all contexts (e.g. non-HTTPS) — worth a fallback or at least not crashing.
> - Repeated clicks — feedback state should reset cleanly each time, not stack up.
> - Very long addresses could overflow the card on narrow screens (existing CSS uses `word-break: break-all`, so this is likely already handled).

**What to verify yourself:** open `src/index.html` and `src/app.js` and confirm the described structure actually matches — element IDs, the `alert()` call, the comment placeholder.
