import React from "react";
import "./Popular_course.css";
import popular_courses from "../Assets/popular_courses";
import { useNavigate } from "react-router-dom";
import { Items } from "../Items/Items";
export const Popular_course = () => {
  const navigate = useNavigate();
  return (
    <div className="Popular_courses">
      <div className="popular_course_header">
        <h1>Popular courses</h1>
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
      <div className="popular_collections">
        {popular_courses.map((item, i) => {
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
