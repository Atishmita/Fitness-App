import React from "react";
import "./PopularMen.css";
import data_product from "../../Assets/data_men";
import Item from "../Item/Item";
const PopularMen = () => {
  return (
    <div className="popularmen">
      <div className="popularmen-header">
        <div className="popmen-head">
          <h1>POPULAR IN MEN</h1>
          <p>Uncover the latest in men's fashion</p>
        </div>
        <button className="explore-btn">Explore More</button>
      </div>
      <div className="popularmen_item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              desc={item.desc}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PopularMen;