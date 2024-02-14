import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Pricing from "../components/Pricing";
import Action from "../components/Action";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Pricing />
      <Action />
      <Footer />
    </div>
  );
};

export default Home;
