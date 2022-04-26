import React from "react";
import { Typography } from "@material-ui/core";

const Aboutpage = () => {
  return (
    <div
      style={{
        margin: "150px 20px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <img src="" />
      </div>
      <div>
        <Typography variant="h4">About Us</Typography>
        <Typography variant="body1">
          Emeka Amadi provides quality service to build relationships with
          clients and more importantly, maintain those relationships by
          communicating effectively. His business is based on more than 70
          percent referrals from satisfied clients. Most important to Emeka is
          providing the most excellent service to buyers and sellers in order to
          earn their trust, referrers and repeat business. Outside real estate,
          I take pride in being an educational instructor, a position I've
          delightfully held since 2006. This has instilled in me the discipline
          it takes to effectively recognise and value the trust my clients
          placed in me even as I strive everyday to exceed their expectations.
        </Typography>
      </div>
    </div>
  );
};

export default Aboutpage;
