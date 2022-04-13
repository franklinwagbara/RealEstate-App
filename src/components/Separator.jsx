import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Separator = ({ title = "", color = "secondary" }) => {
  return (
    <Box marginTop={10} marginBottom={5}>
      <Divider>
        <Box border={"1px solid #7777"} padding={4} fontWeight={700}>
          <Typography variant="h4" color={color}>
            {title}
          </Typography>
        </Box>
      </Divider>
    </Box>
  );
};

export default Separator;
