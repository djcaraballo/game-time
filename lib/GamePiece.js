module.exports = class GamePiece {
  constructor(x, y, height, width, color, dx) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  //Collision detection with game pieces
  isCollidingWith(object) {  
    let collidingObject = object.find(pathUnit => {
      return (
        this.x < pathUnit.x + pathUnit.width && 
        this.x + this.width > pathUnit.x &&
        this.y < pathUnit.y + pathUnit.height &&
        this.y + this.height > pathUnit.y
      ); 
    });  
    if (collidingObject) {
      return true;
    } else {
      return false;
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
    let slicedPathP1 = player1Path.slice(20);
    let slicedPathP2 = player2Path.slice(20);

    if (this.isCollidingWith(slicedPathP2)) {
      return true;
      //increment opponents score
    } else if (this.isCollidingWith(slicedPathP1)) {
      return true;
      //increment opponents score
    }
  } 


  isCollidingWithOwnPath(trails) {
    let slicedPath = trails.slice(20); 
    
    if (this.isCollidingWith(slicedPath)) {
      return true;
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
    //when piece moves, x coordinate is equal to x coordinate + direction * velocity
    this.x += this.dx * this.dxv;
    //when piece moves, y coordinate is equal to y coordinate + direction * velocity
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    if (this.preventBackward(direction)) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }

  preventBackward(direction) {
    let previous = {
      dx: direction.dx,
      dy: direction.dy,
    };
    if ((this.dx == 1 && previous.dx == -1) ||
      (this.dx == -1 && previous.dx == 1)) {
      return false;
    }
    if ((this.dy == 1 && previous.dy == -1) || (this.dy == -1 && previous.dy == 1)) {
      return false;
    } else {
      return true;
    }
  }
};