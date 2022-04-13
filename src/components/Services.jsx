import { Grid, Box } from "@mui/material";
import React from "react";
import Custocard from "./Custocard";

const services = [
  {
    title: "Service 1",
    path: "/house.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum ipsum aut alias id, dolorem maiores, in quia expedita quos ad repellendus vero voluptatem, error libero adipisci aliquam pariatur eligendi!",
  },
  {
    title: "Service 2",
    path: "/house.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum ipsum aut alias id, dolorem maiores, in quia expedita quos ad repellendus vero voluptatem, error libero adipisci aliquam pariatur eligendi!",
  },
  {
    title: "Service 3",
    path: "/house.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum ipsum aut alias id, dolorem maiores, in quia expedita quos ad repellendus vero voluptatem, error libero adipisci aliquam pariatur eligendi!",
  },
];

const Services = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        {services.map((service) => (
          <Custocard
            title={services.title}
            description={service.description}
            path={service.path}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
