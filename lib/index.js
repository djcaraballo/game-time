const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const start = document.querySelector('.start-btn');

start.addEventListener('click', gameLoop);



// //changing the color of our rectangle
// ctx.fillStyle = 'cornflowerblue';
// let x = 30;

// //animation
// window.requestAnimationFrame(callback);

// function callback() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);//getting rid of this makes a long snake-like object...
// //drawing a rectangle
// //parameters (x coord, y coord, width, height)
//   ctx.fillRect(x, 30, 20, 20);
//   x++;
//   console.log('repaint');
//   window.requestAnimationFrame(callback);
// }


// Start animation loop
// window.requestAnimationFrame(gameLoop);

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
  game.handleKeyPress(e);
}
