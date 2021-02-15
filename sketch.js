/*jshint esversion: 6 */

let playerPaddle;
let ball;

function setup() {
  frameRate(144);
  createCanvas(400, 900);
  playerPaddle = new Paddle(height - 48);
  ball = new Ball();
}

function draw() {
  background(0);

  playerPaddle.display();
  playerPaddle.update();

  ball.update();
  ball.display();
  ball.hasHitPlayer(playerPaddle);
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