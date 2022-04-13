import { Grid, Container } from "@mui/material";
import React from "react";
import Gridcard from "./Gridcard";

const Properties = ({ properties }) => {
  return (
    <Container>
      <Grid spacing={2} container>
        {properties.map((property) => (
          <Gridcard key={property.id} property={property} />
        ))}
      </Grid>
    </Container>
  );
};

export default Properties;
