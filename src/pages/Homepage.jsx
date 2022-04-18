import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Properties from "../components/Properties";
import Separator from "../components/Separator";
import axios from "axios";
import ActionBanner from "./../components/ActionBanner";
import Services from "../components/Services";
import Footer from "./Footer";
import database from "../data/db.json";

const axiosApi = axios.create({
  baseURL: "https://meksons-realty.netlify.app/homepageproperties",
});

const Homepage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(database.homepageproperties);
    axiosApi
      .get("/")
      .then((resp) => setProperties(resp.data))
      .catch((resp) => {
        console.log(
          "Something went wrong while trying to fetch properties data"
        );
      });
  }, []);
  return (
    <>
      <Banner />
      <Separator title="FEATURED PROPERTIES" color="inherit" />
      <Properties properties={properties} />
      <ActionBanner />
      <Services />
      {/* Todo: contact */}
      <Footer />
    </>
  );
};

export default Homepage;
