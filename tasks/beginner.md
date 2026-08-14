# Beginner Track

Goal: experience the full contribution loop with the lowest possible risk. Pick **one** issue below.

All three issues use the fork workflow — see [`docs/fork-workflow.md`](../docs/fork-workflow.md) if you haven't forked and cloned yet. In short: you never push directly to this repository. You push to **your own fork**, and open a Pull Request from there.

## Issue 1 — Add your contributor profile

**Objective:** Practice fork → clone → branch → create file → commit → push → PR using a file that's guaranteed not to conflict with anyone else's.

**Why it matters:** This is the exact workflow every real open-source contribution uses, just with the lowest-stakes possible file — every student creates their **own new file**, so 80 people can do this at the same time with zero merge conflicts.

**Steps:**
1. Fork the repository (button, top-right of the GitHub page) if you haven't already.
2. Clone **your fork**: `git clone https://github.com/<your-username>/student-to-contributor.git`
3. `cd student-to-contributor`
4. `git switch -c students/<your-github-username>`
5. Copy the template to a new file named after you (lowercase, hyphens, no spaces):
   ```bash
   cp students/TEMPLATE.md students/alice-johnson.md
   ```
   (replace `alice-johnson` with your own name, in that same lowercase-hyphenated format)
6. Open your new file in a text editor and fill in your name, your GitHub username, and one sentence about what you learned.
7. `git add students/<your-file>.md`
8. `git commit -m "docs: add <your-name> student profile"`
9. `git push -u origin students/<your-github-username>`
10. Open a Pull Request on GitHub — it should target `gandhiyaash/student-to-contributor`'s `main` branch. Fill in the PR template.

**Success criteria:**
- A new file exists at `students/<your-name>.md` — no existing file touched.
- CI passes (filename format, required headings, GitHub username unique).
- PR is opened from your fork against `main`.

**Hints:**
- Don't edit anyone else's file — create your own.
- Your GitHub username must be unique across all files in `students/` — CI will catch duplicates.
- Full detail on every step: [`docs/fork-workflow.md`](../docs/fork-workflow.md).

**Common mistakes:**
- Cloning the original repo instead of your fork (you'll get a "permission denied" when you try to push — see [`docs/troubleshooting.md`](../docs/troubleshooting.md)).
- Naming your file with spaces, capital letters, or underscores instead of hyphens.
- Forgetting the `@` before your GitHub username.
- Committing directly to `main` instead of a branch.

---

## Issue 2 — Fix a documentation typo

**Objective:** Find and fix a small, real mistake in the docs.

**Steps:**
1. Read through [`README.md`](../README.md) or any file in [`docs/`](../docs/).
2. Find (or introduce and fix) a typo, broken link, or unclear sentence.
3. Branch, commit, push (to your fork), open a PR as above, using branch name `docs/fix-typo-<short-description>`.

**Success criteria:**
- The fix is accurate and the diff is small and focused.
- CI (Markdown validation) passes.

**Hints:** Look closely at `docs/git-vs-github.md` and `docs/bitcoin.md` — these are dense and easy to slightly misstate.

---

## Issue 3 — Add a Bitcoin learning resource

**Objective:** Contribute a genuinely useful link for future students.

**Steps:**
1. Open [`docs/bitcoin.md`](../docs/bitcoin.md).
2. Under "Further reading," add one link you found genuinely helpful, with a one-sentence description.
3. Branch name: `docs/add-resource-<short-description>`.

**Success criteria:**
- The link works and is relevant to beginners.
- Formatting matches the existing list.

**Common mistakes:** Adding a link without a description, or duplicating an existing resource.
