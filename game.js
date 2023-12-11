const canvas = document.body.insertBefore(document.body.appendChild(document.createElement("canvas")), document.body.childNodes[0]),
ctx = canvas.getContext("2d");

function updateSize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
addEventListener("resize", updateSize);
updateSize();