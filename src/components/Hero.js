import React from "react";
// import pGrid from "../images/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img src="./images/photo-grid.png" alt="pGrid" className="hero--photo"/>
      <h1 className="hero--header">Online experiences</h1>
      <p className="hero--text">
        Join unique interactive experiences led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
}

export default Hero;
