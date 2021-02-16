/*jshint esversion: 6 */

let playerPaddle;
let ball;
let bricks;

function setup() {
  frameRate(144);
  createCanvas(400, 900);

  let colors = createColors();
  playerPaddle = new Paddle(height - 48);
  ball = new Ball();

  bricks = createBricks(colors);
}

function createColors() {
  const colors = [];
  colors.push(color(265, 165, 0));
  colors.push(color(135, 206, 250));
  colors.push(color(147, 112, 219));
  for (let i = 0; i < 10; i++) {
    colors.push(color(random(0, 255), random(0, 255), random(0, 255)));
  }
  return colors;
}

function createBricks(colors) {
  const bricks = [];
  const rows = 10;
  const bricksPerRow = 10;
  const brickWidth = width / bricksPerRow;
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      var brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, colors[floor(random(0, colors.length))]);
      bricks.push(brick);
    }
  }
  return bricks;
}

function draw() {
  background(0);

  playerPaddle.display();
  playerPaddle.update();

  ball.update();
  ball.display();
  ball.hasHitPlayer(playerPaddle);

  for (let i = bricks.length - 1; i >= 0; i--) {
    const brick = bricks[i];
    if (brick.isColliding(ball)) {
      ball.ySpeed = -ball.ySpeed;
      bricks.splice(i, 1);
    } else {
      brick.display();
    }
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    playerPaddle.isLeft = true;
  } else if (keyCode == RIGHT_ARROW) {
    playerPaddle.isRight = true;
  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    playerPaddle.isLeft = false;
  } else if (keyCode == RIGHT_ARROW) {
    playerPaddle.isRight = false;
  }
}