class Brick {
    constructor (pos) {
        this.x = pos[0];
        this.y = pos[1];
        const canvas = document.getElementById('myCanvas');
        this.c = canvas.getContext('2d');
    }
    draw () {
        this.c.beginPath();
        this.c.rect(this.x, this.y, 45, 45);
        this.c.fillStyle = "#0095DD";
        this.c.fill();
        this.c.closePath();
    }
}

export default Brick;


