const GamePiece = require('./GamePiece');
const PathUnit = require('./PathUnit');

// extend GamePiece class
module.exports = class Block extends GamePiece {
  constructor(x, y, height, width, color, dx) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.path = [];
    this.dx = ;
  } 

  draw(ctx) {
    const {x, y, height, width} = this;

    // call parent class draw function
    super.draw(ctx);

    // draw block border
    // ctx.strokeStyle = borderColor;
    // ctx.strokeRect(x, y, width, height);
  }
};