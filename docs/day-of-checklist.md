# Facilitator Day-Of Checklist

## Before students arrive

- [ ] GitHub repo is public: [github.com/gandhiyaash/student-to-contributor](https://github.com/gandhiyaash/student-to-contributor)
- [ ] `main` is the default branch
- [ ] All 10 Issues created (`bash issues/create-issues.sh` — safe to re-run, skips duplicates)
- [ ] Labels exist: `good first issue`, `beginner`, `documentation`, `bug`, `enhancement`, `advanced`, `accessibility`
- [ ] CI verified green on `main` (`gh run list --limit 1`)
- [ ] Facilitator's `gh` CLI authenticated (`gh auth status`)
- [ ] Claude Code working and authenticated
- [ ] Projector/screen tested — font size large enough to read from the back of the room
- [ ] Coin Catcher confirmed working when the collision fix is applied (test locally, then revert)
- [ ] Broken catch mechanic verified on `main` — start the game, confirm score never increases
- [ ] Intentional CI failure verified reproducible (see [`WORKSHOP.md`](../WORKSHOP.md) 130–138 min block)
- [ ] `bug/broken-restart-button` branch exists and pushed (`git branch -a`)
- [ ] Know that you (the repo owner) cannot click "Fork" on your own repo during the live demo — GitHub blocks forking into the same account. Either point at the button without clicking, or pre-fork the repo under a secondary GitHub account beforehand so you have a real fork to show on screen.
- [ ] Backup: a local clone of the repo on the facilitator's machine, independent of Wi-Fi
- [ ] Offline materials available (`offline/`, `OFFLINE.md`) — confirm they open with no internet
- [ ] Workshop URL ready to share (the GitHub repo link)
- [ ] QR code generated pointing at the repo URL, ready to display
- [ ] Student setup URL ready to share: link directly to [`SETUP.md`](../SETUP.md)

**Important — not a setting you can turn off:** GitHub requires a maintainer to manually approve the first workflow run from every new contributor on a public repo. With ~80 students, expect to click "Approve and run workflows" up to ~80 times during the session. Keep the repo's **Actions** tab open in a pinned browser tab throughout the workshop so these are easy to spot and approve quickly.

## During workshop

- [ ] Keep `README.md` open (student-facing entry point)
- [ ] Keep `WORKSHOP.md` open (your script)
- [ ] Keep a terminal open, in your own clone of the upstream repo
- [ ] Keep the GitHub repository open in a browser tab (Issues + Actions tabs pinned)
- [ ] Keep Claude Code ready for the live demo
- [ ] **Do not reveal the collision-detection fix early** — let students try the game and hit the wall themselves first
- [ ] Let students experience the CI-approval-required gate on their own first PR before explaining it — it's a good teaching moment, not just friction
- [ ] Show the diff on screen at each AI step — narrate what you're checking for
- [ ] Show CI actually running (green and, once, red) — don't just describe it
- [ ] Review one real student PR live and leave an actual comment

## After workshop

- [ ] CI is not a merge queue — the exercise is complete for anyone with a green check on their PR, whether or not it ever merges. Merging isn't the goal here; don't feel obligated to review/merge everything (or anything).
- [ ] Reset `main` and `bug/broken-restart-button` back to the pre-workshop broken state for the next cohort (see the "reset repository to pre-workshop state" commit for the pattern)
- [ ] Add the session's real contributors to `CONTRIBUTORS.md` (pull the list from `gh pr list --state all`, not commit history — see the commit that first added this file for the exact approach)
- [ ] Thank contributors, ideally by name, in a closing comment or follow-up message
- [ ] Point students toward real open-source projects with `good first issue` labels to try next
- [ ] Encourage everyone to make one more contribution within the week, while the workflow is still fresh
