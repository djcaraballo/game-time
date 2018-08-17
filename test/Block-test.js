const { assert } = require('chai');
const Block = require('../lib/Block.js')

describe('Block', () => {
  let block;

  it('should take an argument for height and width', () => {
    const block = new Block(30, 30, 10, 10);
    console.log(block);

    assert.deepEqual(block.height, 10);
    assert.deepEqual(block.width, 10);
  })  

  it(‘should start off with no path’, () => {
    const player = new Block();

    assert.equal(player.path, []);
  })

  it(‘should create a path when x and y coordinates change’, () => {
    const player = new Block();
    
    assert.equal(player.path, [])

    game.animate()
    assert.deepEqual(player.path.length, 1)
    assert.deepEqual(player.path[0], pathUnit)

  });
})