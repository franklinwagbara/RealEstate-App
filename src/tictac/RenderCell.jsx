import React, { useContext } from "react";
import { Button } from "@mui/material";
import { PlaceContext } from "./Tictac";

const RenderCell = ({ value = "", x, y }) => {
  const onPlace = useContext(PlaceContext);
  return (
    <>
      <Button
        sx={{
          borderRadius: "0",
          width: "50px",
          height: "50px",
        }}
        variant="outlined"
        onClick={() => onPlace(x, y)}
      >
        {value}
      </Button>
    </>
  );
};

export default RenderCell;
