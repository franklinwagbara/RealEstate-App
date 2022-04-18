import banner from "../assets/images/banner.jpg";
import { Box, duration, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          marginBottom: "50px",
        }}
      >
        <Box
          data-aos="fade-left"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.364)",
            padding: "4rem",
            overflow: "hidden",
            minWidth: "70%",
          }}
        >
          <Typography data-aos="fade" variant="h2" color="white">
            WELCOME TO MEKSONS REALTY
          </Typography>
          <Typography data-aos="fade" variant="h5" color="#fcfcfcd9">
            Meksons is an innovative real estate company operating in Africa
            that helps to ensure your success in this super-competitive
            market...
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
