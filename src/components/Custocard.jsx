import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { CardActions } from "@material-ui/core";
import "../Aos.config";

const Custocard = ({ title = "", description = "", path }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      xs={12}
      sm={6}
      md={4}
      item
    >
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
        }}
        width={320}
        display="flex"
        flexDirection={"row"}
        alignContent="center"
        textOverflow={true}
      >
        <Card
          color="secondary"
          alignContent={"center"}
          alignItems={"center"}
          elevation={3}
        >
          <CardMedia
            sx={{
              width: "200px",
              margin: "auto",
              transition: "transform 0.5s ease-in",

              "&:hover": {
                transform: "perspective(200px) translateZ(20px)",
              },
            }}
            src={require("../assets/images" + path)}
            component="img"
            alt="image"
          />
          <CardHeader title={title} />
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "white",
                },
              }}
              color="secondary"
              variant="contained"
            >
              Contact Us
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default Custocard;
