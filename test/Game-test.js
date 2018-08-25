// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');
const Block = require('../lib/Block');
const PathUnit = require('../lib/GamePiece');
// const index = require('../lib/index')

//this is a fake context to replace the one from the game in order to run the test.
const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it('should end the game if block collides with wall', () => {

    const game = new Game(ctx);
    game.gameOver = false;
    const block1 = new Block (300, 30, 10, 10);
    // block.isCollidingWithWall(300, 300);
    // game.endGame();

    assert.equal(block1.isCollidingWithWall(300, 300), true);
    game.handleBlock(block1);
    assert.IsTrue(game.gameOver, true)

  })
  
  it.skip('should take properties', () => {})
  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})

  it.skip('should have a default status of off', () => {
    const game = new Game();

    assert.equal(this.gameOn, false) 
  })

  it.skip('should toggle game status', () => {
    const game = new Game ();
    
    assert.equal(this.gameOn, true)
  })

  it.skip('should end game if player collides wth wall')
  it.skip('should end game if player collides with own trail')
  it.skip('should end game if player collides with other trail')
  it.skip('should set game Over to true if end game is called')
  it.skip('should toggle paused state if togglePause is called')
  it.skip('should change Direction of path on key press')
  // create an event object (let event = {key: 'ArrowRight'}
  // assert.equal(game.blocks[1].x = the coordinate it should have when arrow right is pressed)
})