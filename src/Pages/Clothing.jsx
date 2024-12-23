import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import PopularMen from "../components/PopularMen/PopularMen";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import Newsletter from "../components/Newsletter/Newsletter";
const Clothing = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <PopularMen />
      <Offers />
      <NewCollections />
      <Newsletter/>
    </div>
  );
};
export default Clothing;