import React, { useState, useEffect } from "react";

const useBoard = (size = 3) => {
  const [board, setBoard] = useState([]);
  const [isXNext, setIsXNext] = useState(true);

  function calculateWinner() {
    //scan rows
    let isWinner = true;
    for (let y = 0; y < size; y++) {
      const temp = board[y][0];
      if (temp === null) continue;

      for (let x = 1; x < size; x++) {
        if (board[y][x] !== temp) isWinner = false;
      }
      if (isWinner) return temp;
    }

    //scan columns
    /* isWinner = true;
    for (let y = 0; y < size; y++) {
      const temp = board[y][0];
      if (temp === null) continue;

      for (let x = 1; x < size; x++) {
        if (board[y][x] !== temp) isWinner = false;
      }
      if (isWinner) return temp;
    } */
    return null;
  }

  function createBoard() {
    let newBoard = new Array(size).fill(null);

    newBoard = newBoard.map(() => new Array(size).fill(null));
    setBoard(newBoard);

    return newBoard;
  }

  function onPlace(x, y) {
    if (board[y][x] !== null || calculateWinner() === null) return;

    const tempBoard = [...board];

    tempBoard[y][x] = isXNext ? "X" : "O";
    setBoard(tempBoard);
    setIsXNext((prev) => !prev);
  }

  useEffect(() => {
    createBoard();
  }, []);

  return [board, setBoard, createBoard, onPlace, isXNext, calculateWinner];
};

export default useBoard;
