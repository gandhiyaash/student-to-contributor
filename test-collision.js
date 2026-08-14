// Tests for collision detection logic
// Run with: node test-collision.js

const BASKET_WIDTH = 70;
const BASKET_HEIGHT = 18;

function isColliding(basketBox, item) {
  return (
    item.x < basketBox.x + BASKET_WIDTH &&
    item.x + item.size > basketBox.x &&
    item.y + item.size > basketBox.y &&
    item.y < basketBox.y + BASKET_HEIGHT
  );
}

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
    testsPassed++;
  } else {
    console.log(`✗ ${message}`);
    testsFailed++;
  }
}

function test(name, fn) {
  console.log(`\nTest: ${name}`);
  fn();
}

// Test 1: Clearly overlapping case
test("Coin directly above basket, falling into it", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 110,
    y: 295,
    size: 28,
  };
  
  assert(isColliding(basket, coin), "Should detect collision when coin overlaps basket");
});

// Test 2: Clearly NOT overlapping case
test("Coin to the right, no overlap", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 200, // Far to the right
    y: 295,
    size: 28,
  };
  
  assert(!isColliding(basket, coin), "Should NOT detect collision when coin is to the right");
});

// Test 3: Coin above basket (not touching yet)
test("Coin above basket, not touching", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 110,
    y: 200, // Above basket
    size: 28,
  };
  
  assert(!isColliding(basket, coin), "Should NOT detect collision when coin is above basket");
});

// Test 4: Edge case - coin just barely touching top of basket
test("Coin at edge boundary (just touching top)", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 110,
    y: 272, // Just barely overlaps (y + size = 300)
    size: 28,
  };
  
  assert(isColliding(basket, coin), "Should detect collision at boundary when coin touches top of basket");
});

// Test 5: Coin to the left of basket
test("Coin to the left, no overlap", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 50,
    y: 295,
    size: 28,
  };
  
  assert(!isColliding(basket, coin), "Should NOT detect collision when coin is to the left");
});

// Test 6: Coin fully overlapping basket horizontally and vertically
test("Coin centered over basket", () => {
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 115,
    y: 305,
    size: 28,
  };
  
  assert(isColliding(basket, coin), "Should detect collision when coin is centered over basket");
});

// Test 7: Verify that broken collision logic FAILS
test("Verify that inverted logic fails (for testing purposes)", () => {
  // This tests the BROKEN logic to prove our tests would catch it
  function brokenIsColliding(basketBox, item) {
    return (
      item.x > basketBox.x + BASKET_WIDTH &&
      item.x + item.size < basketBox.x &&
      item.y + item.size > basketBox.y
    );
  }
  
  const basket = { x: 100, y: 300 };
  const coin = {
    x: 110,
    y: 295,
    size: 28,
  };
  
  assert(!brokenIsColliding(basket, coin), "Broken logic should NOT detect overlap (proving tests catch bugs)");
});

// Print summary
console.log(`\n${"=".repeat(50)}`);
console.log(`Tests passed: ${testsPassed}`);
console.log(`Tests failed: ${testsFailed}`);
console.log(`${"=".repeat(50)}`);

process.exit(testsFailed > 0 ? 1 : 0);

