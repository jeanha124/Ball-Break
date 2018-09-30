const wallCollision = (box, other) => {
    const boxX = box.pos[0];
    const boxY = box.pos[1];
    const oX = other.pos[0];
    const oY = other.pos[1];
    const oH = other.height;
    const oW = other.width;

    if (boxX < oX + oW &&
        boxX + box.width > oX &&
        boxY < oY + oH &&
        boxY + box.height > oY) {
        // collision detected!
    }



};

export default wallCollision;