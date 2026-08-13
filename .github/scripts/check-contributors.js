#!/usr/bin/env node
// Validates students/contributors.md:
//   1. Every table row has exactly 3 columns (Name | GitHub | Contribution).
//   2. The GitHub column starts with "@".
//   3. No GitHub username appears more than once.
// No dependencies — plain text parsing.

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.join(__dirname, "..", "..", "students", "contributors.md");
const content = fs.readFileSync(FILE, "utf8");
const relative = path.relative(process.cwd(), FILE);

const lines = content.split("\n");
const rows = lines.filter(
  (line) => line.trim().startsWith("|") && !/^\|\s*-+\s*\|/.test(line.trim())
);

// Drop the header row ("| Name | GitHub | Contribution |").
const dataRows = rows.filter((line) => !/\|\s*name\s*\|/i.test(line));

const formatErrors = [];
const usernames = [];

for (const row of dataRows) {
  const trimmedCells = row
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());

  if (trimmedCells.length !== 3) {
    formatErrors.push(`Row does not have exactly 3 columns: "${row.trim()}"`);
    continue;
  }

  const [, github] = trimmedCells;

  if (!github.startsWith("@")) {
    formatErrors.push(
      `GitHub column must start with "@" — found "${github}" in row: "${row.trim()}"`
    );
    continue;
  }

  usernames.push(github.toLowerCase());
}

const seen = new Set();
const duplicates = new Set();
for (const u of usernames) {
  if (seen.has(u)) duplicates.add(u);
  seen.add(u);
}

if (formatErrors.length > 0) {
  console.log(`FAIL ${relative}`);
  console.log("");
  console.log("❌ Validation failed");
  console.log("");
  console.log("Table format problem(s):");
  for (const e of formatErrors) console.log(`- ${e}`);
  console.log("");
  console.log("Expected format: | Name | @github-username | Contribution |");
  process.exit(1);
}

if (duplicates.size > 0) {
  console.log(`FAIL ${relative}`);
  console.log("");
  console.log("❌ Validation failed");
  console.log("");
  console.log("Duplicate GitHub username detected:");
  for (const d of duplicates) console.log(d);
  console.log("");
  console.log(
    "Each contributor must use a unique GitHub username. If this is your username and you already have a row, remove the duplicate row instead of adding a new one."
  );
  process.exit(1);
}

console.log(`OK   ${relative}`);
console.log("");
console.log(`✅ Validation passed — ${usernames.length} contributor row(s) valid.`);
