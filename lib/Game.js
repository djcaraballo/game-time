const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [
      new Block(50, 50, 10, 10, 'red', 'black'),
      new Block(90, 90, 10, 10, 'green', 'black'),
    ];
  }

  // draw one frame of our game
  animate() {

    const { blocks } = this;
    const collision = blocks[0].isCollidingWith(blocks[1]);

    this.blocks.forEach( block => {

      this.handleBlock(block);
      
      
      block.draw(this.ctx);
    })
  }

  handleBlock(block) {
    const { canvas } = this.ctx;

    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame(); 

        // //this will reverse the direction if the block hits the wall.
        // const newDirection = {
        //   dx: block.dx * -1,
        //   dy: 0
        // }
        // block.changeDirection(newDirection)
        // block.move();
        // //////////////

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

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}