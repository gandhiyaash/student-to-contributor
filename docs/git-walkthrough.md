# Git, Taught Through This Project

Don't memorize definitions yet. Run these commands against this actual repository and watch what happens.

## 1. What has changed? — `git status`

```bash
git status
```

Git tells you three things: which branch you're on, which files are modified, and which files are staged (ready to commit) vs. unstaged (not yet marked for commit).

Try it right now, before changing anything — it should say "nothing to commit, working tree clean."

## 2. What exactly changed? — `git diff`

Open `src/app.js`, add a blank comment line anywhere, save it. Then:

```bash
git diff
```

You'll see a line-by-line diff: lines starting with `-` were removed, `+` were added. This is Git showing you the *content* of the change, not just the filename.

## 3. Saving a change — staging and committing

```bash
git add .
git commit -m "fix: correct basket/item collision detection"
git log --oneline
```

Three concepts here:

- **Working directory** — the files on your disk right now, as you're editing them.
- **Staging area** — a holding pen for changes you've decided belong in the *next* commit. `git add` moves changes here.
- **Commit** — a permanent snapshot of the staging area, with a message explaining why. `git log --oneline` shows the history of commits — a timeline you can always come back to.

Think of it as three rooms: edit in the working directory, pack your bag in staging, ship it with a commit.

## 4. Working in isolation — branches

```bash
git branch
git switch -c fix/catch-mechanic
```

`git branch` lists existing branches. `git switch -c <name>` creates a new branch and moves you onto it.

```text
main
 |
 └── fix/catch-mechanic
```

Your new branch starts as an exact copy of `main` at this moment. Any commits you make now happen on `fix/catch-mechanic` — `main` is untouched until you merge. This is what lets 80 students work on the same repository at the same time without stepping on each other: everyone works on their own branch.

## Recap

| Command | What it does |
|---|---|
| `git status` | Shows what's changed and what's staged |
| `git diff` | Shows the exact content of unstaged changes |
| `git add <file>` | Stages a change |
| `git commit -m "..."` | Saves a permanent snapshot with a message |
| `git log --oneline` | Shows commit history |
| `git branch` | Lists branches |
| `git switch -c <name>` | Creates and switches to a new branch |

That's enough Git to contribute. Anything more advanced (rebasing, cherry-picking, etc.) you can learn later, on demand.
