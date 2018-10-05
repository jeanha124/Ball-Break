class Brick {
    constructor(pos, locationPos, status, life) {
        this.x = pos[0];
        this.y = pos[1];
        this.height = 45;
        this.width = 45;
        this.life = life;
        this.status = status;
        this.locX = locationPos[0];
        this.locY = locationPos[1];
        // const canvas = document.getElementById('myCanvas');
        // this.c = canvas.getContext('2d');
    }
    existingBlock () {
        if (this.status === 'healthy'){
            return true;
        }
        return false;
    }
    
}

export default Brick;


