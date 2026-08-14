# Troubleshooting

Format: **SYMPTOM → CAUSE → FIX**. Written for students and workshop assistants alike.

---

**SYMPTOM:** `git: command not found`
**CAUSE:** Git isn't installed, or isn't on your PATH.
**FIX:** Follow the OS-specific install steps in [`SETUP.md`](../SETUP.md), then reopen your terminal.

---

**SYMPTOM:** Can't sign in to GitHub, or repeated login loops.
**CAUSE:** Browser blocking third-party cookies, or an existing stale session.
**FIX:** Try an incognito/private window, or clear cookies for github.com and retry.

---

**SYMPTOM:** `Please tell me who you are` error when committing.
**CAUSE:** Git identity not configured on this machine.
**FIX:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

---

**SYMPTOM:** Commands fail with "not a git repository" or edits don't show up where expected.
**CAUSE:** You're in the wrong directory.
**FIX:** Run `pwd` to check where you are, `cd` into the cloned `student-to-contributor` folder, and confirm with `git status`.

---

**SYMPTOM:** You committed to `main` instead of a feature branch.
**CAUSE:** Forgot to `git switch -c` before making changes.
**FIX:**
```bash
git branch feature/my-fix
git reset --hard origin/main
git switch feature/my-fix
```
(Ask a facilitator before running `reset --hard` if unsure — it discards uncommitted changes.)

---

**SYMPTOM:** `git push` fails with "rejected" or "non-fast-forward."
**CAUSE:** The remote branch has commits you don't have locally (common if you edited the file on GitHub's web UI too).
**FIX:** `git pull --rebase origin <branch-name>`, resolve any conflicts, then push again.

---

**SYMPTOM:** `git push` fails with "Permission to gandhiyaash/student-to-contributor.git denied" or a 403.
**CAUSE:** You cloned the original repository instead of your fork, so `origin` points somewhere you don't have write access to.
**FIX:** Run `git remote -v` and check the URL. If it says `gandhiyaash/student-to-contributor` instead of `<your-username>/student-to-contributor`, you cloned the wrong thing — fork it first, then re-clone your fork. See [`fork-workflow.md`](fork-workflow.md).

---

**SYMPTOM:** After pushing, nothing happens on your PR — no CI checks appear, just a gray dot or "Waiting."
**CAUSE:** GitHub requires a maintainer to manually approve workflow runs for a contributor's first-ever PR to a repository. This is normal and not something you did wrong.
**FIX:** Nothing to do on your end — flag it to the facilitator, who needs to click "Approve and run workflows" on the PR's Checks tab. Later PRs from you won't need this.

---

**SYMPTOM:** Working on Issue 10 (the deliberate bug), your PR shows "no changes" or an empty diff even though you fixed the bug.
**CAUSE:** You opened the PR against `main` by default. `main` never had this bug — only the `bug/broken-restart-button` branch does — so comparing your fix against `main` shows nothing.
**FIX:** On GitHub's "Compare & pull request" screen, click the "base: main" dropdown and change it to `bug/broken-restart-button` before creating the PR. See [`../tasks/advanced.md`](../tasks/advanced.md) Issue 10.

---

**SYMPTOM:** Confused about "fork" vs. "branch."
**CAUSE:** They solve a similar problem at different levels — a fork is your own copy of the whole repository on GitHub; a branch is a line of work inside a repository.
**FIX:** For this workshop, you fork the repository first (you don't have write access to the original), then create a branch *inside your fork*. See [`fork-workflow.md`](fork-workflow.md) for the exact sequence.

---

**SYMPTOM:** Merge conflict when pulling or merging.
**CAUSE:** Two people changed the same lines in the same file.
**FIX:** Open the conflicted file, look for `<<<<<<<`, `=======`, `>>>>>>>` markers, manually choose/combine the correct content, delete the markers, then `git add <file>` and commit. Ask for help if unsure which side to keep.

---

**SYMPTOM:** CI fails on your PR.
**CAUSE:** Varies — read the CI log; error messages are written to be beginner-friendly (e.g. duplicate GitHub username, broken table format).
**FIX:** Click "Details" on the failing check, read the exact error, fix locally, commit, push again — CI reruns automatically.

---

**SYMPTOM:** Not sure how to actually run/see the game.
**CAUSE:** It's not obvious that a no-build-step app just means "open the HTML file."
**FIX:** Double-click `src/index.html` in your file browser — it opens straight in your default browser, no server or install needed. After editing any file in `src/`, just reload the page (Cmd+R / Ctrl+R). See [`../CONTRIBUTING.md#running-the-game-locally`](../CONTRIBUTING.md#running-the-game-locally).

---

**SYMPTOM:** The app doesn't load or shows a blank page.
**CAUSE:** Usually opening `app.js` directly instead of `index.html`, or a JS error breaking the page.
**FIX:** Open `src/index.html` in your browser, then open DevTools → Console to see the actual error.

---

**SYMPTOM:** No AI access (no Claude Code, no Copilot).
**CAUSE:** Not required — AI is optional for students.
**FIX:** Use [`offline/`](../offline/) examples to see what AI-assisted steps look like, and complete your task using the plain instructions in [`tasks/`](../tasks/).

---

**SYMPTOM:** No internet during the workshop.
**CAUSE:** Venue Wi-Fi issues (it happens).
**FIX:** See [`OFFLINE.md`](../OFFLINE.md) — practice Git locally, push once connectivity returns.
