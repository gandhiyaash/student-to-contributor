# Setup — Do This Before the Workshop

Please complete this before arriving. It takes about 10 minutes and saves everyone time on the day.

## You will need

- A laptop and charger
- A GitHub account ([sign up here](https://github.com/signup) if you don't have one)
- Git installed
- A code editor (VS Code, or anything you're comfortable with)
- A browser

**Git is mandatory.** AI is optional. Bitcoin knowledge is not required. Git knowledge is not required. GitHub knowledge is not required. This workshop teaches all of that from zero.

## Install Git

### macOS

Check if you already have it:

```bash
git --version
```

If that fails, macOS will usually offer to install the Xcode Command Line Tools, which include Git:

```bash
xcode-select --install
```

Or install Git directly via [git-scm.com](https://git-scm.com/download/mac).

### Windows

Download and install **Git for Windows**: [git-scm.com/download/win](https://git-scm.com/download/win). This also installs **Git Bash**, a terminal you can use for every command in this workshop. Accept the default options during install unless you know you want something different.

### Linux

**Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install git
```

**Fedora:**

```bash
sudo dnf install git
```

### Verify, on any OS

```bash
git --version
```

You should see something like `git version 2.43.0`.

## Configure your Git identity

Git needs to know who you are before you can commit — this is local to your machine, not related to your GitHub login:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the same email as your GitHub account if you want your commits linked to your GitHub profile (not required for this workshop, but a good habit).

## Create a GitHub account

If you don't already have one: [github.com/signup](https://github.com/signup). Remember your username — you'll add it to `students/contributors.md` on the day.

## AI access (optional)

Claude Code is used by the facilitator for the live demonstration, and is **not required** for you. If you'd like AI assistance for your own contribution, any of these work:

- [Claude Code](https://claude.com/claude-code) — the tool used in the live demo.
- [GitHub Copilot Free](https://github.com/features/copilot) — built into many editors.
- Any other AI coding assistant you already use.
- **None at all** — every task in [`tasks/`](tasks/) is fully completable without AI. See [`docs/troubleshooting.md`](docs/troubleshooting.md) if you want to understand what the AI steps looked like without using AI yourself — that's what [`offline/`](offline/) is for.

This workshop teaches AI-assisted engineering + Git + GitHub + open-source contribution as a set of transferable skills — not one specific AI product.

## That's it

You're ready. See you at the workshop — bring this laptop, in this state, and you're set.
