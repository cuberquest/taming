const canvas = document.body.insertBefore(document.body.appendChild(document.createElement("canvas")), document.body.childNodes[0]),
ctx = canvas.getContext("2d");
canvas.id = "game";
canvas.classList.add("abs", "no-border");

const game = {
  canvas,
  play() {
    this.clear();
    requestAnimationFrame(this.play);
    return true;
  },
  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  player: {
    id: 0,
    x: (canvas.width - 200) / 2,
    y: (canvas.height - 200) / 2,
    w: 200,
    h: 200
  },
  players: []
};

function updateSize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", updateSize);
updateSize();