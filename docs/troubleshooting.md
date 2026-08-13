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

**SYMPTOM:** Confused about "fork" vs. "branch."
**CAUSE:** They solve a similar problem at different levels — a fork is your own copy of the whole repository on GitHub; a branch is a line of work inside one repository.
**FIX:** For this workshop, everyone works on **branches** in the same shared repository (you've been given write access) — no forking needed. If working on a repo you don't have write access to, you'd fork first, then branch inside your fork.

---

**SYMPTOM:** Merge conflict when pulling or merging.
**CAUSE:** Two people changed the same lines in the same file.
**FIX:** Open the conflicted file, look for `<<<<<<<`, `=======`, `>>>>>>>` markers, manually choose/combine the correct content, delete the markers, then `git add <file>` and commit. Ask for help if unsure which side to keep.

---

**SYMPTOM:** CI fails on your PR.
**CAUSE:** Varies — read the CI log; error messages are written to be beginner-friendly (e.g. duplicate GitHub username, broken table format).
**FIX:** Click "Details" on the failing check, read the exact error, fix locally, commit, push again — CI reruns automatically.

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
