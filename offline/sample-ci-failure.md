# Example: A Failing CI Run

This is what happens when a contributor's file under `students/` reuses a GitHub username that's already claimed by another student's file — the intentional failure scenario used live in the workshop. See [`../docs/troubleshooting.md`](../docs/troubleshooting.md) and [`../.github/workflows/validate.yml`](../.github/workflows/validate.yml).

**The mistake** (a new file added in the PR diff):

```diff
+# Priya Sharma
+
+GitHub: @alicejohnson
+
+## What I learned
+
+I opened my first Pull Request.
```

(`students/priya-sharma.md` was added, but `@alicejohnson` was already claimed by `students/alice-johnson.md`, merged earlier.)

**GitHub PR checks tab:**

```text
Some checks were not successful
❌ validate / contributors-format (push)  Failed in 4s
```

**Clicking "Details" on the failed check shows a log like:**

```text
OK   students/alice-johnson.md
OK   students/priya-sharma.md

❌ Validation failed

Duplicate GitHub username detected:
@alicejohnson  (used in students/alice-johnson.md, students/priya-sharma.md)

Each student must use a unique GitHub username in their own file. If you already have a file, don't create a second one.

Error: Process completed with exit code 1.
```

**The recovery workflow:**

```text
PR
 ↓
CI
 ↓
❌ Failed
 ↓
Read logs  → "Duplicate GitHub username detected: @alicejohnson"
 ↓
Understand error → the new file claims a username another file already has
 ↓
Fix → correct the GitHub username in your own file (it was a typo — you meant @priyasharma)
 ↓
Commit → git commit -m "fix: correct GitHub username"
 ↓
Push → git push
 ↓
CI reruns automatically
 ↓
✅ Passed
```

See [`sample-ci-success.md`](sample-ci-success.md) for what the passing run looks like after the fix.
