const test = require("node:test");
const assert = require("node:assert/strict");

const { isColliding } = require("../src/game-logic.js");

test("detects overlapping boxes", () => {
  const basket = { x: 100, y: 300, width: 70, height: 18 };
  const item = { x: 120, y: 290, size: 28 };

  assert.equal(isColliding(basket, item), true);
});

test("detects non-overlapping boxes", () => {
  const basket = { x: 100, y: 300, width: 70, height: 18 };
  const item = { x: 250, y: 100, size: 28 };

  assert.equal(isColliding(basket, item), false);
});

test("edge-touching boxes do not count as collision", () => {
  const basket = { x: 100, y: 300, width: 70, height: 18 };
  const item = { x: 170, y: 300, size: 28 };

  assert.equal(isColliding(basket, item), false);
});
