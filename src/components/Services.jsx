import { Grid, Box } from "@mui/material";
import React from "react";
import Custocard from "./Custocard";

const services = [
  {
    id: "1",
    title: "Property Listing",
    path: "/listing.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum ipsum aut alias id, dolorem maiores, in quia expedita quos ad repellendus vero voluptatem, error libero adipisci aliquam pariatur eligendi!",
  },
  {
    id: "2",
    title: "Marketing",
    path: "/marketing.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem earum ipsum aut alias id, dolorem maiores, in quia expedita quos ad repellendus vero voluptatem, error libero adipisci aliquam pariatur eligendi!",
  },
  {
    id: "3",
    title: "Property Rental",
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
            key={service.id}
            title={service.title}
            description={service.description}
            path={service.path}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
