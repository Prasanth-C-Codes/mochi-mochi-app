import React from "react";
import Banners from "../components/Banners";
import { ProductsList } from "../components/ProductsList";
import { cakes, sweets } from "../database/db";

const Home = () => {
  return (
    <>
      <Banners />
      <ProductsList title="Cakes" data={cakes} />
      <ProductsList title="Sweets" data={sweets} />
    </>
  );
};

export default Home;
