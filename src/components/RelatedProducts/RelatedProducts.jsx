import React from "react";
import "./RelatedProducts.css";
import data_product from '../../Assets/data'
import Item from "../Item/Item";
const RelatedProducts = () => {
  return (
    <div className="relpopularmen">
      <div className="relpopularmen-header">
        <div className="relpopmen-head">
          <h1>Related Products</h1>
          <p>Uncover the latest products</p>
        </div>
        <button className="relexplore-btn">Explore More</button>
      </div>
      <div className="relpopularmen_item">
        {data_product.map((itemrel, i) => {
          return (
            <Item
              key={i}
              id={itemrel.id}
              name={itemrel.name}
              desc={itemrel.desc}
              image={itemrel.image}
              new_price={itemrel.new_price}
              old_price={itemrel.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;