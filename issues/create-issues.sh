#!/usr/bin/env bash
# Creates the 10 workshop issues on GitHub using the GitHub CLI, skipping
# any whose title already exists (safe to re-run, never creates duplicates).
# Requires: `gh` installed and authenticated, and this repo already pushed
# to GitHub with `origin` pointing at it.
#
# Usage: bash issues/create-issues.sh

set -euo pipefail

cd "$(dirname "$0")"

REPO="$(gh repo view --json nameWithOwner --jq .nameWithOwner)"

declare -a issues=(
  "Add your contributor profile|01-add-your-contributor-profile.md|good first issue,beginner,documentation"
  "Fix a documentation typo|02-fix-a-documentation-typo.md|good first issue,beginner,documentation"
  "Add a Bitcoin learning resource|03-add-a-bitcoin-learning-resource.md|good first issue,beginner,documentation"
  "Fix the Broken Catch Mechanic|04-fix-the-broken-catch-mechanic.md|bug,enhancement"
  "Add mobile touch controls|05-add-mobile-touch-controls.md|enhancement"
  "Replace bomb-hit alert with inline feedback|06-replace-bomb-hit-alert-with-inline-feedback.md|enhancement"
  "Fix basket boundary and difficulty scaling|07-fix-basket-boundary-and-difficulty.md|advanced,enhancement"
  "Add automated tests|08-add-automated-tests.md|advanced,enhancement"
  "Improve accessibility|09-improve-accessibility.md|advanced,accessibility"
  "Fix a deliberately introduced bug|10-fix-a-deliberately-introduced-bug.md|advanced,bug"
)

existing_titles="$(gh issue list --repo "$REPO" --state all --limit 200 --json title --jq '.[].title')"

for entry in "${issues[@]}"; do
  IFS='|' read -r title file labels <<< "$entry"
  if grep -qxF "$title" <<< "$existing_titles"; then
    echo "Skipping (already exists): $title"
    continue
  fi
  echo "Creating: $title"
  gh issue create --repo "$REPO" --title "$title" --body-file "$file" --label "$labels"
done

echo "Done. Review the issues on GitHub and adjust milestones as needed."
