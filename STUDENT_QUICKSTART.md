# Quick Start

One screen, exact commands. Full explanations: [`docs/fork-workflow.md`](docs/fork-workflow.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`docs/troubleshooting.md`](docs/troubleshooting.md).

1. **Create/log into GitHub.** [github.com/signup](https://github.com/signup) if needed.
2. **Install Git.** `git --version` — if that fails, see [`SETUP.md`](SETUP.md).
3. **Fork the repository.** Open [github.com/gandhiyaash/student-to-contributor](https://github.com/gandhiyaash/student-to-contributor), click **Fork**.
4. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/student-to-contributor.git
   cd student-to-contributor
   ```
5. **Create a branch:**
   ```bash
   git switch -c students/<your-github-username>
   ```
6. **Pick an issue.** [`tasks/beginner.md`](tasks/beginner.md) · [`tasks/intermediate.md`](tasks/intermediate.md) · [`tasks/advanced.md`](tasks/advanced.md)
7. **Make your change.**
8. **Run tests / validation (optional but recommended):**
   ```bash
   node .github/scripts/check-js-syntax.js
   node .github/scripts/check-html.js
   node .github/scripts/check-markdown.js
   node .github/scripts/check-contributors.js
   ```
9. **Check your diff:**
   ```bash
   git status
   git diff
   ```
10. **Commit:**
    ```bash
    git add .
    git commit -m "docs: add my contributor profile"
    ```
11. **Push to YOUR fork:**
    ```bash
    git push -u origin students/<your-github-username>
    ```
12. **Open a Pull Request.** Click the "Compare & pull request" banner GitHub shows on your fork. Confirm it targets `gandhiyaash/student-to-contributor`'s `main`. Fill in the template.
13. **Wait for CI.** Checks run automatically. First PR ever? A maintainer has to manually approve the workflow run once — that's normal, not an error.
14. **Respond to review.** Read the comments. Reply in the thread.
15. **Push fixes:**
    ```bash
    git add .
    git commit -m "fix: address review feedback"
    git push
    ```
    (Same branch — it updates your existing PR automatically. No need to open a new one.)

**You never push directly to `gandhiyaash/student-to-contributor`.** `origin` is always your fork.
