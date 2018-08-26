const { assert } = require('chai');
// const Index = require('../lib/index.js')
const Block = require('../lib/Block.js')
const Game = require('../lib/Game.js')

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Block', () => {
  let block;

  it.skip('should take an argument for height and width', () => {
    const block = new Block(30, 30, 10, 10);
    console.log(block);

    assert.deepEqual(block.height, 10);
    assert.deepEqual(block.width, 10);
  })  

  it.skip('should start off with no path', () => {
    const player = new Block();

    assert.deepEqual(player.path, []);
  })

  it.skip('should create a path when x and y coordinates change', () => {
    const player = new Block();
    const game = new Game();
    
    assert.deepEqual(player.path, [])

    game.animate()
    assert.deepEqual(player.path.length, 1)
    assert.deepEqual(player.path[0], pathUnit)

  });
})