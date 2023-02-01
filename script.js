let vector2 = { x: 0, y: 0 };

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

    if (e.key === "j") {
      if (pressA) {
        spawnBullet(-1);
      } else if (pressD) {
        spawnBullet(1);
      } else {
        spawnBullet(1);
      }
    }

    if (e.key === "Escape") {
      gameRunning = !gameRunning;
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

function updateBullets() {
  spawnedBullets.forEach(function (b) {
    const bullet = document.getElementById(`bl_${b.id}`);
    let converter = bullet.style.left.match(/\d/g);
    let xPos = Number(converter.join(""));

    xPos += b.direction * bulletSpeed;
    bullet.style.left = `${xPos}px`;
  });
}

window.onload = function () {
  function update() {
    if (!gameRunning) return;

    if (pressA) {
      vector2.x -= speed;
    }

    if (pressD) {
      vector2.x += speed;
    }

    updatePosition();
    updateBullets();
  }

  setInterval(update, 100);
};
