class Ball {
    constructor (pos, delta) {
        this.x = pos[0];
        this.y = pos[1];
        this.dx = delta[0];
        this.dy = delta[1];
        // this.diameter = Math.PI * 2;
        this.radius = 10;
        this.angle = 0;
        // const canvas = document.getElementById('myCanvas');
        // this.c = canvas.getContext('2d');
    }

    draw () {
        this.c.fillStyle = "#000000";
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        // this.c.fillStyle = "#FF4500";
        // this.setTransform()
        this.c.closePath();
        this.c.fill();
    }

    update () {
    //    if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
    //     this.dx = -this.dx;
    //     }
    //    if (this.y + this.dy > this.canvas.height - this.radius || this.y + this.dy < this.radius) {
    //        this.dy = -this.dy;
    //    } 
        this.x += this.dx;
        this.y += this.dy;
    }
}

export default Ball;

// Collisions

// before collision, direction of the ball
// angle chosen by pressing left, right keys
// draw dotted line
// ball -> draw multiple ball and shooting in the same direction as the first


// leftside ball.y + brickHeight or wallHeight
// rightside ball.y + brickHeight or wallHeight
// bottom ball.x + brickWidth or wallWidth
// top ball.x + brickWidth or wallWidth

// ballRadius <-> wall

// bricks health -> random numbers -> subtract with each collision
// once ball hits the ground, the rest will pile up behind it
//  

