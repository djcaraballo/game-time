/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");
var PathUnit = __webpack_require__(/*! ./PathUnit */ "./lib/PathUnit.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Block, _GamePiece);

  function Block(x, y, height, width, color, dx) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.path = [];
    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width;

      // call parent class draw function

      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'draw', this).call(this, ctx);

      // draw block border
      // ctx.strokeStyle = borderColor;
      // ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Block;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");
var PathUnit = __webpack_require__(/*! ./PathUnit */ "./lib/PathUnit.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    //creating players
    var playerOne = new Block(50, 200, 10, 10, 'cornflowerblue', 1);
    var playerTwo = new Block(350, 200, 10, 10, 'orange', -1);

    this.blocks = [playerOne, playerTwo];
    // this.path = [];
  }

  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.blocks.forEach(function (block) {
        //drawing the path of the block to canvas
        // console.log(pathUnit);
        var pathUnit = new PathUnit(block.x, block.y, 10, 10, block.color);

        //drawing a block to canvas
        block.draw(_this.ctx);

        //push path coordinates to path array
        block.path.unshift(pathUnit);

        //call the handle block function for collision detection
        _this.handleBlock(block, pathUnit);
      });
    }
  }, {
    key: 'handleBlock',
    value: function handleBlock(block, pathUnit) {
      var canvas = this.ctx.canvas;


      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
        // } else if 
        // // blueTrail.forEach()
        // (block.isCollidingWith(block)) {
        //   this.endGame();
      } else if (block.isCollidingWithOwnPath(block.path)) {
        this.endGame();
      } else if (block.isCollidingWithOpponentPath(this.blocks[0].path, this.blocks[1].path)) {
        this.endGame();
      } else {
        block.move();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      var canvas = this.ctx.canvas;


      this.gameOver = true;

      // clear previous frame
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      // this.gameloop();
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var direction = {
        dx: 0,
        dy: 0
      };

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        direction.dx = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        direction.dx = -1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        direction.dy = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        direction.dy = -1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'd') {
        direction.dx = 1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'a') {
        direction.dx = -1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 's') {
        direction.dy = 1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'w') {
        direction.dy = -1;
        this.blocks[0].changeDirection(direction);
      }
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color, dx) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = dx || 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  //Collision detection with game pieces


  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      var _this = this;

      var collidingObject = object.find(function (pathUnit) {
        return _this.x < pathUnit.x + pathUnit.width && _this.x + _this.width > pathUnit.x && _this.y < pathUnit.y + pathUnit.height && _this.y + _this.height > pathUnit.y;
      });
      if (collidingObject) {
        return true;
      } else {
        return false;
      }
    }

    //Collision detection with wall

  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "isCollidingWithOpponentPath",
    value: function isCollidingWithOpponentPath(player1Path, player2Path) {
      var slicedPathP1 = player1Path.slice(20);
      var slicedPathP2 = player2Path.slice(20);

      if (this.isCollidingWith(slicedPathP2)) {
        return true;
        //increment opponents score
      } else if (this.isCollidingWith(slicedPathP1)) {
        return true;
        //increment opponents score
      }
    }
  }, {
    key: "isCollidingWithOwnPath",
    value: function isCollidingWithOwnPath(trails) {
      var slicedPath = trails.slice(20);

      if (this.isCollidingWith(slicedPath)) {
        return true;
      }
    }
    //draws another block onto the canvas

  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }

    //changes x and y coordinates of piece

  }, {
    key: "move",
    value: function move() {
      //when piece moves, x coordinate is equal to x coordinate + direction * velocity
      this.x += this.dx * this.dxv;
      //when piece moves, y coordinate is equal to y coordinate + direction * velocity
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      if (this.preventBackward(direction)) {
        this.dx = direction.dx;
        this.dy = direction.dy;
      }
    }
  }, {
    key: "preventBackward",
    value: function preventBackward(direction) {
      var previous = {
        dx: direction.dx,
        dy: direction.dy
      };
      if (this.dx == 1 && previous.dx == -1 || this.dx == -1 && previous.dx == 1) {
        return false;
      }
      if (this.dy == 1 && previous.dy == -1 || this.dy == -1 && previous.dy == 1) {
        return false;
      } else {
        return true;
      }
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/PathUnit.js":
/*!*************************!*\
  !*** ./lib/PathUnit.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(PathUnit, _GamePiece);

  function PathUnit(x, y, height, width, color) {
    _classCallCheck(this, PathUnit);

    return _possibleConstructorReturn(this, (PathUnit.__proto__ || Object.getPrototypeOf(PathUnit)).call(this, x, y, height, width, color));
  }

  _createClass(PathUnit, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(PathUnit.prototype.__proto__ || Object.getPrototypeOf(PathUnit.prototype), 'draw', this).call(this, ctx);

      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return PathUnit;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var start = document.querySelector('.start-btn');
var playerOneScore = document.querySelector('.player-one-score');
var playerTwoScore = document.querySelector('.player-two-score');

//starts the game and displays players on the gameboard
start.addEventListener('click', gameLoop);

//gameLoop is called over and over to draw each frame
function gameLoop() {

  if (game.isOver()) {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.animate();
  } else {
    // clear previous frame

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

function playerScore() {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BhdGhVbml0LmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJHYW1lUGllY2UiLCJyZXF1aXJlIiwiUGF0aFVuaXQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiZHgiLCJwYXRoIiwiY3R4IiwiQmxvY2siLCJwYXVzZWQiLCJnYW1lT3ZlciIsInBsYXllck9uZSIsInBsYXllclR3byIsImJsb2NrcyIsImZvckVhY2giLCJwYXRoVW5pdCIsImJsb2NrIiwiZHJhdyIsInVuc2hpZnQiLCJoYW5kbGVCbG9jayIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoT3duUGF0aCIsImlzQ29sbGlkaW5nV2l0aE9wcG9uZW50UGF0aCIsIm1vdmUiLCJjbGVhclJlY3QiLCJlIiwiZGlyZWN0aW9uIiwiZHkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZURpcmVjdGlvbiIsImR4diIsImR5diIsIm9iamVjdCIsImNvbGxpZGluZ09iamVjdCIsImZpbmQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInBsYXllcjFQYXRoIiwicGxheWVyMlBhdGgiLCJzbGljZWRQYXRoUDEiLCJzbGljZSIsInNsaWNlZFBhdGhQMiIsImlzQ29sbGlkaW5nV2l0aCIsInRyYWlscyIsInNsaWNlZFBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInByZXZlbnRCYWNrd2FyZCIsInByZXZpb3VzIiwiYm9yZGVyQ29sb3IiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJzdGFydCIsInBsYXllck9uZVNjb3JlIiwicGxheWVyVHdvU2NvcmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZUxvb3AiLCJpc092ZXIiLCJhbmltYXRlIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlS2V5UHJlc3MiLCJwbGF5ZXJTY29yZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxZQUFZLG1CQUFBQyxDQUFRLHVDQUFSLENBQWxCO0FBQ0EsSUFBTUMsV0FBVyxtQkFBQUQsQ0FBUSxxQ0FBUixDQUFqQjs7QUFFQTtBQUNBRSxPQUFPQyxPQUFQO0FBQUE7O0FBQ0UsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsTUFBbEIsRUFBMEJDLEtBQTFCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsRUFBeEMs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MUMsQ0FBcEI7QUFDRDs7QUFFRCxTQUFTMkMsV0FBVCxHQUF1QixDQUV0QixDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuY29uc3QgUGF0aFVuaXQgPSByZXF1aXJlKCcuL1BhdGhVbml0Jyk7XG5cbi8vIGV4dGVuZCBHYW1lUGllY2UgY2xhc3Ncbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmxvY2sgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpIHtcbiAgICAvLyBpbnZva2UgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICB9IFxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGh9ID0gdGhpcztcblxuICAgIC8vIGNhbGwgcGFyZW50IGNsYXNzIGRyYXcgZnVuY3Rpb25cbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBkcmF3IGJsb2NrIGJvcmRlclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIC8vIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59OyIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuY29uc3QgUGF0aFVuaXQgPSByZXF1aXJlKCcuL1BhdGhVbml0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgLy9jcmVhdGluZyBwbGF5ZXJzXG4gICAgY29uc3QgcGxheWVyT25lID0gbmV3IEJsb2NrKDUwLCAyMDAsIDEwLCAxMCwgJ2Nvcm5mbG93ZXJibHVlJywgMSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IEJsb2NrKDM1MCwgMjAwLCAxMCwgMTAsICdvcmFuZ2UnLCAtMSk7XG5cbiAgICB0aGlzLmJsb2NrcyA9IFtwbGF5ZXJPbmUsIHBsYXllclR3b107XG4gICAgLy8gdGhpcy5wYXRoID0gW107XG4gIH1cblxuICAvLyBkcmF3IG9uZSBmcmFtZSBvZiBvdXIgZ2FtZVxuICBhbmltYXRlKCkge1xuXG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4ge1xuICAgICAgLy9kcmF3aW5nIHRoZSBwYXRoIG9mIHRoZSBibG9jayB0byBjYW52YXNcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhdGhVbml0KTtcbiAgICAgIGNvbnN0IHBhdGhVbml0ID0gbmV3IFBhdGhVbml0KGJsb2NrLngsIGJsb2NrLnksIDEwLCAxMCwgYmxvY2suY29sb3IpO1xuXG4gICAgICAvL2RyYXdpbmcgYSBibG9jayB0byBjYW52YXNcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuXG4gICAgICBcbiAgICAgIC8vcHVzaCBwYXRoIGNvb3JkaW5hdGVzIHRvIHBhdGggYXJyYXlcbiAgICAgIGJsb2NrLnBhdGgudW5zaGlmdChwYXRoVW5pdCk7XG5cbiAgICAgIC8vY2FsbCB0aGUgaGFuZGxlIGJsb2NrIGZ1bmN0aW9uIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uXG4gICAgICB0aGlzLmhhbmRsZUJsb2NrKGJsb2NrLCBwYXRoVW5pdCk7XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG5cblxuICBoYW5kbGVCbG9jayhibG9jaywgcGF0aFVuaXQpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTsgXG4gICAgLy8gfSBlbHNlIGlmIFxuICAgIC8vIC8vIGJsdWVUcmFpbC5mb3JFYWNoKClcbiAgICAvLyAoYmxvY2suaXNDb2xsaWRpbmdXaXRoKGJsb2NrKSkge1xuICAgIC8vICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfSBlbHNlIGlmIChibG9jay5pc0NvbGxpZGluZ1dpdGhPd25QYXRoKGJsb2NrLnBhdGgpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aE9wcG9uZW50UGF0aCh0aGlzLmJsb2Nrc1swXS5wYXRoLCB0aGlzLmJsb2Nrc1sxXS5wYXRoKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJsb2NrLm1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuXG4gICAgLy8gY2xlYXIgcHJldmlvdXMgZnJhbWVcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB0aGlzLmdhbWVsb29wKCk7XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXI7XG4gIH1cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9ICF0aGlzLnBhdXNlZDtcbiAgfVxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB7XG4gICAgICBkeDogMCxcbiAgICAgIGR5OiAwXG4gICAgfTtcblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMV0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZGlyZWN0aW9uLmR5ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAxO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnYScpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IC0xO1xuICAgICAgdGhpcy5ibG9ja3NbMF0uY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbik7XG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAncycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICd3Jykge1xuICAgICAgZGlyZWN0aW9uLmR5ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKTtcbiAgICB9IFxuICB9XG5cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgZHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmR4ID0gZHggfHwgMTtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR4diA9IDE7XG4gICAgdGhpcy5keXYgPSAxO1xuICB9XG5cbiAgLy9Db2xsaXNpb24gZGV0ZWN0aW9uIHdpdGggZ2FtZSBwaWVjZXNcbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIGxldCBjb2xsaWRpbmdPYmplY3QgPSBvYmplY3QuZmluZChwYXRoVW5pdCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnggPCBwYXRoVW5pdC54ICsgcGF0aFVuaXQud2lkdGggJiYgXG4gICAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBwYXRoVW5pdC54ICYmXG4gICAgICAgIHRoaXMueSA8IHBhdGhVbml0LnkgKyBwYXRoVW5pdC5oZWlnaHQgJiZcbiAgICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBwYXRoVW5pdC55XG4gICAgICApOyBcbiAgICB9KTsgIFxuICAgIGlmIChjb2xsaWRpbmdPYmplY3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy9Db2xsaXNpb24gZGV0ZWN0aW9uIHdpdGggd2FsbFxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8IFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoT3Bwb25lbnRQYXRoKHBsYXllcjFQYXRoLCBwbGF5ZXIyUGF0aCkge1xuICAgIGxldCBzbGljZWRQYXRoUDEgPSBwbGF5ZXIxUGF0aC5zbGljZSgyMCk7XG4gICAgbGV0IHNsaWNlZFBhdGhQMiA9IHBsYXllcjJQYXRoLnNsaWNlKDIwKTtcblxuICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nV2l0aChzbGljZWRQYXRoUDIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIC8vaW5jcmVtZW50IG9wcG9uZW50cyBzY29yZVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbGxpZGluZ1dpdGgoc2xpY2VkUGF0aFAxKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAvL2luY3JlbWVudCBvcHBvbmVudHMgc2NvcmVcbiAgICB9XG4gIH0gXG5cblxuICBpc0NvbGxpZGluZ1dpdGhPd25QYXRoKHRyYWlscykge1xuICAgIGxldCBzbGljZWRQYXRoID0gdHJhaWxzLnNsaWNlKDIwKTsgXG4gICAgXG4gICAgaWYgKHRoaXMuaXNDb2xsaWRpbmdXaXRoKHNsaWNlZFBhdGgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IFxuICB9XG4gIC8vZHJhd3MgYW5vdGhlciBibG9jayBvbnRvIHRoZSBjYW52YXNcbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIC8vY2hhbmdlcyB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHBpZWNlXG4gIG1vdmUoKSB7XG4gICAgLy93aGVuIHBpZWNlIG1vdmVzLCB4IGNvb3JkaW5hdGUgaXMgZXF1YWwgdG8geCBjb29yZGluYXRlICsgZGlyZWN0aW9uICogdmVsb2NpdHlcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIC8vd2hlbiBwaWVjZSBtb3ZlcywgeSBjb29yZGluYXRlIGlzIGVxdWFsIHRvIHkgY29vcmRpbmF0ZSArIGRpcmVjdGlvbiAqIHZlbG9jaXR5XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5wcmV2ZW50QmFja3dhcmQoZGlyZWN0aW9uKSkge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50QmFja3dhcmQoZGlyZWN0aW9uKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge1xuICAgICAgZHg6IGRpcmVjdGlvbi5keCxcbiAgICAgIGR5OiBkaXJlY3Rpb24uZHksXG4gICAgfVxuICAgIGlmICgodGhpcy5keCA9PSAxICYmIHByZXZpb3VzLmR4ID09IC0xKSB8fFxuICAgICAgKHRoaXMuZHggPT0gLTEgJiYgcHJldmlvdXMuZHggPT0gMSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCh0aGlzLmR5ID09IDEgJiYgcHJldmlvdXMuZHkgPT0gLTEpIHx8ICh0aGlzLmR5ID09IC0xICYmIHByZXZpb3VzLmR5ID09IDEpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUGF0aFVuaXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3Qge3gsIHksIGhlaWdodCwgd2lkdGgsIGJvcmRlckNvbG9yIH0gPSB0aGlzO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY2xhc3MgZHJhdyBmdW5jdGlvblxuICAgIHN1cGVyLmRyYXcoY3R4KTtcblxuICAgIC8vIGRyYXcgYmxvY2sgYm9yZGVyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3I7XG4gICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xuY29uc3QgcGxheWVyT25lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1zY29yZScpO1xuY29uc3QgcGxheWVyVHdvU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1zY29yZScpO1xuXG4vL3N0YXJ0cyB0aGUgZ2FtZSBhbmQgZGlzcGxheXMgcGxheWVycyBvbiB0aGUgZ2FtZWJvYXJkXG5zdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdhbWVMb29wKTtcblxuLy9nYW1lTG9vcCBpcyBjYWxsZWQgb3ZlciBhbmQgb3ZlciB0byBkcmF3IGVhY2ggZnJhbWVcbmZ1bmN0aW9uIGdhbWVMb29wICgpIHtcblxuICBpZiAoZ2FtZS5pc092ZXIoKSkge1xuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBmcmFtZVxuXG4gICAgLy8gZHJhdyB0aGlzIGZyYW1lXG4gICAgZ2FtZS5hbmltYXRlKCk7XG4gIH1cblxuICAvLyBwcmVwYXJlIHRvIGRyYXcgbmV4dCBmcmFtZVxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxuLy8gQWRkIGtleSBwcmVzcyBldmVudCBoYW5kbGVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllclNjb3JlKCkge1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9