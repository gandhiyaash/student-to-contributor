#!/usr/bin/env bash
# Bulk-creates the 10 workshop issues on GitHub using the GitHub CLI.
# Requires: `gh` installed and authenticated, and this repo already pushed
# to GitHub with `origin` pointing at it.
#
# Usage: bash issues/create-issues.sh

set -euo pipefail

cd "$(dirname "$0")"

declare -a issues=(
  "Add yourself to contributors|01-add-yourself-to-contributors.md|good first issue"
  "Fix a documentation typo|02-fix-a-documentation-typo.md|good first issue"
  "Add a Bitcoin learning resource|03-add-a-bitcoin-learning-resource.md|good first issue"
  "Fix the Broken Catch Mechanic|04-fix-the-broken-catch-mechanic.md|bug"
  "Add mobile touch controls|05-add-mobile-touch-controls.md|enhancement"
  "Replace bomb-hit alert with inline feedback|06-replace-bomb-hit-alert-with-inline-feedback.md|enhancement"
  "Fix basket boundary and difficulty scaling|07-fix-basket-boundary-and-difficulty.md|enhancement"
  "Add automated tests|08-add-automated-tests.md|enhancement"
  "Improve accessibility|09-improve-accessibility.md|enhancement"
  "Fix a deliberately introduced bug|10-fix-a-deliberately-introduced-bug.md|bug"
)

for entry in "${issues[@]}"; do
  IFS='|' read -r title file label <<< "$entry"
  echo "Creating: $title"
  gh issue create --title "$title" --body-file "$file" --label "$label"
done

echo "Done. Review the created issues on GitHub and adjust labels/milestones as needed."
