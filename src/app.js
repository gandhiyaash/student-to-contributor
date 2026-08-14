document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("score");
  const livesEl = document.getElementById("lives");
  const startOverlay = document.getElementById("start-overlay");
  const gameOverOverlay = document.getElementById("game-over-overlay");
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const finalScoreEl = document.getElementById("final-score");
  const statusEl = document.getElementById("status");

  // Game Configuration
  const CANVAS_WIDTH = canvas.width;
  const CANVAS_HEIGHT = canvas.height;

  let isPlaying = false;
  let score = 0;
  let lives = 3;
  let animationFrameId = null;
  let lastSpawnTime = 0;
  const spawnInterval = 800; // Milliseconds between items

  // Basket State
  const basket = {
    width: 80,
    height: 18,
    x: CANVAS_WIDTH / 2 - 40,
    y: CANVAS_HEIGHT - 30,
    speed: 7
  };

  // Keyboard Controls State
  const keys = {
    left: false,
    right: false
  };

  // Falling Items Array (Coins & Bombs)
  let items = [];

  // FIXED: Keyboard Listeners (Corrected keys.right assignment)
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      keys.left = true;
    }
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      keys.right = true; // Fixed: was incorrectly set to false
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      keys.left = false;
    }
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      keys.right = false;
    }
  });

  // Touch & Mouse Support
  canvas.addEventListener("mousemove", (e) => {
    if (!isPlaying) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    basket.x = mouseX - basket.width / 2;
    clampBasketBounds();
  });

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", startGame);

  function startGame() {
    score = 0;
    lives = 3;
    items = [];
    scoreEl.textContent = score;
    livesEl.textContent = lives;
    statusEl.textContent = "Catch the coins, avoid the bombs!";

    basket.x = CANVAS_WIDTH / 2 - basket.width / 2;

    startOverlay.hidden = true;
    gameOverOverlay.hidden = true;
    isPlaying = true;
    lastSpawnTime = performance.now();

    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    gameLoop(performance.now());
  }

  function gameOver() {
    isPlaying = false;
    finalScoreEl.textContent = score;
    gameOverOverlay.hidden = false;
    statusEl.textContent = "Game Over! Better luck next time.";
  }

  // Strict Boundary Enforcement
  function clampBasketBounds() {
    if (basket.x < 0) {
      basket.x = 0;
    }
    if (basket.x + basket.width > CANVAS_WIDTH) {
      basket.x = CANVAS_WIDTH - basket.width;
    }
  }

  function updateBasket() {
    if (keys.left) basket.x -= basket.speed;
    if (keys.right) basket.x += basket.speed;
    clampBasketBounds();
  }

  function spawnItem() {
    const isBomb = Math.random() < 0.25; // 25% chance for a bomb
    const radius = 16;
    items.push({
      x: Math.random() * (CANVAS_WIDTH - radius * 2) + radius,
      y: -radius,
      radius: radius,
      speed: 2.5 + Math.random() * 2,
      type: isBomb ? "bomb" : "coin"
    });
  }

  // Axis-Aligned Bounding Box (AABB) + Circle Collision
  function checkCollision(item, basket) {
    const closestX = Math.max(basket.x, Math.min(item.x, basket.x + basket.width));
    const closestY = Math.max(basket.y, Math.min(item.y, basket.y + basket.height));

    const distanceX = item.x - closestX;
    const distanceY = item.y - closestY;

    return (distanceX * distanceX + distanceY * distanceY) < (item.radius * item.radius);
  }

  function updateItems(currentTime) {
    if (currentTime - lastSpawnTime > spawnInterval) {
      spawnItem();
      lastSpawnTime = currentTime;
    }

    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      item.y += item.speed;

      // Handle Catch / Collision with Basket
      if (checkCollision(item, basket)) {
        if (item.type === "coin") {
          score += 10;
          scoreEl.textContent = score;
        } else if (item.type === "bomb") {
          lives -= 1;
          livesEl.textContent = lives;
          if (lives <= 0) {
            gameOver();
            return;
          }
        }
        items.splice(i, 1);
        continue;
      }

      // Remove item if off the bottom of the canvas
      if (item.y - item.radius > CANVAS_HEIGHT) {
        items.splice(i, 1);
      }
    }
  }

  // Render Routines
  function drawBasket() {
    ctx.fillStyle = "#8B4513";
    ctx.beginPath();
    ctx.roundRect(basket.x, basket.y, basket.width, basket.height, 6);
    ctx.fill();

    ctx.fillStyle = "#A0522D";
    ctx.fillRect(basket.x - 2, basket.y, basket.width + 4, 4);
  }

  function drawItems() {
    items.forEach((item) => {
      ctx.save();
      ctx.translate(item.x, item.y);

      if (item.type === "coin") {
        ctx.fillStyle = "#FFD700";
        ctx.beginPath();
        ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#DAA520";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#B8860B";
        ctx.font = "bold 14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("🪙", 0, 1);
      } else {
        ctx.fillStyle = "#222222";
        ctx.beginPath();
        ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FF4500";
        ctx.font = "bold 14px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("💣", 0, 1);
      }

      ctx.restore();
    });
  }

  function render() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    drawBasket();
    drawItems();
  }

  function gameLoop(timestamp) {
    if (!isPlaying) return;

    updateBasket();
    updateItems(timestamp);
    render();

    animationFrameId = requestAnimationFrame(gameLoop);
  }
});