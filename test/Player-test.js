const { assert } = require('chai');
const Block = require('../lib/Block.js')

describe('Block', () => {
  let block;

  it.skip('should take an argument for height and width', () => {
    const block = new Block(30, 30, 10, 10);

    assert.deepEqual(block.height, 10);
    assert.deepEqual(block.width, 10);
  });
})