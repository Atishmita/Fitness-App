import React from "react";
import "./Popular.css";
import data_product from "../../Assets/data";
import Item from "../Item/Item";
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-header">
        <div className="pop-head">
          <h1>POPULAR IN WOMEN</h1>
          <p>Uncover the latest in Women's fashion</p>
        </div>
        <button className="explore-btn">Explore More</button>
      </div>
      <div className="popular_item">
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
export default Popular;