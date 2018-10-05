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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ball.js":
/*!*********************!*\
  !*** ./lib/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ball {\n    constructor (pos, delta) {\n        this.x = pos[0];\n        this.y = pos[1];\n        this.dx = delta[0];\n        this.dy = delta[1];\n        // this.diameter = Math.PI * 2;\n        this.radius = 10;\n        this.angle = 0;\n        // const canvas = document.getElementById('myCanvas');\n        // this.c = canvas.getContext('2d');\n    }\n\n    draw () {\n        this.c.fillStyle = \"#000000\";\n        this.c.beginPath();\n        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\n        // this.c.fillStyle = \"#FF4500\";\n        // this.setTransform()\n        this.c.closePath();\n        this.c.fill();\n    }\n\n    update () {\n    //    if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {\n    //     this.dx = -this.dx;\n    //     }\n    //    if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {\n    //        this.dy = -this.dy;\n    //    } \n        this.x += this.dx;\n        this.y += this.dy;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n// Collisions\n\n// before collision, direction of the ball\n// angle chosen by pressing left, right keys\n// draw dotted line\n// ball -> draw multiple ball and shooting in the same direction as the first\n\n\n// leftside ball.y + brickHeight or wallHeight\n// rightside ball.y + brickHeight or wallHeight\n// bottom ball.x + brickWidth or wallWidth\n// top ball.x + brickWidth or wallWidth\n\n// ballRadius <-> wall\n\n// bricks health -> random numbers -> subtract with each collision\n// once ball hits the ground, the rest will pile up behind it\n//  \n\n\n\n//# sourceURL=webpack:///./lib/ball.js?");

/***/ }),

