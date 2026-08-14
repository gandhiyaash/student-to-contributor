# Live AI Demo Script — Fix the Broken Catch Mechanic

This is the facilitator's exact sequence for the central live demo. Every prompt below can be pasted into Claude Code as-is, run inside this repository. See [`WORKSHOP.md`](../WORKSHOP.md) for how this fits into the full session timing.

The issue being solved: **"Fix the Broken Catch Mechanic"** — the game runs, coins and bombs fall, the basket moves, but nothing ever registers: score stays at 0, lives never drop. See the GitHub issue for full acceptance criteria, and `src/app.js`'s `isColliding` function for the current (broken) state.

---

## Step 1 — Investigate

Open Claude Code inside the repository root and run:

```text
Explore this repository and understand how catching a falling coin or bomb is currently supposed to work.

Do not modify anything.

Identify:
1. The relevant files.
2. How the current implementation works.
3. Where the bug most likely is.
4. Any potential edge cases.

Then explain your findings in beginner-friendly language.
```

**Teaching point:** AI can help a developer understand an unfamiliar codebase before touching it. Claude should investigate, not immediately edit — if it starts editing here, that's a signal something is wrong with the prompt or the setup.

## Step 2 — Plan

```text
Based on your investigation, propose a minimal implementation plan for the "Fix the Broken Catch Mechanic" issue.

Do not modify any files yet.

Explain:
1. Which files you would change.
2. What exactly is wrong with the current logic.
3. What the corrected logic should be.
4. How you would test the fix.

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
2. Explain what changed and why.
3. Explain how I can test the fix.
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

- click "Start Game," basket moves with ← →
- catch a falling coin → score increases by 10
- get hit by a bomb → lives decrease by 1, feedback appears
- let a coin/bomb fall past the basket without touching it → no score change, no crash
- lose all 3 lives → Game Over screen appears with the correct final score
- click "Play Again" → game resets and plays normally again
- mobile viewport → layout still looks reasonable (touch controls are a separate issue, not required here)

**Teaching point:** Generated code is not finished software until it has been verified by running it.

## Step 6 — Debugging demonstration

Introduce a controlled, reproducible failure (facilitator note: e.g., temporarily rename `BASKET_WIDTH` to `BASKET_W` in one place but not the others in `src/app.js`, causing a clear, safe `ReferenceError` in the console).

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

Continue into `docs/git-walkthrough.md` live: `git add`, `git commit -m "fix: correct basket/item collision detection"`, push, open a PR, and let CI run on the exact change just made. This hands off directly into the student contribution phase.
