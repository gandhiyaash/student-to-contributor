# Example: `git diff` Output (Step 4 of the live demo)

This is what `git diff` shows after the implementation in [`ai-implementation-example.md`](ai-implementation-example.md). Read it the way you'd read any diff: `-` lines removed, `+` lines added.

```diff
diff --git a/src/index.html b/src/index.html
--- a/src/index.html
+++ b/src/index.html
@@ -32,7 +32,8 @@
         <p class="tip-message" id="tip-message"></p>
-        <!-- TODO (Issue: Add a Copy Address Button): a "Copy address" button belongs here. -->
+        <button id="copy-btn" type="button">Copy address</button>
+        <span id="copy-feedback" role="status"></span>
       </div>
     </section>

diff --git a/src/app.js b/src/app.js
--- a/src/app.js
+++ b/src/app.js
@@ -22,3 +22,17 @@ generateBtn.addEventListener("click", () => {
   // NOTE: There is currently no way to copy `address` without manual
   // text selection. See Issue: "Add a Copy Address Button".
 });
+
+const copyBtn = document.getElementById("copy-btn");
+const copyFeedback = document.getElementById("copy-feedback");
+
+copyBtn.addEventListener("click", async () => {
+  const address = tipAddress.textContent.trim();
+  if (!address) return;
+
+  try {
+    await navigator.clipboard.writeText(address);
+    copyFeedback.textContent = "Copied!";
+  } catch (err) {
+    copyFeedback.textContent = "Couldn't copy — please copy manually.";
+  }
+
+  setTimeout(() => { copyFeedback.textContent = ""; }, 2000);
+});

diff --git a/src/style.css b/src/style.css
--- a/src/style.css
+++ b/src/style.css
@@ -95,3 +95,14 @@
 .tip-message {
   color: var(--muted);
   font-style: italic;
   margin: 0;
 }
+
+.copy-btn {
+  margin-top: 8px;
+  width: auto;
+  padding: 8px 14px;
+  font-size: 0.85rem;
+}
+
+.copy-feedback {
+  display: inline-block;
+  margin-left: 8px;
+  color: var(--success);
+  font-size: 0.85rem;
+}
```

**Explained per Step 4's prompt:**
- `src/index.html`: what changed — placeholder comment replaced with a real button + feedback span; why — the plan called for the button to live inside `.tip-card`; behavior affected — the result card now renders two more interactive elements; verify manually — button appears only after a card is generated.
- `src/app.js`: what changed — new click handler added, nothing existing removed; why — implements the actual copy behavior per the plan; behavior affected — clicking the new button calls the Clipboard API; verify manually — test with clipboard permissions both granted and blocked.
- `src/style.css`: what changed — two new rules appended; why — style the new elements; behavior affected — purely visual, no existing rules touched; verify manually — check the button doesn't look cramped next to the message text.
