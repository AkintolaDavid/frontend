import React from "react";
import "./Free_courses.css";
import free_courses from "../Assets/free_courses";
import { useNavigate } from "react-router-dom";
import { Items } from "../Items/Items";
export const Free_courses = () => {
  const navigate = useNavigate();
  return (
    <div className="Free_courses">
      <div className="free_course_header">
        <h1>Free courses</h1>
        <span
          className="see_all"
          onClick={() => {
            navigate("/all");
          }}
          style={{ cursor: "pointer" }}
        >
          See All
        </span>
      </div>
      <div className="free_collections">
        {free_courses.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
