//index.js

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const start = document.querySelector('.start-btn');

//starts the game and displays players on the gameboard
start.addEventListener('click', gameLoop);

//gameLoop is called over and over to draw each frame
function gameLoop () {

  if (game.isOver()) {
    console.log('Game Over');

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPressP1(e);
  game.handleKeyPressP2(e); 
}

/////////////GAME.JS

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    //game blocks array
    this.blocks = [
      new Block(100, 200, 10, 10, 'red', 'black'),
      new Block(300, 200, 10, 10, 'green', 'black'),
    ];
    //player path array
    this.path = [];
  }

  // draw one frame of our game
  animate() {

    this.blocks.forEach( block => {

      this.handleBlock(block);
      
      //drawing a block to canvas
      block.draw(this.ctx);

      //drawing the path of the block to canvas
      const pathUnit = new PathUnit(block.x, block.y, 10, 10);

      //push path coordinates to path array
      this.path.push(pathUnit);
    })
  }

  handleBlock(block) {
    const { canvas } = this.ctx;

    //ends game when player collides with a wall
    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 

      } else {
      // draw a new unit at previous location
        // PathUnit.draw(this.ctx);
        block.move();
      }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPressP1(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

  handleKeyPressP2(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'd') {
      direction.dx = 1;

    } else if (e.key === 'a') {
      direction.dx = -1;

    } else if (e.key === 's') {
      direction.dy = 1;

    } else if (e.key === 'w') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}


//////////////GAMEPIECE.JS
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
    )
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
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}


///////////////BLOCK.JS
 const GamePiece = require('./GamePiece');
 const PathUnit = require('./PathUnit')

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.borderColor = borderColor;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}



//////////////PATHUNIT.JS

module.exports = class PathUnit extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color)
  }

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);

    // create path array
    // block.path.push(newUnit);
  }
};