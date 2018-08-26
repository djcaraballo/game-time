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


    assert.equal(block1.isCollidingWithOwnPath(block1.path), true);

    game.handleBlock(block1);

    assert.equal(game.gameOver,  true)



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

  it('should end game if player collides with other trail', () => {
    const game = new Game(ctx);
    const block1 = new Block (38, 30, 10, 10);
    const block2 = new Block (25, 55, 10, 10);


    assert.equal(game.gameOver, false);

    block1.path = []

    block2.path = [ {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}, {x: 38, y: 30, width: 10, height:10}];

    assert.equal(block1.isCollidingWithOpponentPath(block1.path, block2.path), true);

    game.blocks = [block1, block2];

    game.handleBlock(block1);

    assert.equal(game.gameOver, true)

  })

  it('should set game Over to true if end game is called', () => {
    const game = new Game(ctx)

    assert.equal(game.gameOver, false)

    game.endGame();

    assert.equal(game.gameOver, true)
  })

  it('should toggle paused state if togglePause is called', () => {

    const game = new Game(ctx)

    assert.equal(game.paused, false);

    game.togglePause();

    assert.equal(game.paused, true);
  })

  it.skip('should change Direction of path on key press')
  // create an event object (let event = {key: 'ArrowRight'}
  // assert.equal(game.blocks[1].x = the coordinate it should have when arrow right is pressed)
})