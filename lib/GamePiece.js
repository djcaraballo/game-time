module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  //Collision detection with game pieces
  isCollidingWith(object) {
    // console.l og(blueTrail)
    // game.blueTrail.pop()
    // game.orangeTrail.pop()
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  //Collision detection with wall
  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth ||
      this.y < 0 || 
      this.y + this.height > canvasHeight
    );
  }

  isCollidingWithPath(trails){
    const bluePath = this.path.filter(pathUnit => pathUnit.color === 'cornflowerblue');
    const orangePath = this.path.filter(pathUnit => pathUnit.color === 'orange');
    bluePath.pop();
    orangePath.pop();
  }

  //draws another block onto the canvas
  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  //changes x and y coordinates of piece
  move() {
    // console.log(this.path);
    // this.path.push(pathUnit);

    //when piece moves, x coordinate is equal to x coordinate + direction * velocity
    this.x += this.dx * this.dxv;
    //when piece moves, y coordinate is equal to y coordinate + direction * velocity
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

};