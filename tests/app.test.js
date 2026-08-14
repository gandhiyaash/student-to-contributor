const assert = require("node:assert");
const { isColliding, BASKET_WIDTH, BASKET_HEIGHT } = require("../src/app.js");

console.log("Running Coin Catcher tests...\n");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(err.message);
    failed++;
  }
}

const basket = { x: 100, y: 300 };
const itemSize = 28;

// 1. Clearly overlapping case
test("isColliding returns true when item overlaps basket center", () => {
  const item = { x: 110, y: 295, size: itemSize };
  assert.strictEqual(isColliding(basket, item), true);
});

// 2. Clearly not overlapping case
test("isColliding returns false when item is far away from basket", () => {
  const item = { x: 300, y: 100, size: itemSize };
  assert.strictEqual(isColliding(basket, item), false);
});

// 3. Edge/boundary cases
test("isColliding returns false when item is outside basket right boundary", () => {
  const item = { x: basket.x + BASKET_WIDTH, y: basket.y, size: itemSize };
  assert.strictEqual(isColliding(basket, item), false);
});

test("isColliding returns false when item is outside basket left boundary", () => {
  const item = { x: basket.x - itemSize, y: basket.y, size: itemSize };
  assert.strictEqual(isColliding(basket, item), false);
});

test("isColliding returns true when item's edge is inside basket boundary", () => {
  const item = { x: basket.x + BASKET_WIDTH - 1, y: basket.y + 1, size: itemSize };
  assert.strictEqual(isColliding(basket, item), true);
});

console.log(`\nTest results: ${passed} passed, ${failed} failed.`);

if (failed > 0) {
  process.exit(1);
}
