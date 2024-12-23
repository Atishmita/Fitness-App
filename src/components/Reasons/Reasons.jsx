import React from "react";
import "./Reasons.css";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import { CgGym } from "react-icons/cg";
import { TbGymnastics } from "react-icons/tb";
import { MdSportsGymnastics } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <span> Why choose us?</span>
        <div className="header-line"></div>
        <div className="details-r">
          <div>
            <CgGym className="icon" size={24} />
            <span>OVER 20+ EXPERT COACHES</span>
          </div>
          <div>
            <TbGymnastics className="icon" size={24} />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <TbYoga className="icon" size={24} />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <MdSportsGymnastics className="icon" size={24} />
            <span>WORKOUT ACCORDING TO YOUR BODY SHAPE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reasons;