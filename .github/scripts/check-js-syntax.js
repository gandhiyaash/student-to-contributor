#!/usr/bin/env node
// Beginner-friendly JS syntax check. No dependencies — uses Node's built-in
// `--check` flag, which parses a file without running it.

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const SRC_DIR = path.join(__dirname, "..", "..", "src");

function findJsFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return findJsFiles(full);
      if (entry.isFile() && entry.name.endsWith(".js")) return [full];
      return [];
    });
}

const files = findJsFiles(SRC_DIR);

if (files.length === 0) {
  console.log("No .js files found in src/ — nothing to check.");
  process.exit(0);
}

let hasError = false;

for (const file of files) {
  const relative = path.relative(process.cwd(), file);
  try {
    execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    console.log(`OK   ${relative}`);
  } catch (err) {
    hasError = true;
    console.log(`FAIL ${relative}`);
    console.log("");
    console.log("❌ JavaScript syntax error");
    console.log("");
    console.log(err.stderr ? err.stderr.toString() : err.message);
  }
}

if (hasError) {
  console.log("");
  console.log("Fix the syntax error(s) above, save the file, and try again.");
  process.exit(1);
}

console.log("");
console.log("✅ All JavaScript files parsed successfully.");
