import React from "react";
import { ContentPage } from "../../ContentPage/ContentPage";
import { Popular_course } from "../../../Popular_course/Popular_course";
import { Free_courses } from "../../../Free_courses/Free_courses";
import { ShopContext } from "../../../Context/ShopContext";
import { useContext } from "react";
export const Landingpage = () => {
  const userFullName = useContext(ShopContext);

  console.log(userFullName.userFullName);
  return (
    <>
      <ContentPage />
      <Popular_course />
      <Free_courses />
    </>
  );
};
