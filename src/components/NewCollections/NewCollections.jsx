import React from "react";
import "./NewCollections.css";
import new_collection from "../../Assets/new_collections";
import Item from "../Item/Item";
const NewCollections = () => {
  return (
    <div>
      <div className="new-collections">
        <div className="new-collections-header">
          <div className="newcol-head">
            <h1>New Collections For You</h1>
            <p>Uncover the latest collection in fashion</p>
          </div>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="collections">
          {new_collection.map((item1, i) => {
            return (
              <Item
                key={i}
                id={item1.id}
                name={item1.name}
                desc={item1.desc}
                image={item1.image}
                new_price={item1.new_price}
                old_price={item1.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default NewCollections;