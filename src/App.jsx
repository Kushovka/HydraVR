import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Connect from "./sections/Connect";
import About from "./sections/About";
import Cards from "./sections/Cards";
import Tech from "./sections/Tech";
import Testing from "./sections/Testing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Connect />
      <About />
      <Cards />
      <Tech />
      <Testing />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