/***/ "./lib/brick.js":
/*!**********************!*\
  !*** ./lib/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Brick {\n    constructor(pos, locationPos, status, life) {\n        this.x = pos[0];\n        this.y = pos[1];\n        this.height = 45;\n        this.width = 45;\n        this.life = life;\n        this.status = status;\n        this.locX = locationPos[0];\n        this.locY = locationPos[1];\n        // const canvas = document.getElementById('myCanvas');\n        // this.c = canvas.getContext('2d');\n    }\n    existingBlock () {\n        if (this.status === 'healthy'){\n            return true;\n        }\n        return false;\n    }\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Brick);\n\n\n\n\n//# sourceURL=webpack:///./lib/brick.js?");

/***/ }),

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball.js */ \"./lib/ball.js\");\n/* harmony import */ var _brick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brick.js */ \"./lib/brick.js\");\n/* harmony import */ var _wall_collision_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wall_collision.js */ \"./lib/wall_collision.js\");\n/* harmony import */ var _wall_collision_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wall_collision_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst canvas = document.getElementById('myCanvas');\nconst c = canvas.getContext('2d');\nlet speed = 5;\nlet p1 = {x: 20, y: 250};\nlet p2 = {x: 480, y: 250};\nlet dx = p2.x - p1.x;\nlet dy = p2.y - p1.y;\nlet dist = Math.sqrt(dx * dx + dy * dy);\nlet moves = dist/speed;\nlet xunits = (p2.x - p1.x)/moves;\nlet yunits = (p2.y - p1.y)/moves;\nlet ball = {x:p1.x, y:p1.y};\n// let x = canvas.width/2;\n// let y = canvas.height-30;\n// let dx = 2;\n// let dy = -2;\nlet ballRadius = 10;\nlet rightPressed = false;\nlet leftPressed = false;\nlet brickRowCount = 3;\nlet brickColumnCount = 8;\nlet brickWidth = 45;\nlet brickHeight = 45;\nlet brickPadding = 2;\nlet brickOffsetTop = 60;\nlet brickOffsetLeft = 60;\nlet score = 0;\nlet spacePressed = false;\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\nfunction keyDownHandler(e){\n  if (e.keyCode == 39){\n    rightPressed = true;\n  } else if (e.keyCode == 37) {\n    leftPressed = true;\n  } else if (e.keyCode == 32) {\n    spacePressed = true;\n  }\n}\n\nfunction drawScore(){\n  c.font = \"16px Arial\";\n  c.fillStyle = \"#0095DD\";\n  c.fillText(\"Score: \" + score, 8, 20);\n}\nfunction keyUpHandler(e){\n  if (e.keyCode == 39) {\n    rightPressed = false;\n  } else if (e.keyCode == 37){\n    leftPressed = false;\n  }\n}\n\n// function collisionDetection(){\n//   for(let i = 0; i < brickColumnCount; i++){\n//     for(let j = 0; j < brickRowCount; j++){\n//       let b = bricks[i][j];\n//       // if (b.status == 1){\n//         if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){\n//           dy = -dy;\n//           dx = -dx;\n//           // b.status = 0;\n//           score++;\n//           if (score == brickRowCount * brickColumnCount){\n//             alert(\"You Win, Congratulations!\");\n//             document.location.reload();\n//           }\n//         // }\n//       }\n//     }\n//   }\n// }\n// canvas.width = window.innerWidth;\n// canvas.height = window.innerHeight;\nlet bricks = [];\n// for (let i= 0; i < brickColumnCount; i++){\n//   bricks[i] = [];\n//   for (let j = 0; j < brickRowCount; j++){\n//     bricks[i][j] = { x: 0, y: 0, status: 1 };\n//   }\n// }\n// bricks[i][j].x = brickX;\n// bricks[i][j].y = brickY;\nfunction randomBricks(){\n\n}\n\nfunction drawBricks(){\n\n  for (let i = 0; i < brickColumnCount; i++) {\n    for (let j = 0; j < brickRowCount; j++) {\n        let brickX = (i * (brickWidth + brickPadding)) + brickOffsetLeft;\n        let brickY = (j * (brickHeight + brickPadding)) + brickOffsetTop;\n        let brick = new _brick_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([brickX, brickY], Math.random() * 50);\n        bricks.push(brick);\n        brick.draw();\n    }\n  }\n}\n\n// const ball = new Ball([canvas.width / 2, canvas.height - 15], [1, 1]);\n\nfunction play(){\n  c.clearRect(0, 0, canvas.width, canvas.height);\n  drawBricks();\n  ball.draw();\n  if (spacePressed){\n    ball.x += ball.dx;\n    console.log('space is pressed');\n    ball.y -= ball.dy;\n  }\n  // ball.update();\n  // wallCollision();\n  drawScore();\n  // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){\n  //   dx = -dx;\n  // }\n  // if (y + dy < ballRadius){\n  //   dy = -dy;\n  // } else if (y + dy > canvas.height-ballRadius){\n  //   if (x > paddleX && x < paddleX + paddleWidth){\n  //     dy = -dy;\n  //   } else {\n  //     alert(\"GAME OVER\");\n  //     document.location.reload();\n  //   }\n  // }\n  \n  // if (rightPressed && paddleX < canvas.width-paddleWidth){\n  //   paddleX += 7;\n  // } else if (leftPressed && paddleX > 0) {\n  //   paddleX -= 7;\n  // }\n  // x += dx;\n  // y += dy;\n}\n\nsetInterval(play, 15);\n// function Circle(x, y, dx, dy, radius){\n  //   this.x = x;\n  //   this.y = y;\n  //   this.dx = dx;\n  //   this.dy = dy;\n//   this.radius = radius;\n\n//   this.draw = function() {\n//     c.beginPath();\n//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n//     c.strokeStyle = \"orange\";\n//     c.stroke();\n//     c.fill();\n//   }\n\n//   this.update = function() {\n//     if (this.x + this.radius > 500 || this.x - this.radius > 0){\n//       this.dx = -this.dx;\n//     }\n//     if (this.y + this.radius > 500 || this.y - this.radius > 0){\n//       this.dy = -this.dy;\n//     }\n//     this.x += this.dx;\n//     this.y += this.dy;\n\n//     this.draw();\n//   }\n// }\n\n// function animate(){\n//   requestAnimationFrame(animate);\n  \n// }\n\n// animate();\n\n\n// Bricks\n// draw() {\n//   this.c.beginPath();\n//   this.c.rect(this.x, this.y, this.height, this.width);\n//   this.c.fillStyle = \"#0095DD\";\n\n//   this.c.fill();\n//   this.c.closePath();\n// }\n\n//# sourceURL=webpack:///./lib/canvas.js?");

/***/ }),

/***/ "./lib/wall_collision.js":
/*!*******************************!*\
  !*** ./lib/wall_collision.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const wallCollision = (box, other) => {\n//     const boxX = box.pos[0];\n//     const boxY = box.pos[1];\n//     const oX = other.pos[0];\n//     const oY = other.pos[1];\n//     const oH = other.height;\n//     const oW = other.width;\n\n//     if (boxX < oX + oW &&\n//         boxX + box.width > oX &&\n//         boxY < oY + oH &&\n//         boxY + box.height > oY) {\n//         // collision detected!\n//     }\n\n\n\n// };\n\n// export default wallCollision;\n\n//# sourceURL=webpack:///./lib/wall_collision.js?");

/***/ })

/******/ });