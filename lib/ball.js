class Ball {
    constructor (pos, delta) {
        this.x = pos[0];
        this.y = pos[1];
        // this.dx = delta[0];
        // this.dy = delta[1];
        // this.diameter = Math.PI * 2;
        const canvas = document.getElementById('myCanvas');
        this.c = canvas.getContext('2d');
    }

    draw () {
        this.c.beginPath();
        this.c.arc(this.x, this.y, 15, 0, Math.PI * 2);
        this.c.fillStyle = "#0095DD";
        this.c.fill();
        this.c.closePath();
    }

    update () {
        this.x += this.dx;
        this.y += this.dy;
    }
}

export default Ball;