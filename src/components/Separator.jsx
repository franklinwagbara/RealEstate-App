import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Separator = ({ title = "" }) => {
  return (
    <Box marginTop={10} marginBottom={5}>
      <Divider>
        <Box border={"1px solid #7777"} padding={4}>
          <Typography variant="h4" color="inherit">
            {title}
          </Typography>
        </Box>
      </Divider>
    </Box>
  );
};

export default Separator;
