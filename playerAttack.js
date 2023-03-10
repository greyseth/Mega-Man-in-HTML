let lastBullet = 0;
let spawnedBullets = [];
const maxBulletPos = 5000;

function spawnBullet(direction) {
  document
    .getElementById("main")
    .insertAdjacentHTML(
      "beforeend",
      `<img class="bullet" src="./sprites/bullet.png" id="bl_${lastBullet}" style="left: ${vector2.x}px"/>`
    );
  spawnedBullets.push({ id: lastBullet, direction: direction });
  lastBullet++;
}
