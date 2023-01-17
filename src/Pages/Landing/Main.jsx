import React from "react";
import "./dist/CSS/Main.css";
import { useEffect } from "react";
import anime from "animejs";

const Main = () => {
  useEffect(() => {
    // Wrap every letter in a span
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml15 .word",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i,
      })
      .add({
        targets: ".ml15",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);
  return (
    <div>
      <div className="upperPart">
        <div className="introduction">
          Join our growing Meet a Mentor <br />
          community and connect to <br />
        </div>
        <h1 class="ml15">
          <span class="word">Out</span>
          <span class="word">now</span>
        </h1>
      </div>
    </div>
  );
};

export default Main;
