/*jshint esversion: 6 */

class Brick {

  constructor(location, width, height, colour) {
    this.location = location;
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.points = 1;
  }

  display() {
    fill(this.colour);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

  isColliding(ball) {
    if(ball.y - ball.r <= this.location.y + this.height &&
      ball.y + ball.r >= this.location.y &&
      ball.x + ball.r >= this.location.x &&
      ball.x - ball.r <= this.location.y + this.width) {
        return true;
      }
  }
}