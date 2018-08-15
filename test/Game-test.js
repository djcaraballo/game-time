// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game')

//this is a fake context to replace the one from the game in order to run the test.
const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it ('should end the game if block collides with wall', () => {

    const game = new Game(ctx);

    game.animate();
  })
  
  it.skip('should take properties', () => {})
  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})