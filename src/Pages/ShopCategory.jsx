import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { FaAngleDown } from "react-icons/fa6";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div
        className="shopcategory-banner"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
        <div className="shopcategory-left">
          <div className="shopcategory-text">
            <div>{props.bannerTitle}</div>
          </div>
          <div className="shopcategory-description">
            <span>{props.bannerDescription}</span>
          </div>
          <div className="shopcategory-latest-btn">
            <buttons>Shop Now</buttons>
          </div>
        </div>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <FaAngleDown />
        </div>
      </div>
      <div className="shopcategory_products">
        {all_product.map((popitem, i) => {
          if (props.category === popitem.category) {
            return (
              <Item
                key={i}
                id={popitem.id}
                name={popitem.name}
                desc={popitem.desc}
                image={popitem.image}
                new_price={popitem.new_price}
                old_price={popitem.old_price}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};
export default ShopCategory;