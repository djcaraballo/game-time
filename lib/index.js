const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const start = document.querySelector('.start-btn');
const playerOneScore = document.querySelector('.player-one-score');
const playerTwoScore = document.querySelector('.player-two-score');

//starts the game and displays players on the gameboard
start.addEventListener('click', gameLoop);

//gameLoop is called over and over to draw each frame
function gameLoop () {

  if (game.isOver()) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  } else {
    // clear previous frame

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function playerScore() {

}
