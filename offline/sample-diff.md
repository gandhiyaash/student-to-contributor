# Example: `git diff` Output (Step 4 of the live demo)

This is what `git diff` shows after the implementation in [`ai-implementation-example.md`](ai-implementation-example.md). Read it the way you'd read any diff: `-` lines removed, `+` lines added.

```diff
diff --git a/src/app.js b/src/app.js
--- a/src/app.js
+++ b/src/app.js
@@ -47,10 +47,11 @@
 // Should return true when the basket and the falling item's boxes overlap.
 function isColliding(basketBox, item) {
   return (
-    item.x > basketBox.x + BASKET_WIDTH &&
-    item.x + item.size < basketBox.x &&
-    item.y + item.size > basketBox.y
+    item.x < basketBox.x + BASKET_WIDTH &&
+    item.x + item.size > basketBox.x &&
+    item.y + item.size > basketBox.y &&
+    item.y < basketBox.y + BASKET_HEIGHT
   );
 }
```

**Explained per Step 4's prompt:**
- **What changed:** the x-axis comparison operators were flipped (from describing "entirely right of" AND "entirely left of," which is impossible, to describing "starts before the basket's right edge" AND "ends after the basket's left edge," which is a real overlap check), and a missing upper y-bound condition was added.
- **Why it changed:** the old logic could never return `true` for any position, so nothing was ever caught.
- **Behavior affected:** catching coins and bombs — score, lives, and the entire core gameplay loop now function.
- **Verify manually:** play a full round — catch several coins, take a bomb hit, lose all lives, confirm Game Over shows the right score.
