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
    const block1 = new Block (300, 30, 10, 10);

    assert.equal(game.gameOver, false)
    assert.equal(block1.isCollidingWithWall(300, 300), true);

    game.handleBlock(block1);

    assert.equal(game.gameOver, true)

  })
  
  it('should end game if player collides with own trail', () => {
    
    const game = new Game(ctx);
    const block1 = new Block (39, 30, 10, 10);

    assert.equal(game.gameOver, false);

    block1.path = [ {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}];
    block1.isCollidingWithOwnPath(block1.path);

    assert.equal(block1.isCollidingWithOwnPath(block1.path), true)



  })
  // it.skip('should take properties', () => {})
  // it.skip('should collide with walls', () => {})
  // it.skip('should be able to move', () => {})
  // it.skip('should be able to changeDirection', () => {})

  it.skip('should have a default status of off', () => {
    const game = new Game();

    assert.equal(this.gameOn, false) 
  })

  it.skip('should toggle game status', () => {
    const game = new Game ();
    
    assert.equal(this.gameOn, true)
  })

  it.skip('should end game if player collides with other trail')
  it.skip('should set game Over to true if end game is called')
  it.skip('should toggle paused state if togglePause is called')
  it.skip('should change Direction of path on key press')
  // create an event object (let event = {key: 'ArrowRight'}
  // assert.equal(game.blocks[1].x = the coordinate it should have when arrow right is pressed)
})