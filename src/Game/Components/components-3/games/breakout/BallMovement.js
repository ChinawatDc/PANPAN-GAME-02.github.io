export const BallMovement = (ctx, ballObj, ballImage) => {
    ctx.clearRect(ballObj.x - 1, ballObj.y - 1, ballObj.width + 2, ballObj.height + 2); // Clear previous ball position
    ctx.drawImage(ballImage, ballObj.x, ballObj.y, ballObj.width, ballObj.height);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
};
