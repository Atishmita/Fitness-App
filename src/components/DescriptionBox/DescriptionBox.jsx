import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quia
          aperiam ipsam voluptatem sint veritatis culpa odio, nemo nostrum
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          voluptates sed nobis! Facilis perspiciatis quasi neque repudiandae
        </p>
      </div>
    </div>
  );
}
export default DescriptionBox;