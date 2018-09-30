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

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.getElementById('myCanvas');\nconst c = canvas.getContext('2d');\nlet x = canvas.width/2;\nlet y = canvas.height-30;\nlet dx = 2;\nlet dy = -2;\nlet ballRadius = 10;\nlet paddleHeight = 10;\nlet paddleWidth = 75;\nlet paddleX = (canvas.width-paddleWidth/2);\nlet rightPressed = false;\nlet leftPressed = false;\nlet brickRowCount = 6;\nlet brickColumnCount = 8;\nlet brickWidth = 45;\nlet brickHeight = 45;\nlet brickPadding = 2;\nlet brickOffsetTop = 60;\nlet brickOffsetLeft = 60;\nlet score = 0;\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\nfunction keyDownHandler(e){\n  if (e.keyCode == 39){\n    rightPressed = true;\n  } else if (e.keyCode == 37) {\n    leftPressed = true;\n  }\n}\n\nfunction drawScore(){\n  c.font = \"16px Arial\";\n  c.fillStyle = \"#0095DD\";\n  c.fillText(\"Score: \" + score, 8, 20);\n}\nfunction keyUpHandler(e){\n  if (e.keyCode == 39) {\n    rightPressed = false;\n  } else if (e.keyCode == 37){\n    leftPressed = false;\n  }\n  \n}\n\nfunction collisionDetection(){\n  for(let i = 0; i < brickColumnCount; i++){\n    for(let j = 0; j < brickRowCount; j++){\n      let b = bricks[i][j];\n      if (b.status == 1){\n        if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){\n          dy = -dy;\n          dx = -dx;\n          b.status = 0;\n          score++;\n          if (score == brickRowCount * brickColumnCount){\n            alert(\"You Win, Congratulations!\");\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\n// canvas.width = window.innerWidth;\n// canvas.height = window.innerHeight;\nlet bricks = [];\nfor (let i= 0; i < brickColumnCount; i++){\n  bricks[i] = [];\n  for (let j = 0; j < brickRowCount; j++){\n    bricks[i][j] = { x: 0, y: 0, status: 1 };\n  }\n}\n\nfunction drawBricks(){\n  for (let i = 0; i < brickColumnCount; i++){\n    for (let j = 0; j < brickRowCount; j++){\n      if (bricks[i][j].status == 1){\n        let brickX = (i * (brickWidth + brickPadding)) + brickOffsetLeft;\n        let brickY = (j * (brickHeight + brickPadding)) + brickOffsetTop;\n        bricks[i][j].x = brickX;\n        bricks[i][j].y = brickY;\n        c.beginPath();\n        c.rect(brickX, brickY, brickWidth, brickHeight);\n        c.fillStyle = \"#0095DD\";\n        c.fill();\n        c.closePath();\n      }\n    }\n  }\n}\n\n\nfunction drawBall (){\n  c.beginPath();\n  c.arc(x, y, ballRadius, 0, Math.PI*2);\n  c.fillStyle = \"#0095DD\";\n  c.fill();\n  c.closePath();\n  \n}\nfunction drawPaddle(){\n  c.beginPath();\n  c.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);\n  c.fillStyle=\"#0095DD\";\n  c.fill();\n  c.closePath();\n}\nfunction draw(){\n  c.clearRect(0, 0, canvas.width, canvas.height);\n  drawBricks();\n  drawBall();\n  drawPaddle();\n  collisionDetection();\n  drawScore();\n  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){\n    dx = -dx;\n  }\n  if (y + dy < ballRadius){\n    dy = -dy;\n  } else if (y + dy > canvas.height-ballRadius){\n    if (x > paddleX && x < paddleX + paddleWidth){\n      dy = -dy;\n    } else {\n      alert(\"GAME OVER\");\n      document.location.reload();\n    }\n  }\n  \n  if (rightPressed && paddleX < canvas.width-paddleWidth){\n    paddleX += 7;\n  } else if (leftPressed && paddleX > 0) {\n    paddleX -= 7;\n  }\n  x += dx;\n  y += dy;\n}\n\nsetInterval(draw, 15);\n// function Circle(x, y, dx, dy, radius){\n  //   this.x = x;\n  //   this.y = y;\n  //   this.dx = dx;\n  //   this.dy = dy;\n//   this.radius = radius;\n\n//   this.draw = function() {\n//     c.beginPath();\n//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n//     c.strokeStyle = \"orange\";\n//     c.stroke();\n//     c.fill();\n//   }\n\n//   this.update = function() {\n//     if (this.x + this.radius > 500 || this.x - this.radius > 0){\n//       this.dx = -this.dx;\n//     }\n//     if (this.y + this.radius > 500 || this.y - this.radius > 0){\n//       this.dy = -this.dy;\n//     }\n//     this.x += this.dx;\n//     this.y += this.dy;\n\n//     this.draw();\n//   }\n// }\n\n// function animate(){\n//   requestAnimationFrame(animate);\n  \n// }\n\n// animate();\n\n\n\n//# sourceURL=webpack:///./lib/canvas.js?");

/***/ })

/******/ });