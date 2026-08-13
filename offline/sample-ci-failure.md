# Example: A Failing CI Run

This is what happens when a contributor adds a duplicate GitHub username to `students/contributors.md` — the intentional failure scenario used live in the workshop. See [`../docs/troubleshooting.md`](../docs/troubleshooting.md) and [`../.github/workflows/validate.yml`](../.github/workflows/validate.yml).

**The mistake** (in the PR diff):

```diff
 | Example Student | @example-student | Added my name to the contributors list |
+| Priya Sharma | @yashgandhi | Added my name to the contributors list |
```

(`@yashgandhi` was already used by another row further up the table.)

**GitHub PR checks tab:**

```text
Some checks were not successful
❌ validate / contributors-format (push)  Failed in 4s
```

**Clicking "Details" on the failed check shows a log like:**

```text
Running contributors.md validation...

Checking table format... OK
Checking for duplicate GitHub usernames...

❌ Validation failed

Duplicate GitHub username detected:
@yashgandhi

Each contributor must use a unique GitHub username.
If this is your username and you already have a row, remove the duplicate row instead of adding a new one.

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
Read logs  → "Duplicate GitHub username detected: @yashgandhi"
 ↓
Understand error → two rows claim the same username
 ↓
Fix → remove/correct the duplicate row locally
 ↓
Commit → git commit -m "fix: remove duplicate contributor entry"
 ↓
Push → git push
 ↓
CI reruns automatically
 ↓
✅ Passed
```

See [`sample-ci-success.md`](sample-ci-success.md) for what the passing run looks like after the fix.
