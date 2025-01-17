import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="hero">
        <img src="hero.png" alt="" />
        <div className="gradient-overlay"></div>
        <div className="hero-container">
          <h1>Welcome to BraveLenders</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
