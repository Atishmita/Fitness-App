import React from "react";
import "./Landing.css";
import Header from "../Header/Header";
export const Landing = () => {
  return (
    <div className="hero">
      <Header />
      <div className="left-h">
        <div className="hero-text">
          <div>
            <span>
              <em>Shape</em>{" "}
            </span>
            <span>
              <em>Your</em>
            </span>
          </div>
          <div>
            <span>
              <em>Ideal body</em>
            </span>
          </div>
        </div>
        <div className="hero-description">
          <span>Pain is Temporary, Pride is Forever.</span>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
        </div>
      </div>
    </div>
  );
};
