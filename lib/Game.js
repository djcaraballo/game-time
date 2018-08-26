const Block = require('./Block');
const PathUnit = require('./PathUnit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.playerOne = new Block(300, 300, 10, 10, 'cornflowerblue', 1);
    this.playerTwo = new Block(600, 300, 10, 10, 'orange', -1);
    this.blocks = [this.playerOne, this.playerTwo];
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
    e.preventDefault();
  
    const playerOneKeys = {
      ArrowRight: {dx: 1, dy: 0},
      ArrowLeft: {dx: -1, dy: 0},
      ArrowDown: {dx: 0, dy: 1},
      ArrowUp: {dx: 0, dy: -1}
    };

    const playerTwoKeys = {
      d: {dx: 1, dy: 0},
      a: {dx: -1, dy: 0},
      s: {dx: 0, dy: 1},
      w: {dx: 0, dy: -1}
    };

    let playerOneKeyPress = playerOneKeys[e.key];
    let playerTwoKeyPress = playerTwoKeys[e.key];

    if (playerOneKeyPress) {
      this.playerOne.changeDirection(playerOneKeyPress)
    }

    if (playerTwoKeyPress) {
      this.playerTwo.changeDirection(playerTwoKeyPress)
    }
  }
};