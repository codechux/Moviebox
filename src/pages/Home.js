import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <FeaturedMovies />
      <Footer />
    </div>
  );
};

export default Home;
