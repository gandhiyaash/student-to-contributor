# The Fork Workflow

This is the real open-source contribution model, and it's exactly what you'll use today:

```text
MY REPOSITORY (gandhiyaash/student-to-contributor)
   ↓
Student forks repository
   ↓
Student clones their fork
   ↓
Student creates branch
   ↓
Student makes contribution
   ↓
Student commits
   ↓
Student pushes to their fork
   ↓
Student opens Pull Request
   ↓
Pull Request targets the original repository
   ↓
CI runs
   ↓
Maintainer reviews
   ↓
Student responds to feedback
   ↓
Merge
```

**You never get write access to the original repository, and you don't need it.** Nobody does — not even experienced contributors on real open-source projects. You work entirely in your own copy, and a Pull Request is how you *propose* your change back.

---

## Step 1 — Fork

Open:

```text
https://github.com/gandhiyaash/student-to-contributor
```

Click **Fork** (top-right of the page). This creates a full copy of the repository under your own GitHub account: `https://github.com/<your-username>/student-to-contributor`.

## Step 2 — Clone YOUR fork

Not the original — yours. On your fork's page, click **Code** → copy the HTTPS URL, then:

```bash
git clone https://github.com/<your-username>/student-to-contributor.git
```

## Step 3 — Enter the repository

```bash
cd student-to-contributor
```

## Step 4 — Check your remote

```bash
git remote -v
```

You'll see:

```text
origin  https://github.com/<your-username>/student-to-contributor.git (fetch)
origin  https://github.com/<your-username>/student-to-contributor.git (push)
```

**`origin`** is your fork — the only remote you have push access to. There's no `upstream` remote yet because you haven't added one; you don't need to for today's contribution (you'll open your PR straight from `origin` against the original repo on GitHub's website — no `upstream` remote required for that). If you ever want to pull in new changes from the original repository later, you'd add it yourself:

```bash
git remote add upstream https://github.com/gandhiyaash/student-to-contributor.git
```

Then `upstream` = the original workshop repository, `origin` = your fork. Keep that distinction in mind: **you push to `origin`, and your Pull Request targets `upstream`** (GitHub handles the "targets upstream" part automatically when you click "New Pull Request" from your fork).

## Step 5 — Create a branch

```bash
git switch -c students/<your-github-username>
```

```text
main
 |
 └── students/<your-github-username>
```

## Step 6 — Make your contribution

Pick a task from [`../tasks/beginner.md`](../tasks/beginner.md), [`../tasks/intermediate.md`](../tasks/intermediate.md), or [`../tasks/advanced.md`](../tasks/advanced.md), and make the change.

## Step 7 — Check your diff

```bash
git status
git diff
```

Read every line before you commit.

## Step 8 — Commit

```bash
git add .
git commit -m "docs: add student profile"
```

(Use a commit message that matches what you actually changed — this is just an example.)

## Step 9 — Push to YOUR fork

```bash
git push -u origin students/<your-github-username>
```

This pushes to `origin` — your fork. It cannot push to the original repository; you don't have write access there, and you don't need it.

## Step 10 — Open the Pull Request

GitHub will show a banner on your fork's page: **"Compare & pull request."** Click it. Confirm the base repository is `gandhiyaash/student-to-contributor` (`main` branch) and the head repository is your fork's branch. Fill in the PR template, then click **Create pull request**.

```text
YOUR FORK → YOUR BRANCH → PULL REQUEST → gandhiyaash/student-to-contributor
```

That's it — CI runs automatically on your PR, a maintainer reviews it, and once it's approved it gets merged into the original repository. Your fork and your local clone are untouched by that merge; you keep them for your next contribution.

## If you get stuck

- Pushed but don't see a "Compare & pull request" banner? Go to your fork on GitHub, switch to your branch in the branch dropdown, then click **Contribute → Open pull request**.
- `git push` says "Permission denied" or "403"? You're probably trying to push to the original repository instead of your fork — check `git remote -v` and confirm `origin` points to `<your-username>/student-to-contributor`, not `gandhiyaash/student-to-contributor`.
- More: [`troubleshooting.md`](troubleshooting.md).
