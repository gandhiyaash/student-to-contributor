#!/usr/bin/env bash
# Creates the `bug/broken-generate-button` branch used by Issue 10
# ("Fix a deliberately introduced bug"). Run this once, from `main`,
# before the workshop, then push the branch.
#
# The bug: src/index.html's button id is changed so it no longer matches
# the id app.js queries with getElementById, so `generateBtn` is null and
# the click handler is never attached. Clicking the button silently does
# nothing (open DevTools console on page load to see the TypeError).
#
# Usage: bash .github/scripts/introduce-bug.sh

set -euo pipefail

cd "$(dirname "$0")/../.."

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree not clean — commit or stash first." >&2
  exit 1
fi

git switch main
git switch -c bug/broken-generate-button

sed -i.bak 's/id="generate-btn"/id="generate-button"/' src/index.html
rm -f src/index.html.bak

git add src/index.html
git commit -m "chore: rename button id (regression — breaks generate button)"

echo ""
echo "Created branch bug/broken-generate-button with a reproducible bug."
echo "Push it with: git push -u origin bug/broken-generate-button"
echo "Then switch back with: git switch main"
