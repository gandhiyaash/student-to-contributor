// Coin Catcher — a tiny educational game.
// Not connected to the real Bitcoin network. Coins are just the theme.

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const statusEl = document.getElementById("status");
const startOverlay = document.getElementById("start-overlay");
const startBtn = document.getElementById("start-btn");
const gameOverOverlay = document.getElementById("game-over-overlay");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

const BASKET_WIDTH = 70;
const BASKET_HEIGHT = 18;
const BASKET_SPEED = 6;
const ITEM_SIZE = 28;
const SPAWN_INTERVAL_MS = 800;
const BOMB_CHANCE = 0.2;

let basket, items, score, lives, running, keys, lastSpawn, animationId, touchX = null, hitFlashUntil = 0;

function resetState() {
  basket = { x: canvas.width / 2 - BASKET_WIDTH / 2, y: canvas.height - BASKET_HEIGHT - 10 };
  items = [];
  score = 0;
  lives = 3;
  running = false;
  keys = {};
  lastSpawn = 0;
  touchX = null;
  hitFlashUntil = 0;
  updateHud();
}

function updateHud() {
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  
  // Update canvas aria-label for screen readers
  canvas.setAttribute("aria-label", `Coin Catcher game. Score: ${score}, Lives: ${lives}`);
}

function spawnItem() {
  const isBomb = Math.random() < BOMB_CHANCE;
  items.push({
    x: Math.random() * (canvas.width - ITEM_SIZE),
    y: -ITEM_SIZE,
    size: ITEM_SIZE,
    speed: 2 + Math.random() * 1.5,
    type: isBomb ? "bomb" : "coin",
  });
}

// Should return true when the basket and the falling item's boxes overlap.
function isColliding(basketBox, item) {
  return (
    item.x < basketBox.x + BASKET_WIDTH &&
    item.x + item.size > basketBox.x &&
    item.y + item.size > basketBox.y &&
    item.y < basketBox.y + BASKET_HEIGHT
  );
}

function update(timestamp) {
  if (!running) return;

  if (timestamp - lastSpawn > SPAWN_INTERVAL_MS) {
    spawnItem();
    lastSpawn = timestamp;
  }

  if (keys.ArrowLeft) basket.x -= BASKET_SPEED;
  if (keys.ArrowRight) basket.x += BASKET_SPEED;

  // Mobile touch controls: position basket at touch location
  if (touchX !== null) {
    basket.x = touchX - BASKET_WIDTH / 2;
  }

  // Keep basket within canvas boundaries
  basket.x = Math.max(0, Math.min(basket.x, canvas.width - BASKET_WIDTH));

  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];
    item.y += item.speed;

    if (isColliding(basket, item)) {
      items.splice(i, 1);
      if (item.type === "coin") {
        score += 10;
        statusEl.textContent = `Coin caught! Score: ${score}`;
      } else {
        lives -= 1;
        hitFlashUntil = timestamp + 500; // Flash for 500ms
        statusEl.textContent = `Bomb hit! ${lives} ${lives === 1 ? "life" : "lives"} left`;
      }
      updateHud();
      if (lives <= 0) {
        endGame();
        return;
      }
      continue;
    }

    if (item.y > canvas.height) {
      items.splice(i, 1);
    }
  }

  draw(timestamp);
  animationId = requestAnimationFrame(update);
}

function draw(timestamp = 0) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Flash red briefly when bomb is hit
  if (timestamp < hitFlashUntil) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.fillStyle = "#f7931a";
  ctx.fillRect(basket.x, basket.y, BASKET_WIDTH, BASKET_HEIGHT);

  ctx.font = `${ITEM_SIZE}px serif`;
  for (const item of items) {
    ctx.fillText(item.type === "coin" ? "🪙" : "💣", item.x, item.y + item.size);
  }

  // Show "BOMB!" feedback when hit
  if (timestamp < hitFlashUntil) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "center";
    ctx.fillText("BOMB!", canvas.width / 2, canvas.height / 2 - 40);
    ctx.textAlign = "left";
  }
}

function endGame() {
  running = false;
  cancelAnimationFrame(animationId);
  finalScoreEl.textContent = score;
  statusEl.textContent = `Game Over! Final score: ${score}`;
  gameOverOverlay.hidden = false;
}

function startGame() {
  resetState();
  running = true;
  startOverlay.hidden = true;
  gameOverOverlay.hidden = true;
  lastSpawn = performance.now();
  animationId = requestAnimationFrame(update);
}

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Mobile touch controls
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  touchX = touch.clientX - rect.left;
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  touchX = touch.clientX - rect.left;
});

canvas.addEventListener("touchend", (e) => {
  e.preventDefault();
  touchX = null;
});

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

resetState();
draw();
