const BASKET_WIDTH = 70;
const BASKET_HEIGHT = 18;
const BASKET_SPEED = 6;
const ITEM_SIZE = 28;
const SPAWN_INTERVAL_MS = 800;
const BOMB_CHANCE = 0.2;

let canvas, ctx, scoreEl, livesEl, startOverlay, startBtn, gameOverOverlay, finalScoreEl, restartBtn;

if (typeof document !== "undefined") {
  canvas = document.getElementById("game-canvas");
  ctx = canvas ? canvas.getContext("2d") : null;

  scoreEl = document.getElementById("score");
  livesEl = document.getElementById("lives");
  startOverlay = document.getElementById("start-overlay");
  startBtn = document.getElementById("start-btn");
  gameOverOverlay = document.getElementById("game-over-overlay");
  finalScoreEl = document.getElementById("final-score");
  restartBtn = document.getElementById("restart-btn");
}

let basket, items, score, lives, running, keys, lastSpawn, animationId;

function resetState() {
  const canvasWidth = canvas ? canvas.width : 480;
  const canvasHeight = canvas ? canvas.height : 360;
  basket = { x: canvasWidth / 2 - BASKET_WIDTH / 2, y: canvasHeight - BASKET_HEIGHT - 10 };
  items = [];
  score = 0;
  lives = 3;
  running = false;
  keys = {};
  lastSpawn = 0;
  updateHud();
}

function updateHud() {
  if (scoreEl) scoreEl.textContent = score;
  if (livesEl) livesEl.textContent = lives;
}

function getDifficultyFactor() {
  return Math.min(2.5, 1 + score / 200);
}

function spawnItem() {
  const canvasWidth = canvas ? canvas.width : 480;
  const isBomb = Math.random() < BOMB_CHANCE;
  const difficultyFactor = getDifficultyFactor();
  items.push({
    x: Math.random() * (canvasWidth - ITEM_SIZE),
    y: -ITEM_SIZE,
    size: ITEM_SIZE,
    speed: (2 + Math.random() * 1.5) * difficultyFactor,
    type: isBomb ? "bomb" : "coin",
  });
}

// Should return true when the basket and the falling item's boxes overlap.
function isColliding(basketBox, item) {
  return (
    item.x < basketBox.x + BASKET_WIDTH &&
    item.x + item.size > basketBox.x &&
    item.y < basketBox.y + BASKET_HEIGHT &&
    item.y + item.size > basketBox.y
  );
}

function update(timestamp) {
  if (!running) return;

  const currentSpawnInterval = Math.max(350, SPAWN_INTERVAL_MS / getDifficultyFactor());
  if (timestamp - lastSpawn > currentSpawnInterval) {
    spawnItem();
    lastSpawn = timestamp;
  }

  if (keys.ArrowLeft) basket.x -= BASKET_SPEED;
  if (keys.ArrowRight) basket.x += BASKET_SPEED;

  const canvasWidth = canvas ? canvas.width : 480;
  basket.x = Math.max(0, Math.min(canvasWidth - BASKET_WIDTH, basket.x));

  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];
    item.y += item.speed;

    if (isColliding(basket, item)) {
      items.splice(i, 1);
      if (item.type === "coin") {
        score += 10;
      } else {
        lives -= 1;
        if (typeof alert !== "undefined") alert("Ouch! You hit a bomb.");
      }
      updateHud();
      if (lives <= 0) {
        endGame();
        return;
      }
      continue;
    }

    const canvasHeight = canvas ? canvas.height : 360;
    if (item.y > canvasHeight) {
      items.splice(i, 1);
    }
  }

  draw();
  if (typeof requestAnimationFrame !== "undefined") {
    animationId = requestAnimationFrame(update);
  }
}

function draw() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#f7931a";
  ctx.fillRect(basket.x, basket.y, BASKET_WIDTH, BASKET_HEIGHT);

  ctx.font = `${ITEM_SIZE}px serif`;
  for (const item of items) {
    ctx.fillText(item.type === "coin" ? "🪙" : "💣", item.x, item.y + item.size);
  }
}

function endGame() {
  running = false;
  if (typeof cancelAnimationFrame !== "undefined") {
    cancelAnimationFrame(animationId);
  }
  if (finalScoreEl) finalScoreEl.textContent = score;
  if (gameOverOverlay) gameOverOverlay.hidden = false;
}

function startGame() {
  resetState();
  running = true;
  if (startOverlay) startOverlay.hidden = true;
  if (gameOverOverlay) gameOverOverlay.hidden = true;
  lastSpawn = typeof performance !== "undefined" ? performance.now() : Date.now();
  if (typeof requestAnimationFrame !== "undefined") {
    animationId = requestAnimationFrame(update);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
  });
  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

  if (startBtn) startBtn.addEventListener("click", startGame);
  if (restartBtn) restartBtn.addEventListener("click", startGame);

  resetState();
  draw();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { isColliding, BASKET_WIDTH, BASKET_HEIGHT, getDifficultyFactor };
}
