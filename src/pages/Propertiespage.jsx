import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import database from "../data/db.json";
import Properties from "./../components/Properties";

const Propertiespage = () => {
  const [properties, setProperties] = useState();

  useEffect(() => {
    setProperties(database.homepageproperties);
  }, []);
  return (
    <div style={{ marginTop: "120px", overflow: "hidden" }}>
      <Typography
        margin={"20px"}
        align="center"
        variant="h4"
        color="primary.dark"
      >
        OUR PROPERTIES
      </Typography>
      {properties && <Properties properties={properties} />}
    </div>
  );
};

export default Propertiespage;
