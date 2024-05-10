import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Coursedisplay } from "../Course_display/Coursedisplay";

export const Course_page = () => {
  const { all_product } = useContext(ShopContext);
  const { courseId } = useParams();

  const course = all_product.find((e) => e.id === Number(courseId));

  return (
    <div>
      <Coursedisplay course={course} />
    </div>
  );
};
