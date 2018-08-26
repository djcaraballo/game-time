const Block = require('./Block');
const PathUnit = require('./PathUnit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    //creating players
    const playerOne = new Block(300, 300, 10, 10, 'cornflowerblue', 1);
    const playerTwo = new Block(600, 300, 10, 10, 'orange', -1);

    this.blocks = [playerOne, playerTwo];
  }

  // draw one frame of our game
  animate() {

    this.blocks.forEach( block => {

      //drawing the path of the block to canvas
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

    if (block.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame(); 
    } else if (block.isCollidingWithOwnPath(block.path)) {
      this.endGame();
    } else if (block.isCollidingWithOpponentPath(this.blocks[0].path, this.blocks[1].path)) {
      this.endGame();
    } else {
      block.move();
    }
  }

  endGame() {
    const { canvas } = this.ctx;
    
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

    const directionKeys = [
      'ArrowRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowUp',
      'd',
      'a',
      's',
      'w'
    ];

    directionKeys.forEach((directionKey, i, direction) => {
      e.preventDefault();
      if (e.key === directionKey) {
        this.blocks[i].changeDirection(direction);
      }
    });

    // for (var i = 0; i <= directionKeys.length; i++) {
    //   (directionKey, i, direction) => {
    //     
    //     }
    //   }
    // }

    if (e.key === 'ArrowRight') {
      // e.preventDefault();
      direction.dx = 1;
      // this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowLeft') {
      // e.preventDefault();
      direction.dx = -1;
      // this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowDown') {
      // e.preventDefault();
      direction.dy = 1;
      // this.blocks[1].changeDirection(direction);

    } else if (e.key === 'ArrowUp') {
      // e.preventDefault();
      direction.dy = -1;
      // this.blocks[1].changeDirection(direction);

    } else if (e.key === 'd') {
      direction.dx = 1;
      // this.blocks[0].changeDirection(direction);

    } else if (e.key === 'a') {
      direction.dx = -1;
      // this.blocks[0].changeDirection(direction);

    } else if (e.key === 's') {
      direction.dy = 1;
      // this.blocks[0].changeDirection(direction);

    } else if (e.key === 'w') {
      direction.dy = -1;
      // this.blocks[0].changeDirection(direction);
    } 
  }
};