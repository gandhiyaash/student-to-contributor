# Example: AI Plan (Step 2 of the live demo)

**Prompt used:**
> Based on your investigation, propose a minimal implementation plan for the "Fix the Broken Catch Mechanic" issue. Do not modify any files yet. Explain: 1. Which files you would change. 2. What exactly is wrong with the current logic. 3. What the corrected logic should be. 4. How you would test the fix. Keep the plan minimal and avoid unrelated changes.

**Example response:**

> Here's a minimal plan — no files touched yet.
>
> **Files to change:**
> 1. `src/app.js` — only the body of `isColliding`. Nothing else needs to change.
>
> **What's wrong:**
> The x-axis check uses two conditions joined with `&&` that describe opposite sides of the basket ("item is right of the basket" AND "item is left of the basket"), which can never both be true. There's also no upper y-bound check, though that's secondary to the main bug.
>
> **Corrected logic:**
> A standard axis-aligned bounding box (AABB) overlap check — true when the boxes overlap on *both* axes:
> ```js
> function isColliding(basketBox, item) {
>   return (
>     item.x < basketBox.x + BASKET_WIDTH &&
>     item.x + item.size > basketBox.x &&
>     item.y + item.size > basketBox.y &&
>     item.y < basketBox.y + BASKET_HEIGHT
>   );
> }
> ```
>
> **Testing:**
> - Start the game, position the basket under a falling coin, confirm score increases by exactly 10 on contact.
> - Let a bomb fall into the basket, confirm a life is lost.
> - Let a coin fall past the basket without overlapping, confirm no score change and no crash.
> - Rapidly move the basket under multiple falling items, confirm each is only counted once.
>
> This plan touches only `isColliding` inside `src/app.js` — no other files, no unrelated cleanup.

**What a human should check before approving:** Does the fix logic actually look like a correct AABB overlap check? Walk through one concrete example by hand (e.g. basket at x=100–170, item at x=120) before saying yes.
