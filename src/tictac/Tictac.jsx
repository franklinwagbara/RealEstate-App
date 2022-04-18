import { Button } from "@mui/material";
import React, { useState, useEffect, createContext } from "react";
import useBoard from "./Hook/useBoard";
import RenderRow from "./RenderRow";
import Gameover from "./Gameover";

export const PlaceContext = createContext();
const BoardSize = 4;

const Tictac = () => {
  const [board, setBoard, createBoard, onPlace, isXNext, calculateWinner] =
    useBoard(BoardSize);
  const [gameOver, setGameOver] = useState(false);

  console.log("re-rendering");

  useEffect(() => {
    if (calculateWinner() !== null) setGameOver(true);
    console.log("caluc", calculateWinner());
  }, [calculateWinner]);

  const renderBoard = () => {
    return (
      <>
        <Button variant="outlined">Player {isXNext ? "X" : "O"}'s turn</Button>
        {board.map((row, index) => (
          <RenderRow key={index} row={row} index={index} />
        ))}
      </>
    );
  };

  return (
    <PlaceContext.Provider value={onPlace}>
      {gameOver ? (
        <Gameover
          winner={calculateWinner()}
          /* onRestart={() => handleRestart()} */
        />
      ) : (
        renderBoard()
      )}
    </PlaceContext.Provider>
  );
};

export default Tictac;
