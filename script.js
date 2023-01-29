let vector2 = { x: 0, y: 0 };
const speed = 15;

const player = document.getElementById("player");

document.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "a") {
      player.classList.remove("idle");
      player.classList.add("run");
      player.classList.remove("mirrored");
      vector2.x -= speed;
      moveLeft();
    } else if (e.key === "d") {
      player.classList.remove("idle");
      player.classList.add("run");
      player.classList.add("mirrored");
      vector2.x += speed;
      moveRight();
    }

    // updatePosition();
  },
  false
);

document.addEventListener("keyup", function (e) {
  if (e.key === "a" || e.key === "d") {
    player.classList.add("idle");
    player.classList.remove("run");
  }
});

function updatePosition() {
  player.style.transform = `translateX(${Math.round(vector2.x)}px);`;
}

function moveLeft() {
  player.style.left = parseInt(vector2.x) - speed + "px";
}

function moveRight() {
  player.style.left = parseInt(vector2.x) + speed + "px";
}
