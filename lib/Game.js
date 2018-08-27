const Player = require('./Player');
const PathUnit = require('./PathUnit');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.playerOne = new Player(300, 300, 10, 10, 'cornflowerblue', 1);
    this.playerTwo = new Player(600, 300, 10, 10, 'orange', -1);
    this.players = [this.playerOne, this.playerTwo];
  }

  // draw one frame of our game
  animate() {

    this.players.forEach( player => {

      //drawing the path of the player to canvas
      const pathUnit = new PathUnit(player.x, player.y, 10, 10, player.color);

      //drawing a player to canvas
      player.draw(this.ctx);
      
      //push path coordinates to path array
      player.path.unshift(pathUnit);

      //call the handle player function for collision detection
      this.handlePlayer(player, pathUnit);
    });
  }

  handlePlayer(player, pathUnit) {
    const { canvas } = this.ctx;

    if (player.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame(); 
    } else if (player.isCollidingWithOwnPath(player.path)) {
      this.endGame();
    } else if (player.isCollidingWithOpponentPath(this.players[0].path, this.players[1].path)) {
      this.endGame();
    } else {
      player.move();
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
      this.playerOne.changeDirection(playerOneKeyPress);
    }

    if (playerTwoKeyPress) {
      this.playerTwo.changeDirection(playerTwoKeyPress);
    }
  }
};