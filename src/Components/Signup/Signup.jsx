import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
export const Signup = () => {
  return (
    <div className="signup_main">
      <div className="signup_main_container">
        <span className="signup_text">SIGN UP</span>
        <div className="signup_firstname">
          <input
            type="text"
            placeholder="First Name"
            className="signup_firstname_input"
          />
        </div>
        <div className="signup_lastname">
          <input
            type="text"
            placeholder="Last Name"
            className="signup_lastname_input"
          />
        </div>

        <div className="signup_phone_number">
          <input
            type="number"
            placeholder="Enter Phone Number"
            className="signup_phone_number_input"
          />
        </div>
        <div className="signup_email">
          <input
            type="email"
            placeholder="E-mail"
            className="signup_email_input"
          />
        </div>
        <div className="signup_password">
          <input
            type="password"
            placeholder="Enter Password"
            className="signup_password_input"
          />
        </div>
        <div className="signup_confirm_password">
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup_confirm_password_input"
          />
        </div>
        <div className="submit_signup_btn">
          <button className="submit_signup">SIGN UP</button>
        </div>

        <div className="signup_agree">
          <input type="checkbox" />
          <span className="agree_text">
            You agree to our terms and privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};
