# Contributing

Thanks for contributing to Coin Catcher. This document is the exact workflow every change in this repository follows — the same workflow real open-source projects use.

## Prerequisites

- Git installed (`git --version`) — see [`SETUP.md`](SETUP.md) if not.
- A GitHub account with push access to this repository (workshop participants are given this in advance).
- Git identity configured:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your-email@example.com"
  ```

## 1. Clone the repository

```bash
git clone https://github.com/<org>/student-to-contributor.git
cd student-to-contributor
```

## 2. Create a branch

Never commit directly to `main`. Create a branch first:

```bash
git switch -c <type>/<short-description>
```

**Naming conventions:**
- `feature/touch-controls` — new functionality
- `fix/mobile-overflow` — bug fixes
- `docs/fix-typo-readme` — documentation
- `students/<your-github-username>` — adding yourself to contributors

## 3. Make your change

Pick a task from [`tasks/beginner.md`](tasks/beginner.md), [`tasks/intermediate.md`](tasks/intermediate.md), or [`tasks/advanced.md`](tasks/advanced.md), or a corresponding GitHub Issue. Keep the change scoped to that one task — don't fix unrelated things in the same PR, even if you notice them (open a new issue instead).

## 4. Check your diff

Before committing, always review exactly what you changed:

```bash
git status
git diff
```

Read every line. If something in the diff surprises you, figure out why before committing.

## 5. Commit

```bash
git add <files-you-changed>
git commit -m "type: short description"
```

Use a conventional prefix: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`. Avoid `git add .` unless you've just reviewed `git status` and know exactly what it will stage.

## 6. Push

```bash
git push -u origin <your-branch-name>
```

## 7. Open a Pull Request

On GitHub, open a PR from your branch into `main`. Fill out the PR template completely — What changed, why, how you tested it, and the checklist.

## 8. Wait for CI

Every PR automatically runs [`.github/workflows/validate.yml`](.github/workflows/validate.yml) — JS/HTML/Markdown checks and (if you touched it) contributors-table validation. If it fails, click "Details" on the failing check, read the error, fix it locally, and push again (see [`docs/troubleshooting.md`](docs/troubleshooting.md)).

## 9. Respond to review

A maintainer (or another student, during the workshop) will review your PR. Expect comments or requested changes — this is normal, not a rejection. Push additional commits to the same branch to address feedback; they'll appear automatically on the same PR.

## 10. Merge

Once CI passes and the PR is approved, a maintainer merges it. Congratulations — you're now a contributor.

## Running validation locally (optional)

You can run the same checks CI runs, before you even push:

```bash
node .github/scripts/check-js-syntax.js
node .github/scripts/check-html.js
node .github/scripts/check-markdown.js
node .github/scripts/check-contributors.js
```

No installation required — these use only Node's built-in capabilities.
