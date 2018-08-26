// Game-test.js
const { assert } = require('chai');
const Game = require('../lib/Game');
const Block = require('../lib/Block');

const PathUnit = require('../lib/GamePiece');

//this is a fake context to replace the one from the game in order to run the test.
const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it('should be a function', () => {
    assert.isFunction(Game);
  });

  it('should instantiate a new game', () => {
    const game = new Game();
    assert.isObject(game);
  });

  it('should end the game if block collides with wall', () => {
    const game = new Game(ctx);
    const block1 = new Block (300, 30, 10, 10);
    assert.equal(game.gameOver, false);
    assert.equal(block1.isCollidingWithWall(300, 300), true);

    game.handleBlock(block1);
    assert.equal(game.gameOver, true);
  });
  
  it('should end game if player collides with own trail', () => {
    const game = new Game(ctx);
    const block1 = new Block (39, 30, 10, 10);
    assert.equal(game.gameOver, false);

    block1.path = [ 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}
      ];

    assert.equal(block1.isCollidingWithOwnPath(block1.path), true);

    game.handleBlock(block1);
    assert.equal(game.gameOver,  true)
  })
  
  it('should have a default status of off', () => {
    const game = new Game();
    assert.equal(game.gameOver, false) 
  })

  it('should toggle game status', () => {
    const game = new Game(ctx);
    assert.equal(game.gameOver, false)
    
    game.endGame();
    assert.equal(game.gameOver, true)
  }) 

  it('should end game if player collides with opponent trail', () => {
    const game = new Game(ctx);
    const block1 = new Block (38, 30, 10, 10);
    const block2 = new Block (25, 55, 10, 10);
    assert.equal(game.gameOver, false);

    block1.path = []
    block2.path = [ 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}, 
      {x: 38, y: 30, width: 10, height:10}
      ];

    assert.equal(block1.isCollidingWithOpponentPath(block1.path, block2.path), true);

    game.blocks = [block1, block2];

    game.handleBlock(block1);
    assert.equal(game.gameOver, true);
  })

  it('should set game over to true if end game is called', () => {
    const game = new Game(ctx);
    assert.equal(game.gameOver, false);

    game.endGame();
    assert.equal(game.gameOver, true);
  })

  it('should toggle paused state if togglePause is called', () => {
    const game = new Game(ctx);
    assert.equal(game.paused, false);

    game.togglePause();
    assert.equal(game.paused, true);
  })
})  

describe('Game', () => {
  it('should change direction when arrow right is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 'ArrowRight', preventDefault: () => {return null}};
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0); 
  })

  it('should not change direction when arrow left is pressed if moving to the right', () => {
    const game = new Game(ctx);
    const event = {key: 'ArrowLeft', preventDefault: () => {return null}};
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0); 
  })

  it('should change direction when arrow down is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 'ArrowDown', preventDefault: () => {return null}};
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerOne.dx, 0);
    assert.equal(game.playerOne.dy, 1); 
  })

  it('should change direction when arrow up is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 'ArrowUp', preventDefault: () => {return null}};
    assert.equal(game.playerOne.dx, 1);
    assert.equal(game.playerOne.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerOne.dx, 0);
    assert.equal(game.playerOne.dy, -1); 
  })

  it('should not change direction when D is pressed if moving to the left', () => {
    const game = new Game(ctx);
    const event = {key: 'd', preventDefault: () => {return null}};
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0); 
  })

  it('should change direction when A is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 'a', preventDefault: () => {return null}};
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0); 
  })

  it('should change direction when S is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 's', preventDefault: () => {return null}};
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerTwo.dx, 0);
    assert.equal(game.playerTwo.dy, 1); 
  })

  it('should change direction when W is pressed', () => {
    const game = new Game(ctx);
    const event = {key: 'w', preventDefault: () => {return null}};
    assert.equal(game.playerTwo.dx, -1);
    assert.equal(game.playerTwo.dy, 0);
    
    game.handleKeyPress(event);
    assert.equal(game.playerTwo.dx, 0);
    assert.equal(game.playerTwo.dy, -1); 
  })

})
