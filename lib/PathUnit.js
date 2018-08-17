const GamePiece = require('./GamePiece');

module.exports = class PathUnit extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color)
  }
};