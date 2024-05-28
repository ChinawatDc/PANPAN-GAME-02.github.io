import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const BoardView = () => {
  const [board, setBoard] = useState(new Board());
  const [playerName, setPlayerName] = useState("");
  const [Score, setScore] = useState([]);
  const [html, setHtml] = useState("");
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
    OnSave();
  };

  const saveScore = () => {
    if (playerName.trim() !== "") {
      const data = {
        playerName: playerName.trim(),
        score: board.score,
      };
      fetch(
        "https://panpan-game-default-rtdb.asia-southeast1.firebasedatabase.app/score.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (!data.error) {
            setOpen(false);
            setPlayerName("");
            setBoard(new Board());
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const viewScore = () => {
    fetch(
      "https://panpan-game-default-rtdb.asia-southeast1.firebasedatabase.app/score.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (!data.error) {
          const formattedData = Object.keys(data).map((key) => ({
            id: key,
            playerName: data[key].playerName,
            score: data[key].score,
          }));
          setScore(formattedData);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [open, setOpen] = React.useState(false);

  const OnSave = () => {
    setHtml("save");
    setOpen(true);
  };
  const CloseScore = () => {
    setBoard(new Board());
  };

  const View = () => {
    setHtml("view");
    viewScore();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <div className="details-box">
          <div className="resetButton" onClick={resetGame}>
            New Game
          </div>
          <div className="resetButton" onClick={View}>
            ดูคะแนน
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

        {/* <div className="flex justify-center gap-2 mt-4">
          <Button variant="contained" onClick={OnSave}>
            SAVE
          </Button>
        </div> */}

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

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {html === "save" ? (
            <>{"คุณต้องการบันทึก หรือไม่?"}</>
          ) : (
            <>{"ดูคะแนน"}</>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {html === "save" ? (
              <>
                <div className="player-name-form">
                  <div className="mb-4">
                    <TextField
                      label="กรอกชื่อ"
                      value={playerName}
                      fullWidth
                      required
                      onChange={(e) => setPlayerName(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center"></div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>ลำดับ</TableCell>
                          <TableCell>ชื่อ</TableCell>
                          <TableCell>คะแนน</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Score.sort((a, b) => b.score - a.score).map(
                          (data, index) => (
                            <TableRow key={data.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{data.playerName}</TableCell>
                              <TableCell>{data.score}</TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {html === "save" ? (
            <>
              <Button onClick={saveScore}>บันทึก</Button>
              <Button onClick={CloseScore}>ปิด</Button>
            </>
          ) : (
            <>
              <Button onClick={handleClose}>ปิด</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BoardView;
