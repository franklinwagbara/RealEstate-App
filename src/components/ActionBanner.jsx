import banner from "../assets/images/banner1.jpg";
import { Box, Button, Typography } from "@mui/material";

const ActionBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "500px",
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "50px",
        margin: "40px 0px",
      }}
    >
      <Box
        data-aos="fade-left"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          /* alignContent: "center", */
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.364)",
          padding: "4rem",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography data-aos="fade-in" variant="h2" color="white">
          Discover Our Service Offerings
        </Typography>
        <Typography data-aos="fade-in" variant="h5" color="#fcfcfcd9">
          We offer a wide range of services in the Real Estate space. You are
          welcome to explore our services...
        </Typography>
        <Button
          sx={{
            marginTop: "40px",
            "&:hover": {
              background: "transparent",
              border: "2px solid white",
            },
          }}
          color="secondary"
          variant="contained"
        >
          Explore Services
        </Button>
      </Box>
    </Box>
  );
};

export default ActionBanner;
