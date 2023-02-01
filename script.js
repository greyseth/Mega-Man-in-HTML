let vector2 = { x: 0, y: 0 };
const speed = 15;

const player = document.getElementById("player");
let gameRunning = true;

let pressA = false;
let pressD = false;

document.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "a") {
      player.classList.remove("idle");
      player.classList.add("run");
      player.classList.remove("mirrored");
      pressA = true;
    } else if (e.key === "d") {
      player.classList.remove("idle");
      player.classList.add("run");
      player.classList.add("mirrored");
      pressD = true;
    }
  },
  false
);

document.addEventListener("keyup", function (e) {
  if (e.key === "a") {
    player.classList.add("idle");
    player.classList.remove("run");
    pressA = false;
  } else if (e.key === "d") {
    player.classList.add("idle");
    player.classList.remove("run");
    pressD = false;
  }
});

function updatePosition() {
  player.style.left = `${vector2.x}px`;
}

function playerGravity() {}

window.onload = function () {
  function update() {
    if (pressA) {
      vector2.x -= speed;
    }

    if (pressD) {
      vector2.x += speed;
    }

    updatePosition();
  }

  setInterval(update, 100);
};
