import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";
import { MdRemoveRedEye } from "react-icons/md";

export const LoginPage = () => {
  const { updateUserFullName } = useContext(ShopContext);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1109);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1109);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://server-6mme.onrender.com/api/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber, password }),
        }
      );

      if (response.ok) {
        // Login successful, redirect to landing page
        const userData = await response.json();
        const fullName = userData.firstName + " " + userData.lastName;
        console.log(fullName);
        updateUserFullName(fullName.toUpperCase());
        navigate("/landingPage");
      } else {
        // Handle authentication error (e.g., show error message)
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // if (!validatePhoneNumber(phoneNumber) || !validatePassword(password)) {
  //   console.error("Please enter a valid phone number and password");
  //   return;
  // }

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
              <span className="loginpage_username">PHONE NUMBER</span>
              <input
                type="text"
                placeholder="phone number"
                className="loginpage_password_input"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="loginpage_password">PASSWORD</span>
              <div className="loginpage_password_input">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MdRemoveRedEye
                  onClick={togglePasswordVisibility}
                  style={{ fontSize: "20px" }}
                />
              </div>
            </div>
            <div className="submit_btn">
              <button className="submit_signin" onClick={handleLogin}>
                {" "}
                SIGN IN
              </button>
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
            <Link className="signup_link" to="/signup">
              <div className="no_account">Don't have an account? Sign Up</div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="main_container">
            <div className="loginpage_container">
              <div className="signin_container">
                <span className="loginpage_signin">Sign In</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="loginpage_username">PHONE NUMBER</span>
                  <input
                    type="text"
                    placeholder="phone number"
                    className="loginpage_password_input"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="loginpage_password">PASSWORD</span>
                  <div className="loginpage_password_input">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MdRemoveRedEye
                      onClick={togglePasswordVisibility}
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </div>
                <button className="submit_signin" onClick={handleLogin}>
                  {" "}
                  SIGN IN
                </button>
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
                <Link to="/signup" className="signup_link">
                  <button className="signup_to_itga"> SIGN UP</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
