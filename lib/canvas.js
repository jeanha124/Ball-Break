import Ball from './ball.js';
import Brick from './brick.js';

const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 6;
let brickColumnCount = 8;
let brickWidth = 45;
let brickHeight = 45;
let brickPadding = 2;
let brickOffsetTop = 60;
let brickOffsetLeft = 60;
let score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if (e.keyCode == 39){
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function drawScore(){
  c.font = "16px Arial";
  c.fillStyle = "#0095DD";
  c.fillText("Score: " + score, 8, 20);
}
function keyUpHandler(e){
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37){
    leftPressed = false;
  }
  
}

// function collisionDetection(){
//   for(let i = 0; i < brickColumnCount; i++){
//     for(let j = 0; j < brickRowCount; j++){
//       let b = bricks[i][j];
//       if (b.status == 1){
//         if (x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight){
//           dy = -dy;
//           dx = -dx;
//           b.status = 0;
//           score++;
//           if (score == brickRowCount * brickColumnCount){
//             alert("You Win, Congratulations!");
//             document.location.reload();
//           }
//         }
//       }
//     }
//   }
// }
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let bricks = [];
// for (let i= 0; i < brickColumnCount; i++){
//   bricks[i] = [];
//   for (let j = 0; j < brickRowCount; j++){
//     bricks[i][j] = { x: 0, y: 0, status: 1 };
//   }
// }
// bricks[i][j].x = brickX;
// bricks[i][j].y = brickY;

function drawBricks(){
  for (let i = 0; i < brickColumnCount; i++) {
    for (let j = 0; j < brickRowCount; j++) {
        let brickX = (i * (brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (j * (brickHeight + brickPadding)) + brickOffsetTop;
        let brick = new Brick([brickX, brickY]);
        bricks.push(brick);
        brick.draw();
    }
  }
}

const ball = new Ball([30, 30]);
function draw(){
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  ball.draw();
  // collisionDetection();
  drawScore();
  // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
  //   dx = -dx;
  // }
  // if (y + dy < ballRadius){
  //   dy = -dy;
  // } else if (y + dy > canvas.height-ballRadius){
  //   if (x > paddleX && x < paddleX + paddleWidth){
  //     dy = -dy;
  //   } else {
  //     alert("GAME OVER");
  //     document.location.reload();
  //   }
  // }
  
  // if (rightPressed && paddleX < canvas.width-paddleWidth){
  //   paddleX += 7;
  // } else if (leftPressed && paddleX > 0) {
  //   paddleX -= 7;
  // }
  // x += dx;
  // y += dy;
}

setInterval(draw, 15);
// function Circle(x, y, dx, dy, radius){
  //   this.x = x;
  //   this.y = y;
  //   this.dx = dx;
  //   this.dy = dy;
//   this.radius = radius;

//   this.draw = function() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = "orange";
//     c.stroke();
//     c.fill();
//   }

//   this.update = function() {
//     if (this.x + this.radius > 500 || this.x - this.radius > 0){
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > 500 || this.y - this.radius > 0){
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;

//     this.draw();
//   }
// }

// function animate(){
//   requestAnimationFrame(animate);
  
// }

// animate();

