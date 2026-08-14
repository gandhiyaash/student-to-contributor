# Contributing

Thanks for contributing to Coin Catcher. This document is the exact workflow every change in this repository follows — the same workflow real open-source projects use.

## Prerequisites

- Git installed (`git --version`) — see [`SETUP.md`](SETUP.md) if not.
- A GitHub account. **You do not need write access to this repository** — you'll fork it instead, same as any real open-source project.
- Git identity configured:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your-email@example.com"
  ```

## 1. Fork and clone

Fork [`gandhiyaash/student-to-contributor`](https://github.com/gandhiyaash/student-to-contributor) on GitHub (button, top-right), then clone **your fork** — not the original:

```bash
git clone https://github.com/<your-username>/student-to-contributor.git
cd student-to-contributor
```

Full detail, including the `origin`/`upstream` distinction: [`docs/fork-workflow.md`](docs/fork-workflow.md).

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

## Running the game locally

Coin Catcher is plain HTML/CSS/JS with no build step and no dependencies — there's nothing to install or compile.

**Simplest way:** find `src/index.html` in your file browser (Finder/Explorer) and double-click it. It opens directly in your default browser and works fully — moving the basket, catching (or, on `main`, failing to catch) items, all of it.

After you edit `src/app.js`, `src/index.html`, or `src/style.css`, just **reload the page** in your browser (Cmd+R / Ctrl+R) to see your change — no restart, no rebuild.

If double-clicking doesn't open it in a browser, or you'd rather use a local server (also fine, and closer to how real web projects are usually run): from the repository root,

```bash
cd src
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser. (Any static server works — `npx serve` if you have Node, or your editor's "Live Server" extension, are equally fine.)

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

## 6. Push to your fork

```bash
git push -u origin <your-branch-name>
```

`origin` is your fork — this is the only remote you have write access to.

## 7. Open a Pull Request

On GitHub, open a PR from your fork's branch into the original repository's `main` branch (GitHub shows a "Compare & pull request" banner after you push — click it). Fill out the PR template completely — What changed, why, how you tested it, and the checklist.

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
