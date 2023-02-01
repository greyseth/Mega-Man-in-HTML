let vector2 = { x: 0, y: 0 };
let velocity;
let gravity = -9.18;
let jumpHeight = 500;

const player = document.getElementById("player");
let gameRunning = true;

let pressA = false;
let pressD = false;
let pressK = false;

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
      player.classList.add("shoot");

      if (pressA) {
        spawnBullet(-1);
      } else if (pressD) {
        spawnBullet(1);
      } else {
        spawnBullet(1);
      }
    }

    if (e.key === "k") {
      pressK = true;
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
  }
  if (e.key === "d") {
    player.classList.add("idle");
    player.classList.remove("run");
    pressD = false;
  }
  if (e.key === "k") {
    pressK = false;
  }
});

function updatePosition() {
  vector2.y = velocity;

  player.style.left = `${vector2.x}px`;
  player.style.bottom = `${vector2.y}px`;
}

function updateBullets() {
  spawnedBullets.forEach(function (b) {
    const bullet = document.getElementById(`bl_${b.id}`);
    let converter = bullet.style.left.match(/\d/g);
    let xPos = Number(converter.join(""));

    xPos += b.direction * bulletSpeed;
    bullet.style.left = `${xPos}px`;

    //---Bullet removal when it gets too far away. I'll deal with it later---
    //-----------------------------------------------------------------------
    // console.log(xPos);
    // if (xPos >= maxBulletPos || xPos * -1 <= maxBulletPos * 1) {
    //   // spawnedBullets.splice(spawnedBullets.findIndex((f) => f.id === b.id));
    //   // bullet.remove();
    // }
  });
}

//Update function
window.onload = function () {
  function update() {
    if (!gameRunning) return;

    if (pressA) {
      vector2.x -= speed;
    }

    if (pressD) {
      vector2.x += speed;
    }

    if (pressK) {
      velocity = Math.sqrt(jumpHeight * -2 * gravity);
    }

    velocity += gravity;
    if (velocity < 0) velocity = 0;

    updatePosition();
    updateBullets();
  }

  setInterval(update, 100);
};
