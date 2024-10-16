import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { BallMovement } from "./BallMovement";
import data from "../../data";
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroke";
import ResetBall from "./util/ResetBall";

let bricks = [];
let { ballObj, paddleProps, brickObj, player } = data;

export default function Board() {
  const canvasRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const ballImageRef = useRef(null);

  useEffect(() => {
    const ballImage = new Image();
    ballImage.src = '/assets/O.png';
    console.log(ballImage);
    ballImage.onload = () => {
      ballImageRef.current = ballImage;
      requestAnimationFrame(render);
    };
  }, []);

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    paddleProps.y = canvas.height - paddleProps.height;

    // Assign Bricks
    let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

    if (newBrickSet && newBrickSet.length > 0) {
      bricks = newBrickSet;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    PlayerStats(ctx, player, canvas);

    // Display Bricks
    bricks.map((brick) => {
      return brick.draw(ctx);
    });

    // Handle Ball Movement
    BallMovement(ctx, ballObj, ballImageRef.current);

    // Check all broken
    AllBroken(bricks, player, canvas, ballObj);

    if (player.lives === 0) {
      setIsGameOver(true);
      return; // Stop rendering when the game is over
    }

    // Ball and Wall Collision
    WallCollision(ballObj, canvas, player, paddleProps);

    // Brick Collision
    let brickCollision;

    for (let i = 0; i < bricks.length; i++) {
      brickCollision = BrickCollision(ballObj, bricks[i]);

      if (brickCollision.hit && !bricks[i].broke) {
        if (brickCollision.axis === "X") {
          ballObj.dx *= -1;
          bricks[i].broke = true;
        } else if (brickCollision.axis === "Y") {
          ballObj.dy *= -1;
          bricks[i].broke = true;
        }
        player.score += 10;
      }
    }

    Paddle(ctx, canvas, paddleProps);
    PaddleHit(ballObj, paddleProps);

    requestAnimationFrame(render);
  };

  const resetGame = () => {
    player.lives = 5;
    player.level = 1;
    player.score = 0;
    ResetBall(ballObj, canvasRef.current, paddleProps);
    bricks.length = 0;
    setIsGameOver(false);
    requestAnimationFrame(render);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(event) =>
        (paddleProps.x =
          event.clientX -
          (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
          paddleProps.width / 2 -
          10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
      <Modal
        isOpen={isGameOver}
        onRequestClose={resetGame}
        contentLabel="Game Over"
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }
        }}
      >
        <h2>Game Over!</h2>
        <p>Press ok to restart</p>
        <button onClick={resetGame}>OK</button>
      </Modal>
    </div>
  );
}
