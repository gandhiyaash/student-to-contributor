# Beginner Track

Goal: experience the full contribution loop with the lowest possible risk. Pick **one** issue below.

## Issue 1 — Add yourself to contributors

**Objective:** Practice branch → edit → commit → push → PR using a file designed to never conflict.

**Why it matters:** This is the exact workflow every real open-source contribution uses, just with the lowest-stakes possible file.

**Steps:**
1. `git switch -c students/your-github-username`
2. Open [`students/contributors.md`](../students/contributors.md)
3. Add a new row at the **bottom** of the table with your name, GitHub username, and contribution.
4. `git add students/contributors.md`
5. `git commit -m "docs: add <your-name> to contributors"`
6. `git push -u origin students/your-github-username`
7. Open a Pull Request on GitHub. Fill in the PR template.

**Success criteria:**
- Your row appears at the bottom of the table.
- CI passes (no duplicate usernames, table format intact).
- PR is opened against `main`.

**Hints:**
- Don't touch any other row.
- Your GitHub username must be unique across the whole file — CI will catch duplicates.

**Common mistakes:**
- Editing someone else's row by accident (merge conflict).
- Forgetting the `@` before your GitHub username.
- Committing directly to `main` instead of a branch.

---

## Issue 2 — Fix a documentation typo

**Objective:** Find and fix a small, real mistake in the docs.

**Steps:**
1. Read through [`README.md`](../README.md) or any file in [`docs/`](../docs/).
2. Find (or introduce and fix) a typo, broken link, or unclear sentence.
3. Branch, commit, push, open a PR as above, using branch name `docs/fix-typo-<short-description>`.

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
