import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CTA />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
