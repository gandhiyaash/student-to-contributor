#!/usr/bin/env node
// Beginner-friendly HTML sanity check. No dependencies — does a basic
// tag-balance check plus a doctype check. This is not a full HTML validator,
// it just catches the mistakes beginners actually make (unclosed tags,
// missing doctype).

const fs = require("node:fs");
const path = require("node:path");

const HTML_FILE = path.join(__dirname, "..", "..", "src", "index.html");

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

function checkFile(file) {
  const relative = path.relative(process.cwd(), file);
  const content = fs.readFileSync(file, "utf8");
  const errors = [];

  if (!/^\s*<!DOCTYPE html>/i.test(content)) {
    errors.push("Missing <!DOCTYPE html> at the top of the file.");
  }

  const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*?(\/?)>/g;
  const stack = [];
  let match;

  while ((match = tagRegex.exec(content)) !== null) {
    const [full, tagName, selfClosingSlash] = match;
    const lower = tagName.toLowerCase();
    const isClosing = full.startsWith("</");
    const isSelfClosing = selfClosingSlash === "/" || VOID_ELEMENTS.has(lower);

    if (isClosing) {
      const last = stack.pop();
      if (!last || last !== lower) {
        errors.push(
          `Mismatched tag: found </${tagName}> but expected </${last || "(nothing open)"}>.`
        );
      }
    } else if (!isSelfClosing) {
      stack.push(lower);
    }
  }

  if (stack.length > 0) {
    errors.push(`Unclosed tag(s): <${stack.join(">, <")}>`);
  }

  return { relative, errors };
}

const { relative, errors } = checkFile(HTML_FILE);

if (errors.length > 0) {
  console.log(`FAIL ${relative}`);
  console.log("");
  console.log("❌ HTML validation failed");
  console.log("");
  for (const e of errors) console.log(`- ${e}`);
  console.log("");
  console.log("Fix the issue(s) above, save the file, and try again.");
  process.exit(1);
}

console.log(`OK   ${relative}`);
console.log("");
console.log("✅ HTML looks well-formed.");
