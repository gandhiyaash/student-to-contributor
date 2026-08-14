# If the Internet Drops

Short version: keep working. Git itself needs no internet — only `git push`/`git pull` and the GitHub website do.

## What still works with no internet

- Everything in [`docs/git-walkthrough.md`](docs/git-walkthrough.md): `git status`, `git diff`, `git branch`, `git switch -c`, `git add`, `git commit`, `git log`.
- Editing any file in the repository, including your task in [`tasks/`](tasks/).
- Reading every doc in this repository — they're all local files.
- Reading [`offline/`](offline/), which contains realistic transcripts of the AI-assisted and GitHub-based steps you can't run live without a connection.

## What needs internet

- `git push` / `git pull` (talking to GitHub).
- Opening a Pull Request, seeing CI run, getting reviewed on GitHub.
- Using Claude Code or another cloud AI assistant.

## What to do

1. Keep working locally: pick your task, branch, edit, commit — all of this works offline exactly as documented.
2. Read [`offline/README.md`](offline/README.md) — it walks through the same "Fix the Broken Catch Mechanic" story used in the live demo, as static examples, in the same order the live version happens.
3. When your connection returns, `git push -u origin <your-branch-name>` sends everything you committed up to GitHub at once, and you rejoin the normal workflow — open your PR, let CI run, get reviewed.

Nothing about the offline path is a "lesser" version of the workshop — it's the same workflow, same files, same issue, just with the GitHub-dependent steps read as examples instead of run live. See [`offline/README.md`](offline/README.md) to start.
