# Live AI Demo Script — Add a Copy Address Button

This is the facilitator's exact sequence for the central live demo. Every prompt below can be pasted into Claude Code as-is, run inside this repository. See [`WORKSHOP.md`](../WORKSHOP.md) for how this fits into the full session timing.

The issue being solved: **"Add a Copy Address Button"** — the tip card displays a Bitcoin address, but there's no way to copy it. See the GitHub issue for full acceptance criteria, and `src/index.html` / `src/app.js` for the current (incomplete) state.

---

## Step 1 — Investigate

Open Claude Code inside the repository root and run:

```text
Explore this repository and understand how the Bitcoin address is currently displayed.

Do not modify anything.

Identify:
1. The relevant files.
2. How the current implementation works.
3. Where the new functionality should probably live.
4. Any potential edge cases.

Then explain your findings in beginner-friendly language.
```

**Teaching point:** AI can help a developer understand an unfamiliar codebase before touching it. Claude should investigate, not immediately edit — if it starts editing here, that's a signal something is wrong with the prompt or the setup.

## Step 2 — Plan

```text
Based on your investigation, propose a minimal implementation plan for the "Add a Copy Address Button" issue.

Do not modify any files yet.

Explain:
1. Which files you would change.
2. What you would change.
3. How you would handle an empty address.
4. How you would test the feature.

Keep the plan minimal and avoid unrelated changes.
```

**Teaching point:** A developer should understand the problem and approve the approach before asking AI to implement it. Read the plan out loud to the room before approving it.

## Step 3 — Implement

```text
Implement the approved plan.

Keep the change minimal and focused on the issue.

Do not modify unrelated files.

After implementation:
1. List every file changed.
2. Explain what changed in each file.
3. Explain how I can test the feature.
```

**Teaching point:** AI can act as an implementation partner — but the plan was already approved by a human before this step ran.

## Step 4 — Inspect the diff

```bash
git status
git diff
```

Then:

```text
Explain the current git diff to me file by file.

Do not modify anything.

For each change explain:
- what changed
- why it changed
- what behavior it affects
- anything I should verify manually
```

**Teaching point:** Never blindly accept AI-generated code. Read every line of `git diff` before moving on — narrate this on screen.

## Step 5 — Run and test

Open `src/index.html` in a browser (or use the workshop's preview setup) and manually verify:

- normal address → copy works, feedback shown
- empty address → graceful handling, no crash
- copy button → clicks copy the exact address text
- success feedback → appears and (ideally) disappears after a moment
- repeated clicks → no duplicate/broken feedback state
- mobile viewport → button is usable at narrow widths

**Teaching point:** Generated code is not finished software until it has been verified by running it.

## Step 6 — Debugging demonstration

Introduce a controlled, reproducible failure (facilitator note: e.g., temporarily rename the button's `id` in `index.html` so `app.js`'s `getElementById` call returns `null`, causing a clear, safe error in the console).

```text
Something failed
      ↓
Investigate
      ↓
Understand the cause
      ↓
Ask AI for possible fixes
      ↓
Choose the correct fix
      ↓
Implement
      ↓
Test again
```

```text
Investigate this failure.

Do not modify the code yet.

Explain:
1. What is failing.
2. Why it is failing.
3. What evidence supports your diagnosis.
4. The smallest safe fix.

Wait for approval before modifying anything.
```

**Teaching point:** AI is useful for debugging, not just generating code. Approve the diagnosis before letting it fix anything — narrate why you're checking the evidence first.

## After the demo

Continue into `docs/git-walkthrough.md` live: `git add`, `git commit -m "feat: add copy address button"`, push, open a PR, and let CI run on the exact change just made. This hands off directly into the student contribution phase.
