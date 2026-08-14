# Students

This is where you make your first Pull Request. Every student gets their **own file** — nobody edits the same lines as anyone else, so 80 people can do this at the same time with zero merge conflicts.

## How it works

1. Copy [`TEMPLATE.md`](TEMPLATE.md) to a new file in this folder, named after you: `firstname-lastname.md`, all lowercase, words separated by hyphens. Example: `alice-johnson.md`.
2. Fill in your name, your GitHub username, and one sentence about what you learned.
3. That's it — commit, push, open a Pull Request.

## Filename rules (checked by CI)

- Lowercase letters, numbers, and hyphens only — e.g. `alice-johnson.md`, not `Alice_Johnson.md` or `alice johnson.md`.
- Must end in `.md`.
- Must be a new file — don't edit anyone else's.

## Content rules (checked by CI)

Your file must contain, in this order:

```markdown
# Your Full Name

GitHub: @your-github-username

## What I learned

One sentence about what you learned today.
```

- The `GitHub:` line must start with `@` and must be unique — no two students can claim the same username.
- The `## What I learned` heading must be present exactly as shown.

See [`TEMPLATE.md`](TEMPLATE.md) for a ready-to-copy starting point, and [`../tasks/beginner.md`](../tasks/beginner.md) Issue 1 for the exact fork → branch → commit → PR steps.
