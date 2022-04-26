import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Separator = ({ id = "", title = "", color = "secondary" }) => {
  return (
    <div id={id}>
      <Box marginTop={10} marginBottom={5}>
        <Divider>
          <Box border={"1px solid #7777"} padding={4} fontWeight={700}>
            <Typography variant="h4" color={color}>
              {title}
            </Typography>
          </Box>
        </Divider>
      </Box>
    </div>
  );
};

export default Separator;
