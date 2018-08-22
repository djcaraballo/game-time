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

  function Block(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.borderColor = borderColor;

    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'draw', this).call(this, ctx);

      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
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
    var playerOne = new Block(50, 200, 10, 10, 'red', 'black');
    var playerTwo = new Block(350, 200, 10, 10, 'green', 'black');

    this.blocks = [playerOne, playerTwo];
    this.path = [];
  }

  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      // const { blocks } = this;
      // const collision = blocks[0].isCollidingWith(blocks[1]);

      this.blocks.forEach(function (block) {

        _this.handleBlock(block);

        //drawing a block to canvas
        block.draw(_this.ctx);

        //drawing the path of the block to canvas
        // console.log(block.x, block.y);
        var pathUnit = new PathUnit(block.x, block.y, 10, 10);
        // console.log(pathUnit);

        //push path coordinates to path array
        _this.path.push(pathUnit);
        // console.log(this.path);
      });
    }
  }, {
    key: 'handleBlock',
    value: function handleBlock(block) {
      var canvas = this.ctx.canvas;


      if (block.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
        // } else if (block.isCollidingWithPath()) {
        //   this.endGame();
        // } 
      } else {
        block.move();
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
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
        direction.dx = 1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'ArrowDown') {
        direction.dy = 1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'ArrowUp') {
        direction.dy = -1;
        this.blocks[0].changeDirection(direction);
      } else if (e.key === 'd') {
        direction.dx = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'a') {
        direction.dx = -1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 's') {
        direction.dy = 1;
        this.blocks[1].changeDirection(direction);
      } else if (e.key === 'w') {
        direction.dy = -1;
        this.blocks[1].changeDirection(direction);
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
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  //Collision detection with game pieces


  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }

    //Collision detection with wall

  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }

    //Collision detection with path
    // isCollidingWithPath() {
    //   return (

    //   )
    // }

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
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
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

start.addEventListener('click', gameLoop);

function gameLoop() {

  if (game.isOver()) {
    console.log('Game Over');
  } else {
    // clear previous frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BhdGhVbml0LmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJHYW1lUGllY2UiLCJyZXF1aXJlIiwiUGF0aFVuaXQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJCbG9jayIsInBhdXNlZCIsImdhbWVPdmVyIiwicGxheWVyT25lIiwicGxheWVyVHdvIiwiYmxvY2tzIiwicGF0aCIsImZvckVhY2giLCJoYW5kbGVCbG9jayIsImJsb2NrIiwiZHJhdyIsInBhdGhVbml0IiwicHVzaCIsImNhbnZhcyIsImlzQ29sbGlkaW5nV2l0aFdhbGwiLCJlbmRHYW1lIiwibW92ZSIsImUiLCJkaXJlY3Rpb24iLCJkeCIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2Iiwib2JqZWN0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVMb29wIiwiaXNPdmVyIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVLZXlQcmVzcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIiBjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuIGNvbnN0IFBhdGhVbml0ID0gcmVxdWlyZSgnLi9QYXRoVW5pdCcpXG5cbi8vIGV4dGVuZCBHYW1lUGllY2UgY2xhc3Ncbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmxvY2sgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciwgYm9yZGVyQ29sb3IpIHtcbiAgICAvLyBpbnZva2UgcGFyZW50IGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuXG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuXG4gIH0gXG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7eCwgeSwgaGVpZ2h0LCB3aWR0aCwgYm9yZGVyQ29sb3IgfSA9IHRoaXM7XG5cbiAgICAvLyBjYWxsIHBhcmVudCBjbGFzcyBkcmF3IGZ1bmN0aW9uXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuXG4gICAgLy8gZHJhdyBibG9jayBib3JkZXJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufSIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jaycpO1xuY29uc3QgUGF0aFVuaXQgPSByZXF1aXJlKCcuL1BhdGhVbml0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAvL2NyZWF0aW5nIHBsYXllcnNcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgQmxvY2soNTAsIDIwMCwgMTAsIDEwLCAncmVkJywgJ2JsYWNrJyk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IEJsb2NrKDM1MCwgMjAwLCAxMCwgMTAsICdncmVlbicsICdibGFjaycpO1xuXG4gICAgdGhpcy5ibG9ja3MgPSBbcGxheWVyT25lLCBwbGF5ZXJUd29dO1xuICAgIHRoaXMucGF0aCA9IFtdO1xuICB9XG5cbiAgLy8gZHJhdyBvbmUgZnJhbWUgb2Ygb3VyIGdhbWVcbiAgYW5pbWF0ZSgpIHtcblxuICAgIC8vIGNvbnN0IHsgYmxvY2tzIH0gPSB0aGlzO1xuICAgIC8vIGNvbnN0IGNvbGxpc2lvbiA9IGJsb2Nrc1swXS5pc0NvbGxpZGluZ1dpdGgoYmxvY2tzWzFdKTtcblxuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblxuICAgICAgdGhpcy5oYW5kbGVCbG9jayhibG9jayk7XG4gICAgICBcbiAgICAgIC8vZHJhd2luZyBhIGJsb2NrIHRvIGNhbnZhc1xuICAgICAgYmxvY2suZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAgIC8vZHJhd2luZyB0aGUgcGF0aCBvZiB0aGUgYmxvY2sgdG8gY2FudmFzXG4gICAgICAvLyBjb25zb2xlLmxvZyhibG9jay54LCBibG9jay55KTtcbiAgICAgIGNvbnN0IHBhdGhVbml0ID0gbmV3IFBhdGhVbml0KGJsb2NrLngsIGJsb2NrLnksIDEwLCAxMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXRoVW5pdCk7XG5cbiAgICAgIC8vcHVzaCBwYXRoIGNvb3JkaW5hdGVzIHRvIHBhdGggYXJyYXlcbiAgICAgIHRoaXMucGF0aC5wdXNoKHBhdGhVbml0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aCk7XG5cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQmxvY2soYmxvY2spIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICAgIHRoaXMuZW5kR2FtZSgpOyBcbiAgICAgIC8vIH0gZWxzZSBpZiAoYmxvY2suaXNDb2xsaWRpbmdXaXRoUGF0aCgpKSB7XG4gICAgICAvLyAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgLy8gfSBcbiAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5tb3ZlKCk7XG4gICAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gLTE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKVxuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1swXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKVxuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzBdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnZCcpIHtcbiAgICAgIGRpcmVjdGlvbi5keCA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKVxuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ2EnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pXG5cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAncycpIHtcbiAgICAgIGRpcmVjdGlvbi5keSA9IDE7XG4gICAgICB0aGlzLmJsb2Nrc1sxXS5jaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKVxuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ3cnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICAgIHRoaXMuYmxvY2tzWzFdLmNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pXG4gICAgfSBcbiAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSAxO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gMTtcbiAgICB0aGlzLmR5diA9IDE7XG4gIH1cblxuLy9Db2xsaXNpb24gZGV0ZWN0aW9uIHdpdGggZ2FtZSBwaWVjZXNcbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJiBcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfVxuXG4vL0NvbGxpc2lvbiBkZXRlY3Rpb24gd2l0aCB3YWxsXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHwgXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgIClcbiAgfVxuXG4vL0NvbGxpc2lvbiBkZXRlY3Rpb24gd2l0aCBwYXRoXG4gIC8vIGlzQ29sbGlkaW5nV2l0aFBhdGgoKSB7XG4gIC8vICAgcmV0dXJuIChcbiAgICAgIFxuICAvLyAgIClcbiAgLy8gfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cblxufSIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUGF0aFVuaXQgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7eCwgeSwgaGVpZ2h0LCB3aWR0aCwgYm9yZGVyQ29sb3IgfSA9IHRoaXM7XG5cbiAgICAvLyBjYWxsIHBhcmVudCBjbGFzcyBkcmF3IGZ1bmN0aW9uXG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuXG4gICAgLy8gZHJhdyBibG9jayBib3JkZXJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJyk7XG5cbnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZUxvb3ApO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuaXNPdmVyKCkpIHtcbiAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJyk7XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBmcmFtZVxuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIGRyYXcgdGhpcyBmcmFtZVxuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG5cbiAgLy8gcHJlcGFyZSB0byBkcmF3IG5leHQgZnJhbWVcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuLy8gQWRkIGtleSBwcmVzcyBldmVudCBoYW5kbGVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9