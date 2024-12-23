import React from "react";
import "./Breadcrum.css";
import { FaAngleRight } from "react-icons/fa6";
const  Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <FaAngleRight /> SHOP <FaAngleRight />
      {product.category}
      <FaAngleRight /> {product.name}
    </div>
  );
};
export default Breadcrum;