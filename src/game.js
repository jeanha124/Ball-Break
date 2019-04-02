const Player = require('./player');

class Game {
  constructor(gCanvas, btx, fgtx, ctx) {
    this.gCanvas = gCanvas;
    this.ctx = ctx;
    this.player = new Player({pos: [100, 200]});
  }
}