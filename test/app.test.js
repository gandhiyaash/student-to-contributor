const assert = require("node:assert");
const { isColliding, BASKET_WIDTH, BASKET_HEIGHT, ITEM_SIZE } = require("../src/app.js");

console.log("Running Coin Catcher tests...");

const basket = { x: 100, y: 300 };

// 1. Clearly overlapping case
const overlappingItem = { x: 110, y: 295, size: ITEM_SIZE };
assert.strictEqual(
  isColliding(basket, overlappingItem),
  true,
  "Should detect collision when basket and item overlap"
);

// 2. Clearly non-overlapping case (item far away to the right)
const farItemRight = { x: 300, y: 300, size: ITEM_SIZE };
assert.strictEqual(
  isColliding(basket, farItemRight),
  false,
  "Should not detect collision when item is far to the right"
);

// 3. Clearly non-overlapping case (item far above)
const farItemAbove = { x: 110, y: 100, size: ITEM_SIZE };
assert.strictEqual(
  isColliding(basket, farItemAbove),
  false,
  "Should not detect collision when item is far above"
);

// 4. Edge boundary case (item touching edge)
const edgeItem = { x: basket.x + BASKET_WIDTH - 5, y: basket.y + 5, size: ITEM_SIZE };
assert.strictEqual(
  isColliding(basket, edgeItem),
  true,
  "Should detect collision on partial edge overlap"
);

console.log("✅ All tests passed successfully!");
