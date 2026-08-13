# Example: AI Implementation (Step 3 of the live demo)

**Prompt used:**
> Implement the approved plan. Keep the change minimal and focused on the issue. Do not modify unrelated files. After implementation: 1. List every file changed. 2. Explain what changed in each file. 3. Explain how I can test the feature.

**Example response:**

> Implemented the approved plan. Three files changed:
>
> **1. `src/index.html`**
> Replaced the placeholder comment inside `.tip-card` with:
> ```html
> <button id="copy-btn" type="button">Copy address</button>
> <span id="copy-feedback" role="status"></span>
> ```
>
> **2. `src/app.js`**
> Added, after the existing `generate-btn` handler:
> ```js
> const copyBtn = document.getElementById("copy-btn");
> const copyFeedback = document.getElementById("copy-feedback");
>
> copyBtn.addEventListener("click", async () => {
>   const address = tipAddress.textContent.trim();
>   if (!address) return;
>
>   try {
>     await navigator.clipboard.writeText(address);
>     copyFeedback.textContent = "Copied!";
>   } catch (err) {
>     copyFeedback.textContent = "Couldn't copy — please copy manually.";
>   }
>
>   setTimeout(() => { copyFeedback.textContent = ""; }, 2000);
> });
> ```
>
> **3. `src/style.css`**
> Added:
> ```css
> .copy-btn {
>   margin-top: 8px;
>   width: auto;
>   padding: 8px 14px;
>   font-size: 0.85rem;
> }
>
> .copy-feedback {
>   display: inline-block;
>   margin-left: 8px;
>   color: var(--success);
>   font-size: 0.85rem;
> }
> ```
>
> **How to test:**
> 1. Open `src/index.html` in a browser.
> 2. Fill in the form, click "Generate Tip Card."
> 3. Click "Copy address" — a "Copied!" message should appear next to the button and clear after 2 seconds.
> 4. Paste somewhere to confirm the clipboard content matches the displayed address exactly.
> 5. Click rapidly several times — no stacked or broken feedback.

This is exactly the kind of diff you should expect to review by hand — see [`sample-diff.md`](sample-diff.md) for the actual line-by-line diff, and [`sample-review.md`](sample-review.md) for a review pass on it.
