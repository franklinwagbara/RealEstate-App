import { Button } from "@mui/material";
import React, { useState, useEffect, createContext } from "react";
import useBoard from "./Hook/useBoard";
import RenderRow from "./RenderRow";

export const PlaceContext = createContext();
const BoardSize = 3;

const Tictac = () => {
  const [board, setBoard, createBoard, onPlace, isXNext, calculateWinner] =
    useBoard(BoardSize);
  const [gameOver, setGameOver] = useState();

  return (
    <PlaceContext.Provider value={onPlace}>
      <Button variant="outlined">Player {isXNext ? "X" : "O"}'s turn</Button>
      {board.map((row, index) => (
        <RenderRow key={index} row={row} index={index} />
      ))}
    </PlaceContext.Provider>
  );
};

export default Tictac;
