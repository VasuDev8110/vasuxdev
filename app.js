const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#0e035c",
  "#0e035c",
  "#0e035c",
  "#24066b",
  "#24066b",
  "#24066b",
  "#370a7b",
  "#370a7b",
  "#370a7b",
  "#4a0f8a",
  "#4a0f8a",
  "#4a0f8a",
  "#5d149a",
  "#5d149a",
  "#5d149a",
  "#7118a9",
  "#7118a9",
  "#7118a9",
  "#861cb8",
  "#861cb8",
  "#861cb8",
  "#9b1fc7",
  "#9b1fc7",
  "#9b1fc7",
  "#b022d5",
  "#b022d5",
  "#b022d5",
  "#c725e4",
  "#c725e4",
  "#c725e4",
  "#de27f2",
  "#de27f2",
  "#de27f2",
  "#f529ff",
  "#f529ff",
  "#f529ff",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
