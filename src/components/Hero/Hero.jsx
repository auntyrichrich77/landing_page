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
          <div className="apply-today">
            <h2>Apply for a Loan Today</h2>
            <p>
              Get the financial boost you need. Quick and easy application
              process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
