import React, { useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./Course_display.css";
import { ShopContext } from "../Context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

export const Coursedisplay = (props) => {
  const { course } = props;
  const { userFullName } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      console.log(course.code);

      const response = await fetch(
        `https://server-5xl9.onrender.com/api/questions/${course.code}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching questions: ${response.statusText}`);
      }
      const data = await response.json();

      if (data && data.length > 0) {
        navigate(`/questions/:${course.code}`, {
          state: { questions: data, courseCode: course.code },
        }); // Navigate with questions as state
      } else {
        // Handle case where no questions are found
        console.log("No questions found for this course code");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <>
      <div className="coursedisplaybackarrow">
        <Link to="/landingPage">
          <IoArrowBack className="arrowbackcontent" />
        </Link>
      </div>
      <div className="course_display">
        <div className="course_display_name">Course Name: {course.name}</div>
        <div className="course_display_code">Course Code: {course.code}</div>
        <img src={course.image} className="course_display_image" alt="Course" />
        <div className="welcomebox">
          <h1 className="welcomebox_username">Welcome {userFullName}</h1>
          <span className="welcomebox_text">
            Over the next few minutes we’ll help you reach your very first
            milestone completing 3 exercises. if you complete 3 or more
            exercises in your first session, you’re twice as likely to complete
            the course
          </span>

          <button className="letsgo" onClick={handleClick}>
            Let's Go
          </button>
        </div>
      </div>
    </>
  );
};
