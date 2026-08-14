function isColliding(basketBox, item) {
  return (
    item.x < basketBox.x + basketBox.width &&
    item.x + item.size > basketBox.x &&
    item.y < basketBox.y + basketBox.height &&
    item.y + item.size > basketBox.y
  );
}

if (typeof module !== "undefined") {
  module.exports = { isColliding };
}
