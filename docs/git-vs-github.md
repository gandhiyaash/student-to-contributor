# Git vs. GitHub

These are two different things, and mixing them up is the #1 source of confusion for new contributors.

```text
Git
 ↓
Version control on your computer

GitHub
 ↓
A platform for hosting repositories
and collaborating around Git
```

Git is a program that runs **locally on your laptop**. It tracks changes to files in a folder (a "repository"). You could use Git forever and never touch the internet — every command in `docs/git-walkthrough.md` runs entirely offline.

GitHub is a **website** that hosts copies of Git repositories and adds collaboration features on top: Issues, Pull Requests, code review, CI, and social features like stars and profiles.

```text
Your Computer
     |
     | git push
     ↓
   GitHub
     |
     | git pull
     ↓
Your Computer
```

`git push` sends your local commits up to GitHub. `git pull` brings commits from GitHub down to your computer. Nothing else moves data between the two — Git doesn't know GitHub exists unless you explicitly push or pull.

## Why this distinction matters

- If Git is broken (a bad commit, a messy branch), the internet won't help — you fix it locally.
- If GitHub is down, you can still `git commit`, `git log`, `git diff`, and `git branch` all day. Your work isn't lost.
- A "repository" can exist with no GitHub involvement at all. GitHub is one place to host it — not the only one, and not part of Git itself.

## Where this shows up in this workshop

- `docs/git-walkthrough.md` — all Git, no GitHub, works offline.
- Opening a Pull Request, seeing CI run, getting a review — all GitHub, requires internet.
- If your internet drops mid-workshop, keep working locally (branch, commit) and push once it's back. See [`OFFLINE.md`](../OFFLINE.md).
