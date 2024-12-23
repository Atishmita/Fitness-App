import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.js";
import { FaArrowRight } from "react-icons/fa";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span>Explore our Programs</span>
        <span>to shape you</span>
        <div className="header-line"></div>
      </div>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.icon}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Programs;