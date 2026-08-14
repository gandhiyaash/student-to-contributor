# Offline Mode

If the internet drops during the workshop, you can still learn and practice everything except the parts that literally require GitHub's website (opening a real PR, seeing real CI run).

This directory mirrors the main workflow with static examples, so the shape of the lesson stays identical — you're reading real output instead of producing it live.

## What you can still do fully, with no internet

Everything in [`../docs/git-walkthrough.md`](../docs/git-walkthrough.md) runs 100% locally:

```bash
git status
git diff
git branch
git switch -c feature/practice
git add
git commit
git log
```

Practice the full beginner task ([`../tasks/beginner.md`](../tasks/beginner.md), Issue 1) exactly as written — branch, create your `students/<your-name>.md` file, commit — right up until the `git push` step. Everything up to there works offline, **as long as you already forked and cloned your fork while you had internet** (forking itself needs GitHub's website — if you haven't forked yet and the internet is down, there's nothing to clone; wait for connectivity to do that one-time step, then everything else here applies).

## What you can't do offline, and what to read instead

| Can't do offline | Read instead |
|---|---|
| Ask Claude Code to investigate the repo | [`ai-investigation-example.md`](ai-investigation-example.md) |
| Ask Claude Code to plan a feature | [`ai-plan-example.md`](ai-plan-example.md) |
| Ask Claude Code to implement | [`ai-implementation-example.md`](ai-implementation-example.md) |
| Review a real diff from that implementation | [`sample-diff.md`](sample-diff.md) |
| Open a real Pull Request | [`sample-pr.md`](sample-pr.md) |
| Get a real AI PR review | [`sample-review.md`](sample-review.md) |
| See a real CI failure | [`sample-ci-failure.md`](sample-ci-failure.md) |
| See a real CI success | [`sample-ci-success.md`](sample-ci-success.md) |

Each file is a realistic transcript of what the live/online version produces, using the exact same "Fix the Broken Catch Mechanic" issue used in the live demo. Read them in the order listed above — they tell one continuous story, start to finish.

## When your internet comes back

`git push -u origin <branch-name>` sends everything you committed offline up to GitHub in one go. Then open your Pull Request and rejoin the live workflow.
