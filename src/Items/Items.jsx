import React from "react";
import { IoStar } from "react-icons/io5";
import "./Items.css";
import { Link } from "react-router-dom";
export const Items = (props) => {
  return (
    <div className="item">
      <Link to={`/Course_page/${props.id}`}>
        <img
          alt="item_img"
          className="item_img"
          src={props.image}
          onClick={window.scrollTo(0, 0)}
        />{" "}
      </Link>
      <span className="course_code">{props.code}</span>
      <span className="course_name"> {props.name}</span>
      <span className="course_rating">
        <IoStar style={{ color: "gold" }} />
        {props.rating}
      </span>
    </div>
  );
};
