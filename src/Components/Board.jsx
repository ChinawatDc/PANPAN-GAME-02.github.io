import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  const handleSwipe = (direction) => {
    if (board.hasWon()) {
      return;
    }

    let boardClone = Object.assign(
      Object.create(Object.getPrototypeOf(board)),
      board
    );
    let newBoard = boardClone.move(direction);
    setBoard(newBoard);
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex} className="flex">
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        <div className="score-box">
          <div className="score-header">PUNTOS</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
      <div className="fixed bottom-4 left-0 right-0 flex flex-col items-center space-y-4 md:hidden">
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white p-4 rounded-full shadow-md"
            onClick={() => handleSwipe(1)}
          >
            Up
          </button>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white p-4 rounded-full shadow-md"
            onClick={() => handleSwipe(0)}
          >
            Left
          </button>
          <button
            className="bg-blue-500 text-white p-4 rounded-full shadow-md"
            onClick={() => handleSwipe(3)}
          >
            Down
          </button>
          <button
            className="bg-blue-500 text-white p-4 rounded-full shadow-md"
            onClick={() => handleSwipe(2)}
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
