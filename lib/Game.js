const Block = require('./Block');
const PathUnit = require('./PathUnit')

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    //creating players
    const playerOne = new Block(50, 200, 10, 10, 'cornflowerblue');
    const playerTwo = new Block(350, 200, 10, 10, 'orange');

    this.blocks = [playerOne, playerTwo];
    this.path = [];
  }

  // draw one frame of our game
  animate() {

    // const { blocks } = this;
    // const collision = blocks[0].isCollidingWith(blocks[1]);

    this.blocks.forEach( block => {

      this.handleBlock(block);
      
      //drawing a block to canvas
      block.draw(this.ctx);

      //drawing the path of the block to canvas
      // console.log(block.x, block.y);
      const pathUnit = new PathUnit(block.x, block.y, 10, 10);
      // console.log(pathUnit);

      //push path coordinates to path array
      this.path.push(pathUnit);
      console.log(this.path)
      // console.log(this.path);

    })
  }

  handleBlock(block) {
    const { canvas } = this.ctx;

    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 
      // } else if (block.isCollidingWithPath()) {
      //   this.endGame();
      // } 
    } else {
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
      direction.dx = 1;
      this.blocks[1].changeDirection(direction)

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;
      this.blocks[1].changeDirection(direction)

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;
      this.blocks[1].changeDirection(direction)

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
      this.blocks[1].changeDirection(direction)

    } else if (e.key === 'd') {
      direction.dx = 1;
      this.blocks[0].changeDirection(direction)

    } else if (e.key === 'a') {
      direction.dx = -1;
      this.blocks[0].changeDirection(direction)

    } else if (e.key === 's') {
      direction.dy = 1;
      this.blocks[0].changeDirection(direction)

    } else if (e.key === 'w') {
      direction.dy = -1;
      this.blocks[0].changeDirection(direction)
    } 
  }

}