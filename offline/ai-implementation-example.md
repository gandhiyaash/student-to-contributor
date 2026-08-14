# Example: AI Implementation (Step 3 of the live demo)

**Prompt used:**
> Implement the approved plan. Keep the change minimal and focused on the issue. Do not modify unrelated files. After implementation: 1. List every file changed. 2. Explain what changed and why. 3. Explain how I can test the fix.

**Example response:**

> Implemented the approved plan. One file changed:
>
> **`src/app.js`**
> Replaced the body of `isColliding` with a correct AABB overlap check:
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
> No other lines in the file were touched — the spawn logic, movement, scoring, and game-over flow were already correct and only needed a working `isColliding` to actually run.
>
> **How to test:**
> 1. Open `src/index.html` in a browser and click "Start Game."
> 2. Move the basket under a falling coin — score should increase by 10 the moment they overlap.
> 3. Let a bomb fall into the basket — a life should be lost and the hit feedback should appear.
> 4. Deliberately miss several coins — confirm they disappear with no score change and no error.
> 5. Lose all 3 lives — confirm the Game Over screen shows the correct final score.

This is exactly the kind of diff you should expect to review by hand — see [`sample-diff.md`](sample-diff.md) for the actual line-by-line diff, and [`sample-review.md`](sample-review.md) for a review pass on it.
