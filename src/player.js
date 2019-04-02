class Player {
  constructor(options){
    this.pos = options.pos;
    this.sprite = new Image();
    this.sprite.src = '../assets/sprites/umbreon.png';
    this.walk = 0;
    this.walkingSpeed = options.walkingSpeed || 1;
    this.jump = false;
    this.jumpCount = 0;
    this.gameOver = false;
  }
  jump() {
    const speed = 10;
    const gravity = 0.4;
    if (this.jump) {
      if (this.jumpCount === 0) {
        this.pos[1] -= speed - gravity * this.jumpCount;
        this.jumpCount += 1;
      } else {

      }
    }
  }
  handleJump() {
    this.jump = true;
  } 
  draw(ctx) {
    ctx.clearRect(0, 0, 900, 400);
    const sprite = this.
  }
  update(ctx) {
    this.jump();
    this.draw(ctx);
  }
}