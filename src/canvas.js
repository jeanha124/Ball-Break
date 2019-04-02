const canvasWidth = 850;
const canvasHeight = 600;

// const eeveeWidth = 104;
// const eeveeHeight = 39;

// const jolteonWidth = 145;
// const jolteonHeight = 47;

// const vaporeonWidth = 183;
// const vaporeonHeight = 50;

// const flareonWidth = 152;
// const flareonHeight = 45;

// const espeonWidth = 175;
// const espeonHeight = 45;

const umbreonWidth = 559;
const umbreonHeight = 168;

const eRow = 1;
// const eCols = 3;
const evoCols = 4;

const trackRight = 0;
const trackLeft = 0;
let right = false;
let left = false;
// const eWidth = eeveeWidth/eCols;
// const jWidth = jolteonWidth/evoCols;

// const vWidth = vaporeonWidth/evoCols;

// const fWidth = flareonWidth/evoCols;

// const esWidth = espeonWidth/evoCols;

const uWidth = umbreonWidth/evoCols;

// let eCurrFrame = eCols - 1;
let evoCurrFrame = evoCols - 1;

// let eFrame = 3;
let evoFrame = 4;

let x = 0;
let y = 395;

let ctxX = 0;
let ctxY = 0;

let speed = 12;

const canvas = document.getElementById('myCanvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext('2d');

let fgW = 951;
let fgH = 100; 


let score = 0;
let best = 0;
let currentState;

let pokemon = {};
let trees = {};
// let eevee = new Image();
// let jolteon = new Image();
// let vaporeon = new Image();
// let flareon = new Image();
// let espeon = new Image();
let umbreon = new Image();
let background = new Image();
let foreground = new Image();
let foregpos = 0;
let spacebar = false;
document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyUp', keyUp, false);


foreground.src = "/Users/Jeanwoo/Desktop/App_Academy/Ball-Break/assets/sprites/grass-and-dirt-platforms.png";
background.src = "/Users/Jeanwoo/Desktop/App_Academy/Ball-Break/assets/sprites/background.png";
// eevee.src = "/Users/Jeanwoo/Desktop/App_Academy/Ball-Break/assets/sprites/eevee-.png";
// jolteon.src = "/Users/Jeanwoo/Desktop/App_Academy/Ball-Break/assets/sprites/jolteon.png";
// vaporeon.src = "./vaporeon.png";
// flareon.src = "./flareon.png";
// espeon.src = "./espeon.png";
umbreon.src = "/Users/Jeanwoo/Desktop/App_Academy/Ball-Break/assets/sprites/umbreon.png";

function keyDown(e) {
  // if (e.keyCode === 32){
  //   spacebar = true;
  // } else if (e.keyCode === 39){
  //   right = true;
  // } else if (e.keyCode === 37){
  //   left = true;
  // }
  switch(e.keyCode){
    case 39:
    right = true;
    break;
    case 37:
    left = true;
    break;
    case 32:
    spacebar = true;
    break;
  }
}

function keyUp(e) {
  // if (e.keyCode === 32){
  //   spacebar = false;
  // } else if (e.keyCode === 39){
  //   right = false;
  // } else if (e.keyCode === 37){
  //   left = false;
  // }
  switch (e.keyCode) {
    case 39:
      right = false;
      break;
    case 37:
      left = false;
      break;
    case 32:
      spacebar = false;
      break;
  }
}

function frameMovement() {
  // eCurrFrame = Math.abs(--eCurrFrame) % eFrame;
  evoCurrFrame = Math.abs(--evoCurrFrame) % evoFrame;
  
  ctxX = evoCurrFrame * uWidth;
  ctx.clearRect(x, y, uWidth, umbreonHeight);
  if (right && x < canvas.width - uWidth){
    x += speed;
  } else if (left && x > 0){
    x -= speed;
  }
}
function run () {
  let loop = () => {
    update();
    drawForeground();
    window.requestAnimationFrame(loop, canvas);
  }
  window.requestAnimationFrame(loop, canvas);
}
function update() {
  foregpos = (foregpos - 2) % 15;
}


function draw() {
  frameMovement();
  run();
  drawPokemon();

  if (spacebar){

  }
  // drawBackground();
  // drawBackground();
}
function drawForeground() {
  ctx.drawImage(foreground, 0, 0, fgW, fgH, -40, 500, fgW, fgH);
  // ctx.drawImage(foreground, 0, 0, foregpos + fgW, canvas.height - fgH, -40, 500, foregpos + fgW, canvas.height - fgH);

}
function drawPokemon() {
  ctx.drawImage(umbreon, ctxX, ctxY, uWidth, umbreonHeight, x, y, uWidth, umbreonHeight);
}
// function drawBackground() {
//   ctx.drawImage(background, 40, 40, 20, 20, 0, 300);
// }
setInterval(draw, 100);