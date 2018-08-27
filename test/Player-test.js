const { assert } = require('chai');
// const Index = require('../lib/index.js')
const Player = require('../lib/Player.js')
const Game = require('../lib/Game.js')

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Player', () => {
  let player;

  it.skip('should take an argument for height and width', () => {
    const player = new Player(30, 30, 10, 10);

    assert.deepEqual(player.height, 10);
    assert.deepEqual(player.width, 10);
  })  

  it.skip('should start off with no path', () => {
    const player = new Player();

    assert.deepEqual(player.path, []);
  })

  it.skip('should create a path when x and y coordinates change', () => {
    const player = new Player();
    const game = new Game();
    
    assert.deepEqual(player.path, [])

    game.animate()
    assert.deepEqual(player.path.length, 1)
    assert.deepEqual(player.path[0], pathUnit)

  });
})