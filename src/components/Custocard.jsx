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
import { HashLink as Link } from "react-router-hash-link";
import "../Aos.config";

const Custocard = ({ title = "", description = "", path }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        /* alignContent: "center", */
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
        /* alignContent="center" */
        textOverflow={true}
      >
        <Card
          color="secondary"
          /* alignContent={"center"} */
          /* alignItems={"center"} */
          elevation={3}
        >
          <CardMedia
            sx={{
              height: "220px",
              width: "190px",
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
          <CardHeader sx={{ color: "primary.dark" }} title={title} />
          <CardContent>
            <Typography color="GrayText">{description}</Typography>
          </CardContent>
          <CardActions>
            <Link to="#contact" smooth>
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
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default Custocard;
