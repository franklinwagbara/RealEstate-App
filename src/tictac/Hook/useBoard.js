import React, { useState, useEffect } from "react";

const useBoard = (size = 3) => {
  const [board, setBoard] = useState([]);
  const [isXNext, setIsXNext] = useState(true);

  function calculateWinner() {
    if (board.length === 0) return null;
    //scan rows
    let isWinner = true;
    for (let y = 0; y < size; y++) {
      const temp = board[y][0];
      if (temp === null) continue;

      for (let x = 1; x < size; x++) {
        if (board[y][x] !== temp) isWinner = false;
      }
      if (isWinner) return temp;
      else isWinner = true;
    }

    //scan columns
    isWinner = true;
    for (let x = 0; x < size; x++) {
      const temp = board[0][x];
      if (temp === null) continue;

      for (let y = 1; y < size; y++) {
        if (board[y][x] !== temp) isWinner = false;
      }
      if (isWinner) return temp;
      else isWinner = true;
    }

    //diagonal topLeft to bottomRight
    isWinner = true;
    for (let y = 0; y < size; y++) {
      if (
        board[0][0] === null ||
        board[y][y] === null ||
        board[y][y] !== board[0][0]
      ) {
        isWinner = false;
        break;
      }
    }
    if (isWinner) return board[0][0];

    //diagonal bottomLeft to topRight
    isWinner = true;
    for (let y = size - 1; y >= 0; y--) {
      if (
        board[0][size - 1] === null ||
        board[size - 1 - y][y] === null ||
        board[size - 1 - y][y] !== board[0][size - 1]
      ) {
        isWinner = false;
        break;
      }
    }
    if (isWinner) return board[0][size - 1];

    return null;
  }

  function createBoard() {
    let newBoard = new Array(size).fill(null);

    newBoard = newBoard.map(() => new Array(size).fill(null));
    setBoard(newBoard);
    setIsXNext(true);

    return newBoard;
  }

  function onPlace(x, y) {
    console.log("onplace", x, y);
    if (board[y][x] !== null || calculateWinner() !== null) return;

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
