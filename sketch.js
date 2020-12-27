/*jshint esversion: 6 */

let x = 4;
let y = 4;

let vx = 1;
let vy = 2;

let ax = 0;
let ay = 0;

function setup() {
  createCanvas(500, 500);
  fill(0);
}

function draw() {
  background(240, 248, 255);
  ballMove();
  ellipse(x, y, 30, 30);
  rect(mouseX, 400, 100, 12);
}

function ballMove() {
  ax = accelerationX;
  ay = accelerationY;

  vx = vx + ay;
  vy = vy + ax;
  y = y + vy;
  x = x + vx;

  if (x < 15) {
    x = 15;
    vx = -vx;
  }
  if (y < 15) {
    y = 15;
    vy = -vy;
  }
  if (x > width - 15) {
    x = width - 15;
    vx = -vx;
  }
  if (y > height - 15) {
    y = height - 15;
    vy = -vy;
  }
}