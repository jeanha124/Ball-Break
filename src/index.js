const canvasWidth = 850;
const canvasHeight = 600;

const canvas = document.getElementById('myCanvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext('2d');

const umbreonWidth = 559;
const umbreonHeight = 168;

const evoCols = 4;

const trackRight = 0;
const trackLeft = 0;
let right = false;
let left = false;
