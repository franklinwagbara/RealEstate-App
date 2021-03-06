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
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Gridcard = ({ property }) => {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0px",
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
        width={300}
        display="flex"
        flexDirection={"row"}
        alignContent="center"
        textOverflow={true}
      >
        <Card color="secondary" elevation={3}>
          <CardMedia
            sx={{
              filter: "hue-rotate(160deg) contrast(120%) saturate(6)",
              transition: "transform 0.5s ease-in",

              "&:hover": {
                filter: "hue-rotate(0deg) contrast(100%) saturate(1)",
                cursor: "pointer",
                transform: "perspective(200px) translateZ(20px)",
              },
            }}
            src={require("../assets/images" + property.path)}
            component="img"
            alt="property"
          />
          <CardHeader title={property.title} subheader={property.price} />
          <CardContent>
            <Typography>{property.description}</Typography>
          </CardContent>
          <CardActions>
            <Link to="/#contact">
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "white",
                  },
                }}
                color="secondary"
                variant="outlined"
              >
                Enquire
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default Gridcard;
