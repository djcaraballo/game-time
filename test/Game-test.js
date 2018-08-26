// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');
const Block = require('../lib/Block');

//this is a fake context to replace the one from the game in order to run the test.
const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it('should end the game if player collides with wall', () => {

    const game = new Game(ctx);
    console.log('What is ' + game);

    assert.equal(game.gameOver, false);
    
    game.animate();

    
    const block = new Block(300, 30, 10, 10);

    assert.equal(game.gameOver, true);


  })

  it.skip('should have a default status of off', () => {
    const game = new Game();

    assert.equal(this.gameOn, false) 
  })

  it.skip('should toggle game status', () => {
    const game = new Game ();
    
    assert.equal(this.gameOn, true)
  }) 

  // it.skip('should take properties', () => {})  

  it.skip('should end game if player collides with own trail')
  it.skip('should end game if player collides with other trail')
  it.skip('should set game Over to true if end game is called')
  it.skip('should toggle paused state if togglePause is called')
  it.skip('should change Direction of path on key press')
  // create an event object (let event = {key: 'ArrowRight'}
  // assert.equal(game.blocks[1].x = the coordinate it should have when arrow right is pressed)
})