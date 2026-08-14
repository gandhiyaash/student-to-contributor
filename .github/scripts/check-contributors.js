#!/usr/bin/env node
// Validates the students/*.md one-file-per-student model:
//   1. Filenames are lowercase-kebab-case, ending in .md (README.md and
//      TEMPLATE.md are the only exceptions — they aren't student files).
//   2. Each file starts with an "# H1" heading (the student's name).
//   3. Each file has a "GitHub: @username" line.
//   4. Each file has a "## What I learned" heading.
//   5. No GitHub username appears in more than one file.
// No dependencies — plain text parsing.

const fs = require("node:fs");
const path = require("node:path");

const DIR = path.join(__dirname, "..", "..", "students");
const EXCLUDED = new Set(["README.md", "TEMPLATE.md"]);
const FILENAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*\.md$/;
const GITHUB_LINE_PATTERN = /^GitHub:\s*@([A-Za-z0-9](?:[A-Za-z0-9-]{0,37}[A-Za-z0-9])?)\s*$/m;

const files = fs
  .readdirSync(DIR, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
  .map((entry) => entry.name)
  .filter((name) => !EXCLUDED.has(name))
  .sort();

if (files.length === 0) {
  console.log("No student files yet in students/ (that's fine before the workshop starts).");
  process.exit(0);
}

const errors = [];
const usernamesByFile = new Map();

for (const file of files) {
  const relative = path.join("students", file);
  const fileErrors = [];

  if (!FILENAME_PATTERN.test(file)) {
    fileErrors.push(
      `Filename must be lowercase letters, numbers, and hyphens only (e.g. "alice-johnson.md"). Found "${file}".`
    );
  }

  const content = fs.readFileSync(path.join(DIR, file), "utf8");

  if (!/^#\s+\S/m.test(content.split("\n")[0] || "")) {
    fileErrors.push(`File must start with a "# Your Name" heading on the first line.`);
  }

  const githubMatch = content.match(GITHUB_LINE_PATTERN);
  if (!githubMatch) {
    fileErrors.push(`Missing a "GitHub: @your-username" line.`);
  }

  if (!/^##\s+What I learned\s*$/m.test(content)) {
    fileErrors.push(`Missing the "## What I learned" heading.`);
  }

  if (fileErrors.length > 0) {
    errors.push({ file: relative, problems: fileErrors });
  } else {
    usernamesByFile.set(relative, githubMatch[1].toLowerCase());
  }
}

if (errors.length > 0) {
  console.log("❌ Validation failed");
  console.log("");
  for (const { file, problems } of errors) {
    console.log(`${file}:`);
    for (const p of problems) console.log(`  - ${p}`);
  }
  console.log("");
  console.log("Expected format — see students/TEMPLATE.md:");
  console.log("  # Your Full Name");
  console.log("");
  console.log("  GitHub: @your-github-username");
  console.log("");
  console.log("  ## What I learned");
  console.log("");
  console.log("  One sentence about what you learned today.");
  process.exit(1);
}

const seenBy = new Map();
const duplicates = new Map();
for (const [file, username] of usernamesByFile) {
  if (seenBy.has(username)) {
    if (!duplicates.has(username)) duplicates.set(username, [seenBy.get(username)]);
    duplicates.get(username).push(file);
  } else {
    seenBy.set(username, file);
  }
}

if (duplicates.size > 0) {
  console.log("❌ Validation failed");
  console.log("");
  console.log("Duplicate GitHub username detected:");
  for (const [username, filesUsingIt] of duplicates) {
    console.log(`@${username}  (used in ${filesUsingIt.join(", ")})`);
  }
  console.log("");
  console.log(
    "Each student must use a unique GitHub username in their own file. If you already have a file, don't create a second one."
  );
  process.exit(1);
}

for (const file of files) console.log(`OK   students/${file}`);
console.log("");
console.log(`✅ Validation passed — ${usernamesByFile.size} student file(s) valid.`);
