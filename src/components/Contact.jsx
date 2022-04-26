import React from "react";
import {
  Stack,
  Button,
  Box,
  FormLabel,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Send } from "@material-ui/icons";
const Contact = () => {
  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "300px",
        margin: "50px 10px",
      }}
    >
      <Stack
        direction={"column"}
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "700px",
          },

          "& > *": {
            margin: "10px 0px",
          },
        }}
      >
        <TextField color="secondary" label="Full Name" />
        <TextField color="secondary" label="Email" />
        <TextField color="secondary" multiline rows={6} label="Message" />
        <Button
          sx={{
            width: "180px",
            height: "60px",
            margin: "auto",
            marginTop: "20px",
          }}
          variant="outlined"
          type="submit"
          color="secondary"
          endIcon={<Send />}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
