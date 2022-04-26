import "../Aos.config";
import React from "react";
import "./styles/aboutpage.scss";
//import "./styles/about.css";
import ProfilePic from "../assets/images/profile.jpg";
import { Typography } from "@mui/material";
import "../Aos.config";

const Aboutpage = () => {
  return (
    <div data-aos="fade" className="about">
      <div>
        <img src={ProfilePic} />
      </div>
      <div>
        <Typography
          data-aos="fade-right"
          color="primary.dark"
          align="center"
          variant="h3"
        >
          ABOUT ME
        </Typography>
        <Typography
          data-aos="fade-up"
          color="primary.dark"
          component={"p"}
          variant="h5"
        >
          Emeka Amadi provides quality service to build relationships with
          clients and more importantly, maintain those relationships by
          communicating effectively. His business is based on more than 70
          percent referrals from satisfied clients. Most important to Emeka is
          providing the most excellent service to buyers import from 'aos'; and
          sellers in order to earn their trust, referrers and repeat business.
          Outside real estate, I take pride in being an educational instructor,
          a position I've delightfully held since 2006. This has instilled in me
          the discipline it takes to effectively recognise and value the trust
          my clients placed in me even as I strive everyday to exceed their
          expectations.
        </Typography>
      </div>
    </div>
  );
};

export default Aboutpage;
