# Example: AI Investigation (Step 1 of the live demo)

This is a realistic transcript of what running the Step 1 prompt from [`../docs/ai-live-demo.md`](../docs/ai-live-demo.md) produces against this repository.

**Prompt used:**
> Explore this repository and understand how catching a falling coin or bomb is currently supposed to work. Do not modify anything. Identify: 1. The relevant files. 2. How the current implementation works. 3. Where the bug most likely is. 4. Any potential edge cases. Then explain your findings in beginner-friendly language.

**Example response:**

> I looked through the repository without changing anything. Here's what I found:
>
> **1. Relevant files**
> - `src/app.js` — the whole game loop: spawning items, moving the basket, collision detection, scoring, game over.
> - `src/index.html` — canvas element, HUD (score/lives), start/game-over overlays.
> - `src/style.css` — visual styling only, no game logic.
>
> **2. How it currently works**
> Every animation frame, `update()` moves the basket based on which arrow keys are held, moves every falling item down by its `speed`, and calls `isColliding(basket, item)` for each item to decide whether it was caught. If `isColliding` returns `true` for a coin, score goes up by 10; for a bomb, a life is lost. If an item falls past the canvas height without being "caught," it's just removed with no effect.
>
> **3. Where the bug most likely is**
> `isColliding(basketBox, item)` currently reads:
> ```js
> return (
>   item.x > basketBox.x + BASKET_WIDTH &&
>   item.x + item.size < basketBox.x &&
>   item.y + item.size > basketBox.y
> );
> ```
> The first two conditions can never both be true — the first says the item is entirely to the *right* of the basket, the second says it's entirely to the *left*. An item can't be in both places at once, so the `&&` of those two conditions is always `false`, and the whole function always returns `false`. That's why nothing is ever "caught," regardless of where the basket is.
>
> **4. Edge cases**
> - An item exactly touching the basket's edge (boundary case) — worth testing once fixed.
> - A bomb hit currently calls a blocking `alert()`, unrelated to this bug but visible while testing.
> - No bounds-checking on `basket.x` — also unrelated to this bug, but worth not confusing with it.

**What to verify yourself:** open `src/app.js` and re-read `isColliding` line by line — confirm for yourself that the two x-axis conditions really are mutually exclusive before accepting this diagnosis.
