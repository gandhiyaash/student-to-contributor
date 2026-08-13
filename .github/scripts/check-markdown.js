#!/usr/bin/env node
// Beginner-friendly Markdown check. No dependencies — catches the mistakes
// beginners actually make: unbalanced code fences, and files that are
// completely empty.

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "..");
const SKIP_DIRS = new Set(["node_modules", ".git", ".github"]);

function findMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      if (SKIP_DIRS.has(entry.name)) return [];
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return findMarkdownFiles(full);
      if (entry.isFile() && entry.name.endsWith(".md")) return [full];
      return [];
    });
}

const files = findMarkdownFiles(ROOT);
let hasError = false;

for (const file of files) {
  const relative = path.relative(process.cwd(), file);
  const content = fs.readFileSync(file, "utf8");
  const errors = [];

  if (content.trim().length === 0) {
    errors.push("File is empty.");
  }

  const fenceCount = (content.match(/^```/gm) || []).length;
  if (fenceCount % 2 !== 0) {
    errors.push(
      "Unbalanced code fence (```) — an opening ``` is missing its closing ```."
    );
  }

  if (errors.length > 0) {
    hasError = true;
    console.log(`FAIL ${relative}`);
    for (const e of errors) console.log(`  - ${e}`);
  } else {
    console.log(`OK   ${relative}`);
  }
}

if (hasError) {
  console.log("");
  console.log("❌ Markdown validation failed. Fix the issue(s) above and try again.");
  process.exit(1);
}

console.log("");
console.log(`✅ All ${files.length} Markdown file(s) look good.`);
