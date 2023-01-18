import React from "react";
import "./dist/CSS/animate.css";
import "./dist/CSS/lineIcons.css";
import "./dist/CSS/tailwind.css";
import "./dist/CSS/tiny-slider.css";
import "./dist/CSS/Main.css";
import "./dist/CSS/Style.css";
// import "./dist/js/Main.js";
import WOW from 'wow.js';
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Feature from "./Feature.jsx";
import Service from "./Service.jsx";
import Team from "./Team.jsx";
import Footer from "./Footer.jsx";
// import Main from "./dist/js/Main.js";

const Landing = () => {
  new WOW().init();
  return (
    <div>
      {/* <Main/> */}
      <Header />
      <Hero />
      <Service />
      <Feature />
      <Team />
      <Footer />
    </div>
  );
};

export default Landing;
