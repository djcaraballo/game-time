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
    let collidingObject = object.find(pathUnit => {
      return (
        this.x < pathUnit.x + pathUnit.width && 
        this.x + this.width > pathUnit.x &&
        this.y < pathUnit.y + pathUnit.height &&
        this.y + this.height > pathUnit.y
      ) 
  })  
    if(collidingObject) {
      return true
    } else {
      return false
    }
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

  isCollidingWithOpponentPath(player1Path, player2Path) {
    console.log(player1Path)
    let slicedPathP1 = player1Path.slice(20)
    let slicedPathP2 = player2Path.slice(20)
    if(this.isCollidingWith(slicedPathP2)){
      return true
    } else if(this.isCollidingWith(slicedPathP1)){
      return true
    }
    } 


  isCollidingWithOwnPath(trails){
    let slicedPath = trails.slice(20) 
    // bluePath.forEach(this.path => Object.values(pathUnit[0])
    // console.log('collidingWithBlue: ', this.isCollidingWith(slicedBluePath));
    // console.log('collidingWithOrange: ', this.isCollidingWith(slicedOrangePath));
    if(this.isCollidingWith(slicedPath)) {
      return true
    } 
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