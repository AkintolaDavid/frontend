import React, { useContext } from "react";
import "./Coursecategory.css";
import { Items } from "../Items/Items";
import { ShopContext } from "../Context/ShopContext";
import { ContentPage } from "../Components/ContentPage/ContentPage";
export const Coursecategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // const { userfullname } = useContext(ShopContext);
  // console.log(userfullname);
  return (
    <>
      <ContentPage />
      <div className="coursecategorys">
        <div className="coursecategory_header">
          <h1>{props.category}</h1>
        </div>
        <div className="coursecategory_filtered">
          {all_product.map((item, i) => {
            if (props.category === item.category || props.category === "All") {
              return (
                <Items
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  code={item.code}
                  rating={item.rating}
                />
              );
            }
            return null; // Add this to handle cases where the condition isn't met
          })}
        </div>
      </div>
    </>
  );
};
