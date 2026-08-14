# WORKSHOP.md — Facilitator Script

Project this file. Follow it top to bottom. Total runtime: **2.5 hours (150 min)** for ~80 students.

Every section has:
🎤 **SAY** — what to say, near-verbatim.
🖥️ **SHOW** — what to have on screen.
💻 **RUN** — exact terminal commands.
🤖 **ASK CLAUDE** — exact AI prompt (facilitator's Claude Code session).
👨‍🎓 **STUDENTS DO** — what students do right now.
🧠 **TAKEAWAY** — the one idea to land.
✅ **CHECKPOINT** — how you confirm the room is ready to move on.

---

## 0–5 min — Mission

🎤 **SAY**
"By the end of this session, I don't want you to be able to tell me what a Pull Request is. I want you to have opened one."

🖥️ **SHOW**
```text
Issue
 ↓
AI
 ↓
Code
 ↓
Git
 ↓
GitHub
 ↓
PR
 ↓
CI
 ↓
Review
 ↓
Merge
```

🎤 **SAY**
"That's the whole shape of the workshop. Every box on that chart, you will personally go through today, at least once. First, a 2-minute mechanical step: fork this repository and clone your fork. Don't worry about why yet — we'll get to that. Just do it."

🖥️ **SHOW**
```text
https://github.com/gandhiyaash/student-to-contributor
```
Click **Fork** live on screen so students see exactly what it looks like.

👨‍🎓 **STUDENTS DO**
1. Open `https://github.com/gandhiyaash/student-to-contributor` and click **Fork**.
2. Clone their own fork: `git clone https://github.com/<their-username>/student-to-contributor.git`
3. `cd student-to-contributor` and open [`README.md`](README.md).

🧠 **TAKEAWAY**
Today is about doing the workflow, not memorizing definitions — you'll understand *why* you just forked once we reach the GitHub section.

✅ **CHECKPOINT**
Ask: "Everyone has forked, cloned their own fork, and has this README open in that folder?" — scan the room for stuck hands before moving on. Point anyone stuck at [`STUDENT_QUICKSTART.md`](STUDENT_QUICKSTART.md) or [`docs/troubleshooting.md`](docs/troubleshooting.md).

---

## 5–15 min — Understand the Project

🎤 **SAY**
"We're going to work on a tiny browser game called Coin Catcher. It is not a real wallet — it never touches the Bitcoin network, never handles real money. Bitcoin is just the visual theme: catch falling coins, dodge bombs."

🖥️ **SHOW**
Open `src/index.html` in a browser (drag the file in, or use a live server). Click "Start Game," move the basket with ← →, try to catch a coin.

🎤 **SAY**
"Two minutes on Bitcoin, because it's the context, not the point of today." Summarize [`docs/bitcoin.md`](docs/bitcoin.md): traditional money routes through a bank's database; Bitcoin routes through a network of independent computers sharing one transaction history. That's it — that's the whole mental model needed for today.

🖥️ **SHOW**
Try to actually catch a coin. Nothing happens — score stays at 0 no matter what. Let that land for a second before explaining.

🎤 **SAY**
"The game is broken. Not metaphorically — literally, right now, you cannot catch a single coin. That's our issue for today."

👨‍🎓 **STUDENTS DO**
Open `src/index.html` in their own browser, try playing it, confirm they're just as stuck as you are.

🧠 **TAKEAWAY**
Small, broken codebases are exactly where real contribution work happens — not "build me an app," but "understand this app well enough to fix the one thing that's wrong."

✅ **CHECKPOINT**
Ask: "Has everyone confirmed the game is broken on their own screen — no score, no matter what you catch?"

---

## 15–35 min — AI-Assisted Development (Live Demo)

Full script: [`docs/ai-live-demo.md`](docs/ai-live-demo.md). Run it live here, using your own Claude Code session.

🎤 **SAY**
"Watch how I use AI here. I am not saying 'build me a game.' The game already exists — it's just broken. I'm using AI the way an engineer actually would inside a codebase they didn't write, to find and fix one specific bug."

### Step 1 — Investigate

🤖 **ASK CLAUDE**
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

🧠 **TAKEAWAY**
AI can help a developer understand unfamiliar code before touching it.

### Step 2 — Plan

🤖 **ASK CLAUDE**
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

🎤 **SAY**
"I'm reading this plan before I approve it. This is the step people skip, and it's the most important one."

🧠 **TAKEAWAY**
Approve the approach before asking AI to implement it — every time.

### Step 3 — Implement

🤖 **ASK CLAUDE**
```text
Implement the approved plan.

Keep the change minimal and focused on the issue.

Do not modify unrelated files.

After implementation:
1. List every file changed.
2. Explain what changed in each file.
3. Explain how I can test the feature.
```

### Step 4 — Inspect the diff

💻 **RUN**
```bash
git status
git diff
```

🤖 **ASK CLAUDE**
```text
Explain the current git diff to me file by file.

Do not modify anything.

For each change explain:
- what changed
- why it changed
- what behavior it affects
- anything I should verify manually
```

🎤 **SAY**
"Never blindly accept AI-generated code. I am reading every line on this screen before I test it."

🧠 **TAKEAWAY**
The diff is the real artifact. The prompt was just a means to get there.

### Step 5 — Run and test

🖥️ **SHOW**
Reload `src/index.html`, click "Start Game," actually catch a coin — score should go up. Test: catching several coins, taking a bomb hit, missing items entirely, losing all 3 lives, clicking "Play Again."

🧠 **TAKEAWAY**
Generated code is not finished software until it's been run.

### Step 6 — Debugging demonstration

🎤 **SAY**
"I'm going to break this on purpose, so you see what debugging with AI actually looks like."

💻 **RUN**
Rename `BASKET_WIDTH` to `BASKET_W` in one place (but not the others) in `src/app.js`, reload, open the browser console, show the error.

🤖 **ASK CLAUDE**
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

🎤 **SAY**
"Approve the diagnosis before letting it touch anything." Approve, let it fix, reload, retest.

🧠 **TAKEAWAY**
AI is useful for debugging, not just generating code — but the human still confirms the diagnosis before applying a fix.

✅ **CHECKPOINT**
Ask: "Show of hands — who followed each of those six steps?" If many hands are down, briefly recap the shape (investigate → plan → implement → inspect → test → debug) before moving on.

---

## 35–55 min — Git

Full walkthrough: [`docs/git-walkthrough.md`](docs/git-walkthrough.md).

🎤 **SAY**
"Everything I just showed you produced real file changes. Now we save them properly, using Git."

💻 **RUN**
```bash
git status
```
🎤 **SAY** "Git is telling us exactly what changed since the last save point."

💻 **RUN**
```bash
git diff
```
🎤 **SAY** "This is the same diff Claude explained a minute ago — now you're reading it with Git directly."

💻 **RUN**
```bash
git add .
git commit -m "fix: correct basket/item collision detection"
git log --oneline
```

🎤 **SAY**
"Three rooms: your working directory is where you edit, staging is where `git add` puts things ready to save, and a commit is a permanent, named snapshot. `git log` is your timeline."

💻 **RUN**
```bash
git branch
git switch -c fix/catch-mechanic
```

🖥️ **SHOW**
```text
main
 |
 └── fix/catch-mechanic
```

🎤 **SAY**
"This is how 80 of you can work in the same repository at once without colliding — everyone gets their own branch."

👨‍🎓 **STUDENTS DO**
Run `git status`, `git diff` (on any file they touch), `git branch` themselves, right now, on their own clone — no changes needed yet, just get comfortable with the commands.

🧠 **TAKEAWAY**
Working directory → staging → commit → history. Branches isolate work.

✅ **CHECKPOINT**
Ask: "Everyone run `git branch` and see just `main` listed?" Fix any stragglers before continuing.

---

## 55–65 min — GitHub

Full explanation: [`docs/git-vs-github.md`](docs/git-vs-github.md).

🎤 **SAY**
"Git and GitHub are not the same thing. Git is the tool on your laptop. GitHub is a website that hosts your repository and adds collaboration on top — Issues, Pull Requests, code review, CI."

🖥️ **SHOW**
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

🎤 **SAY**
"Everything we just did — status, diff, add, commit, branch — none of it touched the internet. Only `push` and `pull` do."

🖥️ **SHOW**
The GitHub repository page: the Issues tab (show 2-3 real issues), the branches dropdown, an existing closed PR if one exists, or the PR template preview. Then click **Fork** live, and explain: "None of you have write access to this repository — nobody does, that's normal. You fork it, work in your own copy, and propose changes back with a Pull Request. That's how every real open-source project works."

🧠 **TAKEAWAY**
Git = version control on your computer. GitHub = a hosting and collaboration platform for Git repositories. A fork is your own copy of the whole repository; you contribute back to the original via Pull Request, never by pushing directly to it.

✅ **CHECKPOINT**
Ask: "Has everyone forked the repository and can see `<your-username>/student-to-contributor` under their own GitHub account?"

---

## 65–120 min — Student Contribution

🎤 **SAY**
"You already forked and cloned at the start — if that somehow didn't happen, do it now: [`docs/fork-workflow.md`](docs/fork-workflow.md) Steps 1–3. Otherwise, pick one: beginner, intermediate, or advanced. Beginner if this is your first time with Git — genuinely, that's the right choice, not a lesser one."

🖥️ **SHOW**
[`tasks/beginner.md`](tasks/beginner.md), [`tasks/intermediate.md`](tasks/intermediate.md), [`tasks/advanced.md`](tasks/advanced.md) — scroll through each briefly. Also point at [`STUDENT_QUICKSTART.md`](STUDENT_QUICKSTART.md) as the reference to keep open.

👨‍🎓 **STUDENTS DO**
```text
Issue
 ↓
Branch
 ↓
Change
 ↓
Commit
 ↓
Push (to your fork)
 ↓
PR (targets the original repo)
```
Pick a task, branch, make the change, test it, commit, push to your fork, open a PR against `gandhiyaash/student-to-contributor`'s `main` using the PR template. AI optional — `docs/claude-code-prompts.md` has ready prompts for anyone with access; everyone else follows the plain steps in their task file.

🎤 **SAY** (roaming while students work)
"If you're stuck, check `docs/troubleshooting.md` first — SYMPTOM, CAUSE, FIX format, it covers almost everything that goes wrong today. If your PR shows no CI activity at all, that's expected on your very first PR — flag me, I need to manually approve the workflow run once per new contributor."

🧠 **TAKEAWAY**
This is the same loop as the live demo, just with your hands on the keyboard instead of watching.

✅ **CHECKPOINT**
Walk the room. By minute ~110, confirm most students have at least an open PR (even if CI hasn't passed yet) before moving to the review moment.

---

## 120–130 min — Review Moment (Human)

🎤 **SAY**
"A Pull Request is a conversation between engineers, not an exam submission. I'm going to pick one of your PRs and review it live."

🖥️ **SHOW**
Pick one student's PR. Open the "Files changed" tab.

🎤 **ASK THE ROOM**
"Would you merge this? Why or why not?" Take 2-3 answers.

🎤 **SAY** — walk through: correctness, scope (does it stay focused on the issue?), readability, tests, CI status, docs. Leave one real, specific review comment on the PR. Ask the student to respond. Then approve.

🧠 **TAKEAWAY**
Review is about the code and the scope, not a grade on the person.

✅ **CHECKPOINT**
The selected student has responded to your comment, in the PR thread, before you move on.

---

## 130–138 min — CI Moment (Intentional Failure)

Reference: [`offline/sample-ci-failure.md`](offline/sample-ci-failure.md) and [`offline/sample-ci-success.md`](offline/sample-ci-success.md).

🎤 **SAY**
"Let's break CI on purpose so you know exactly what a failure looks like and how unscary it is to fix."

💻 **RUN** (on a scratch branch in your own clone of the upstream repo — you have write access as the maintainer; don't do this on a student's real PR)
```bash
git switch -c demo/ci-failure
```
Create a new file `students/demo-conflict.md` using the template, but set its `GitHub:` line to an `@username` that's already used in some other already-merged file under `students/` (pick any real one on screen). Commit, push, open a PR.

🖥️ **SHOW**
```text
❌ validate / contributors-format — Failed
```
Click into the log:
```text
❌ Validation failed

Duplicate GitHub username detected:
@<the-reused-username>  (used in students/<original-file>.md, students/demo-conflict.md)
```

🎤 **SAY**
"Read the error. It tells you exactly what's wrong, and which files are involved." Fix the duplicate — change the username in `students/demo-conflict.md` back to something unique (or delete the demo file entirely) — commit, push.

🖥️ **SHOW**
```text
✅ validate / contributors-format — Passed
```

Close/delete this demo PR and branch afterward so it doesn't linger in the repo.

🧠 **TAKEAWAY**
```text
PR → CI → ❌ Failed → Read logs → Understand error → Fix → Commit → Push → CI → ✅ Passed
```
A red CI check is routine, not a crisis.

✅ **CHECKPOINT**
Ask if anyone has hit a real (non-demo) CI failure on their own PR — help them apply the same loop.

---

## 138–145 min — AI Review

Full explanation: [`docs/ai-pr-review.md`](docs/ai-pr-review.md).

🤖 **ASK CLAUDE** (against the same PR reviewed live earlier, or the collision-fix implementation)
```text
Review the current changes as if you were an open-source maintainer.

Look for:
- correctness problems
- unnecessary changes
- bugs
- missing tests
- accessibility issues
- unclear code
- anything that could prevent the Pull Request from being merged

Do not modify the code.

Give me a prioritized review.
```

🎤 **SAY**
"Now I decide, out loud, which of these points are real." Go through 2-3 points from the output: accept one, reject one, explain why for each.

🧠 **TAKEAWAY**
AI can assist with review. Humans remain responsible for engineering judgment — accepting everything an AI reviewer says is exactly as wrong as ignoring it entirely.

✅ **CHECKPOINT**
None needed — this is a short demonstration block.

---

## 145–150 min — Merge and Close

🎤 **SAY**
"Let's merge at least one real student contribution, live, right now."

🖥️ **SHOW**
Merge the reviewed PR from the Review Moment (or another ready one). Show the merge commit landing in `main`'s history.

🎤 **SAY** (closing line)
"You didn't learn open source by watching someone contribute. You learned it by contributing."

👨‍🎓 **STUDENTS DO**
Anyone who hasn't merged yet: keep pushing fixes after the session — CI and review still work the same way with no facilitator in the room. Point them back to `docs/troubleshooting.md` and `OFFLINE.md` for later, unassisted work.

🧠 **TAKEAWAY**
The workflow you just practiced is identical to contributing to any real open-source project.

✅ **CHECKPOINT**
Count merged PRs and opened-but-unmerged PRs before ending — merged ones are done; open ones are homework using the same repo.

---

## Facilitator notes

- Keep a spare terminal/browser tab open on `docs/troubleshooting.md` — you'll link students to it constantly during the 65–120 min block.
- The CI-failure demo (130–138 min) must run on a throwaway branch, never a real student's PR.
- If Claude Code is unavailable at demo time, narrate the exact prompts and expected outputs from [`offline/ai-investigation-example.md`](offline/ai-investigation-example.md), [`offline/ai-plan-example.md`](offline/ai-plan-example.md), and [`offline/ai-implementation-example.md`](offline/ai-implementation-example.md) instead — the shape of the lesson doesn't change.
