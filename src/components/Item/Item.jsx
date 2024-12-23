import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/shopping/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className="product-name">{props.name}</p>
      <p className="product-desc">{props.desc}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};
export default Item;