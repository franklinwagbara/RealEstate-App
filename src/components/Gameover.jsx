import React from "react";
import { Button } from "@mui/material";

const Gameover = ({ winner, onRestart }) => {
  return (
    <>
      <Button variant="text" color="secondary">
        Game Over!
      </Button>
      <br />
      <Button variant="outlined">Player {winner} is the winner!</Button>
      <br />
      <Button variant="contained"> Restart Game</Button>
    </>
  );
};

export default Gameover;
