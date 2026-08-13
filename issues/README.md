# Issue Bank

These 10 files are the real GitHub Issues for this workshop, written ready to paste into GitHub (or bulk-create with the script below). Each corresponds to a task in [`../tasks/`](../tasks/).

| # | File | Title | Track |
|---|------|-------|-------|
| 1 | `01-add-yourself-to-contributors.md` | Add yourself to contributors | Beginner |
| 2 | `02-fix-a-documentation-typo.md` | Fix a documentation typo | Beginner |
| 3 | `03-add-a-bitcoin-learning-resource.md` | Add a Bitcoin learning resource | Beginner |
| 4 | `04-add-a-copy-address-button.md` | Add a Copy Address Button | Intermediate (central live AI demo) |
| 5 | `05-improve-mobile-layout.md` | Improve mobile layout | Intermediate |
| 6 | `06-improve-empty-address-feedback.md` | Improve empty-address feedback | Intermediate |
| 7 | `07-improve-input-validation.md` | Improve input validation | Advanced |
| 8 | `08-add-automated-tests.md` | Add automated tests | Advanced |
| 9 | `09-improve-accessibility.md` | Improve accessibility | Advanced |
| 10 | `10-fix-a-deliberately-introduced-bug.md` | Fix a deliberately introduced bug | Advanced |

## Creating these on GitHub

**Manual (recommended for a first run):** open each file, copy the body, paste into a new Issue on GitHub using the filename's title (minus the number prefix) as the issue title, and apply the matching label (`good first issue`, `intermediate`, `advanced`).

**Bulk, via GitHub CLI** (requires [`gh`](https://cli.github.com/) authenticated, and the repo already pushed to GitHub):

```bash
bash issues/create-issues.sh
```

This is manual GitHub setup — see the repository's top-level notes for what else must be configured by hand (labels, branch protection, etc).
