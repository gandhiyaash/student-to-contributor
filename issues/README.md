# Issue Bank

These 10 files are the real GitHub Issues for this workshop, written ready to paste into GitHub (or bulk-create with the script below). Each corresponds to a task in [`../tasks/`](../tasks/), using the exact same title as that task's heading.

| # | File | Title | Track | Labels |
|---|------|-------|-------|--------|
| 1 | `01-add-your-contributor-profile.md` | Add your contributor profile | Beginner | `good first issue`, `beginner`, `documentation` |
| 2 | `02-fix-a-documentation-typo.md` | Fix a documentation typo | Beginner | `good first issue`, `beginner`, `documentation` |
| 3 | `03-add-a-bitcoin-learning-resource.md` | Add a Bitcoin learning resource | Beginner | `good first issue`, `beginner`, `documentation` |
| 4 | `04-fix-the-broken-catch-mechanic.md` | Fix the Broken Catch Mechanic | Intermediate (central live AI demo) | `bug`, `enhancement` |
| 5 | `05-add-mobile-touch-controls.md` | Add mobile touch controls | Intermediate | `enhancement` |
| 6 | `06-replace-bomb-hit-alert-with-inline-feedback.md` | Replace bomb-hit alert with inline feedback | Intermediate | `enhancement` |
| 7 | `07-fix-basket-boundary-and-difficulty.md` | Fix basket boundary and difficulty scaling | Advanced | `advanced`, `enhancement` |
| 8 | `08-add-automated-tests.md` | Add automated tests | Advanced | `advanced`, `enhancement` |
| 9 | `09-improve-accessibility.md` | Improve accessibility | Advanced | `advanced`, `accessibility` |
| 10 | `10-fix-a-deliberately-introduced-bug.md` | Fix a deliberately introduced bug | Advanced | `advanced`, `bug` |

## Creating these on GitHub

**Manual (recommended for a first run):** open each file, copy the body, paste into a new Issue on GitHub using the title from the table above, and apply the matching labels.

**Bulk, via GitHub CLI** (requires [`gh`](https://cli.github.com/) authenticated, and the repo already pushed to GitHub):

```bash
bash issues/create-issues.sh
```

The script checks existing issue titles first and skips any that already exist — safe to re-run, never creates duplicates.

This is manual GitHub setup — see [`../docs/day-of-checklist.md`](../docs/day-of-checklist.md) for what else must be configured by hand before the workshop.
