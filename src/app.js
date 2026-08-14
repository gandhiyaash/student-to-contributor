// Coin Catcher — a tiny educational game.
// Not connected to the real Bitcoin network. Coins are just the theme.

const canvas = typeof document !== "undefined" ? document.getElementById("game-canvas") : null;
const ctx = canvas ? canvas.getContext("2d") : null;

const scoreEl = typeof document !== "undefined" ? document.getElementById("score") : null;
const livesEl = typeof document !== "undefined" ? document.getElementById("lives") : null;
const startOverlay = typeof document !== "undefined" ? document.getElementById("start-overlay") : null;
const startBtn = typeof document !== "undefined" ? document.getElementById("start-btn") : null;
const gameOverOverlay = typeof document !== "undefined" ? document.getElementById("game-over-overlay") : null;
const finalScoreEl = typeof document !== "undefined" ? document.getElementById("final-score") : null;
const restartBtn = typeof document !== "undefined" ? document.getElementById("restart-btn") : null;
const statusEl = typeof document !== "undefined" ? document.getElementById("status") : null;

const BASKET_WIDTH = 70;
const BASKET_HEIGHT = 18;
const BASKET_SPEED = 6;
const ITEM_SIZE = 28;
const SPAWN_INTERVAL_MS = 800;
const BOMB_CHANCE = 0.2;

let basket, items, score, lives, running, keys, lastSpawn, animationId, hitFlashUntil;
let isDragging = false;
let dragOffsetX = 0;

function resetState() {
  basket = { x: canvas ? canvas.width / 2 - BASKET_WIDTH / 2 : 205, y: canvas ? canvas.height - BASKET_HEIGHT - 10 : 332 };
  items = [];
  score = 0;
  lives = 3;
  running = false;
  keys = {};
  lastSpawn = 0;
  hitFlashUntil = 0;
  updateHud();
}

function announceStatus(msg) {
  if (statusEl) {
    statusEl.textContent = msg;
  }
}

function updateHud() {
  if (scoreEl) scoreEl.textContent = score;
  if (livesEl) livesEl.textContent = lives;
  if (canvas) {
    canvas.setAttribute("aria-label", `Coin Catcher game canvas. Score: ${score}, Lives: ${lives}`);
  }
}

function spawnItem() {
  if (!canvas) return;
  const isBomb = Math.random() < BOMB_CHANCE;
  // Gradual difficulty scaling based on current score
  const speedBonus = Math.min(3.5, Math.floor(score / 30) * 0.3);
  const baseSpeed = 2 + Math.random() * 1.5;
  items.push({
    x: Math.random() * (canvas.width - ITEM_SIZE),
    y: -ITEM_SIZE,
    size: ITEM_SIZE,
    speed: baseSpeed + speedBonus,
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

  // Dynamic spawn interval speeds up as score increases
  const currentSpawnInterval = Math.max(450, SPAWN_INTERVAL_MS - Math.floor(score / 30) * 40);

  if (timestamp - lastSpawn > currentSpawnInterval) {
    spawnItem();
    lastSpawn = timestamp;
  }

  if (keys.ArrowLeft || keys.KeyA || keys.a) basket.x -= BASKET_SPEED;
  if (keys.ArrowRight || keys.KeyD || keys.d) basket.x += BASKET_SPEED;

  // Clamp basket position strictly to canvas boundaries
  if (canvas) {
    basket.x = Math.max(0, Math.min(canvas.width - BASKET_WIDTH, basket.x));
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
        announceStatus(`Coin caught! Score: ${score}.`);
      } else {
        lives -= 1;
        hitFlashUntil = timestamp + 350;
        announceStatus(`Bomb hit! ${lives} ${lives === 1 ? "life" : "lives"} remaining.`);
      }
      updateHud();
      if (lives <= 0) {
        endGame();
        return;
      }
      continue;
    }

    if (canvas && item.y > canvas.height) {
      items.splice(i, 1);
    }
  }

  draw(timestamp);
  animationId = requestAnimationFrame(update);
}

function draw(timestamp) {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Brief non-blocking red flash visual cue on bomb hit
  if (timestamp && timestamp < hitFlashUntil) {
    ctx.fillStyle = "rgba(231, 76, 60, 0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Draw basket
  ctx.fillStyle = "#f7931a";
  ctx.fillRect(basket.x, basket.y, BASKET_WIDTH, BASKET_HEIGHT);

  // Draw items
  ctx.font = `${ITEM_SIZE}px serif`;
  for (const item of items) {
    ctx.fillText(item.type === "coin" ? "🪙" : "💣", item.x, item.y + item.size);
  }
}

function endGame() {
  running = false;
  if (animationId) cancelAnimationFrame(animationId);
  if (finalScoreEl) finalScoreEl.textContent = score;
  if (gameOverOverlay) gameOverOverlay.hidden = false;
  announceStatus(`Game Over! Final score: ${score}.`);
}

function startGame() {
  if (animationId) cancelAnimationFrame(animationId);
  resetState();
  running = true;
  if (startOverlay) startOverlay.hidden = true;
  if (gameOverOverlay) gameOverOverlay.hidden = true;
  announceStatus("Game started! Catch coins and avoid bombs.");
  lastSpawn = performance.now();
  animationId = requestAnimationFrame(update);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getPointerX(event) {
  return event.clientX - canvas.getBoundingClientRect().left;
}

function startDrag(clientX) {
  isDragging = true;
  dragOffsetX = basket.x - clientX;
}

function moveDrag(clientX) {
  if (!isDragging) return;
  basket.x = clamp(clientX + dragOffsetX, 0, canvas.width - BASKET_WIDTH);
}

function endDrag() {
  isDragging = false;
}

if (typeof window !== "undefined") {
  window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    keys[e.code] = true;
  });
  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
    keys[e.code] = false;
  });

  if (canvas) {
    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startDrag(getPointerX(e.touches[0]));
    }, { passive: false });

    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      moveDrag(getPointerX(e.touches[0]));
    }, { passive: false });

    canvas.addEventListener("touchend", endDrag);
    canvas.addEventListener("touchcancel", endDrag);

    canvas.addEventListener("mousedown", (e) => {
      startDrag(getPointerX(e));
    });

    window.addEventListener("mousemove", (e) => {
      moveDrag(getPointerX(e));
    });

    window.addEventListener("mouseup", endDrag);
  }
}

if (startBtn) startBtn.addEventListener("click", startGame);
if (restartBtn) restartBtn.addEventListener("click", startGame);

resetState();
draw(0);

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    isColliding,
    BASKET_WIDTH,
    BASKET_HEIGHT,
    ITEM_SIZE,
  };
}
