import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1109);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1109);
    window.addEventListener("resize", handleResize); // Add event listener on mount

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <>
      {isMobile ? (
        <>
          <div className="mobile_main_container">
            <div className="mobile_itga">
              <span className="welcome_itga">WELCOME TO ITGA</span>
              <span className="itga_text">
                Taking the world’s best courses online from
              </span>
              <span className="itga_text">
                your university and industry partners
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="loginpage_username">USERNAME</span>
              <input
                type="text"
                placeholder="username"
                className="loginpage_password_input"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="loginpage_password">PASSWORD</span>
              <input
                type="password"
                placeholder="password"
                className="loginpage_password_input"
              />
            </div>
            <div className="submit_btn">
              <button className="submit_signin">SIGN IN</button>
            </div>
            <div className="remember_forget">
              <div className="remember">
                <input type="checkbox" />
                <span className="remember_text">Remember Me</span>
              </div>
              <Link className="forgot-password-link" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="signin_with">
              <span>Sign In with</span>
              <div className="signin_with_options">
                <div
                  className="signin_with_options_logo"
                  style={{ fontSize: "54px", cursor: "pointer" }}
                >
                  <IoLogoApple />
                </div>
                <div
                  className="signin_with_options_logo"
                  style={{ fontSize: "45px", cursor: "pointer" }}
                >
                  <FcGoogle />
                </div>
                <div
                  className="signin_with_options_logo"
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                    color: "#1877F2",
                  }}
                >
                  <FaFacebook />
                </div>
              </div>
            </div>
            <div className="no_account">
              Don't have an account?{" "}
              <Link className="signup_link" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main_container">
            <div className="loginpage_container">
              <div className="signin_container">
                <span className="loginpage_signin">Sign In</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="loginpage_username">USERNAME</span>
                  <input
                    type="text"
                    placeholder="username"
                    className="loginpage_username_input"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="loginpage_password">PASSWORD</span>
                  <input
                    type="password"
                    placeholder="password"
                    className="loginpage_password_input"
                  />
                </div>
                <button className="submit_signin">SIGN IN</button>
                <div className="remember_forget">
                  <div className="remember">
                    <input type="checkbox" />
                    <span className="remember_text">Remember Me</span>
                  </div>
                  <Link className="forgot-password-link" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className="signin_with">
                  <span>Sign In with</span>
                  <div className="signin_with_options">
                    <div
                      className="signin_with_options_logo"
                      style={{ fontSize: "54px", cursor: "pointer" }}
                    >
                      <IoLogoApple />
                    </div>
                    <div
                      className="signin_with_options_logo"
                      style={{ fontSize: "45px", cursor: "pointer" }}
                    >
                      <FcGoogle />
                    </div>
                    <div
                      className="signin_with_options_logo"
                      style={{
                        fontSize: "40px",
                        cursor: "pointer",
                        color: "#1877F2",
                      }}
                    >
                      <FaFacebook />
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup_container">
                <span className="welcome_to_itga">WELCOME TO ITGA</span>
                <span className="new_to_itga">Are you new to ITGA?</span>
                <button className="signup_to_itga">
                  {" "}
                  <Link to="/signup" className="signup_link">
                    SIGN UP
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
