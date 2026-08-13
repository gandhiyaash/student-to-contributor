# AI-Assisted Development, Realistically

## The bad version (don't do this)

```text
BAD:

Prompt
 ↓
Generate
 ↓
Ship
```

Type a request, accept whatever comes out, push it. This works for toy demos and fails constantly on real codebases: it ignores existing conventions, misses edge cases, and nobody involved actually understands what shipped.

## The realistic version (what this workshop demonstrates)

```text
REALISTIC:

Problem
 ↓
Context
 ↓
AI assistance
 ↓
Human judgment
 ↓
Implementation
 ↓
Verification
 ↓
Iteration
 ↓
Delivery
```

The difference is not the tool — it's that a human stays in the loop at every step that requires judgment: deciding the plan is right, reading the diff, running the app, deciding the fix is correct.

The full loop, as it plays out in this workshop:

```text
Understand
    ↓
Ask AI
    ↓
Inspect
    ↓
Run
    ↓
Test
    ↓
Debug
    ↓
Review
    ↓
Understand again
```

Notice "Understand" appears twice — once before you ask AI anything (so you can judge its answer), and once after (because implementing the change teaches you something the plan didn't).

## What AI is good for here

- **Codebase explorer** — "where does X live, how does it currently work" is a search-and-summarize task AI does quickly and well.
- **Planner** — turning a vague issue into a concrete list of files-to-change, before any code is written.
- **Implementation partner** — writing the actual diff, once a plan is agreed.
- **Debugger** — given an error and evidence, proposing likely root causes and fixes.
- **Test assistant** — suggesting edge cases you might not have thought to test.
- **Reviewer** — a second set of eyes on a diff before a human reviewer sees it.
- **Documentation assistant** — drafting explanations, README updates, comments.

## What AI does not replace

- **Requirements understanding** — deciding *what* should be built is still a human call.
- **Testing** — AI can suggest tests; a human has to actually run the app and confirm it works.
- **Code review** — a human is accountable for what gets merged, regardless of who typed it.
- **Debugging** — AI can hypothesize; you confirm the hypothesis is actually true.
- **Communication** — writing a PR description that helps a reviewer, responding to feedback, is a human skill.
- **Engineering judgment** — "is this the right scope for this PR" is not something to fully delegate.

## Where this shows up today

The facilitator will demonstrate this exact loop live in [`docs/ai-live-demo.md`](ai-live-demo.md), on the real "Add a Copy Address Button" issue in this repository. If you have AI access yourself, [`docs/claude-code-prompts.md`](claude-code-prompts.md) has ready-to-use prompts for your own contribution. If you don't have AI access, none of this is required — see [`tasks/`](../tasks/) for the plain human workflow.
