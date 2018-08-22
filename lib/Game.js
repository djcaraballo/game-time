const Block = require('./Block');
const PathUnit = require('./PathUnit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    //creating players
    const playerOne = new Block(50, 200, 10, 10, 'cornflowerblue');
    const playerTwo = new Block(350, 200, 10, 10, 'orange');

    this.blocks = [playerOne, playerTwo];
    // this.path = [];
  }

  // draw one frame of our game
  animate() {

    this.blocks.forEach( block => {
      //drawing the path of the block to canvas
      // console.log(pathUnit);
      const pathUnit = new PathUnit(block.x, block.y, 10, 10, block.color);

      //drawing a block to canvas
      block.draw(this.ctx);

      
      //push path coordinates to path array
      block.path.unshift(pathUnit);

      //call the handle block function for collision detection
      this.handleBlock(block, pathUnit);
      
    });
  }



  handleBlock(block, pathUnit) {
    const { canvas } = this.ctx;
    console.log(this)
    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame(); 
    // } else if 
    // // blueTrail.forEach()
    // (block.isCollidingWith(block)) {
    //   this.endGame();
    } else if(block.isCollidingWithOwnPath(block.path)){
      this.endGame()
    } else if(block.isCollidingWithOpponentPath(this.blocks[0].path, this.blocks[1].path)){
      this.endGame()
      }else {
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

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      direction.dx = 1;
      this.blocks[1].changeDirection(direction);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      direction.dx = -1;
      this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      direction.dy = 1;
      this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      direction.dy = -1;
      this.blocks[1].changeDirection(direction);

    } else if (e.key === 'd') {
      direction.dx = 1;
      this.blocks[0].changeDirection(direction);

    } else if (e.key === 'a') {
      direction.dx = -1;
      this.blocks[0].changeDirection(direction);

    } else if (e.key === 's') {
      direction.dy = 1;
      this.blocks[0].changeDirection(direction);

    } else if (e.key === 'w') {
      direction.dy = -1;
      this.blocks[0].changeDirection(direction);
    } 
  }

};