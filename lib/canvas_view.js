class CanvasView {
  constructor(canvas, c, game){
    this.canvas = canvas;
    this.c = c;
    this.game = game;
    document.addEventListener('mousemove', this.handleMouseMove, false);
    canvas.addEventListener('mousedown', this.handleMouseClick, false);

  }
  
  handleMouseMove(e) {
    let withinCanvasX = e.x - this.canvas.offsetLeft;
    let withinCanvasY = e.y - this.canvas.offsetTop;

    this.c.beginPath();
    this.c.setLineDash([10, 15]);
    this.c.moveTo(this.canvas.width/2, this.canvas.height - 40);
    this.c.lineTo(withinCanvasX, withinCanvasY);
    this.c.stroke();
  }

  handleMouseClick(e) {
    let mouseClickX = e.x - this.canvas.offsetLeft;
    let mouseClickY = e.x - this.canvas.offsetTop;

    this.game.dx = mouseClickX - this.canvas.width/2;
    this.game.dy = mouseClickY - 570/100;
  }

  

}

