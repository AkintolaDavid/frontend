import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
//
import { Button } from "@chakra-ui/react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import "./ContentPage.css";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";
import { IoLogOutOutline } from "react-icons/io5";
export const ContentPage = (props) => {
  const { userFullName, signOut } = useContext(ShopContext);
  const Navigate = useNavigate();
  const getInitials = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.split(" ");
    return parts[0].charAt(0) + (parts.length > 1 ? parts[1].charAt(0) : "");
  };
  const initials = getInitials(userFullName); // Call the getInitials function
  const handleSignOut = () => {
    signOut(); // Call the signOut function from context
    Navigate("/"); // Redirect to sign-in page
  };
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [activeModal, setActiveModal] = useState(null); // Track currently active modal (notification or message)
  const notificationDisclosure = useDisclosure();
  const messageDisclosure = useDisclosure();

  const handleNotification = () => {
    setActiveModal("notification");
    notificationDisclosure.onOpen();
  };

  const handleMessage = () => {
    setActiveModal("message");
    messageDisclosure.onOpen();
  };

  const handleCloseModal = () => {
    setActiveModal(null); // Reset active modal state
    notificationDisclosure.onClose();
    messageDisclosure.onClose(); // Close both modals
  };
  const [remainingTime, setRemainingTime] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(intervalId);
        console.log("Countdown finished!"); // Optional notification
        // You can add actions to perform when the countdown reaches zero here
      } else {
        setRemainingTime((prevTime) => {
          let newSeconds = prevTime.seconds - 1;
          let newMinutes = prevTime.minutes;
          let newHours = prevTime.hours;

          if (newSeconds === -1) {
            newSeconds = 59;
            newMinutes--;
          }

          if (newMinutes === -1) {
            newMinutes = 59;
            newHours--;
          }

          return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array to run the effect only once

  const formattedTime = `${remainingTime.hours
    .toString()
    .padStart(2, "0")}:${remainingTime.minutes
    .toString()
    .padStart(2, "0")}:${remainingTime.seconds.toString().padStart(2, "0")}`;

  return (
    <>
      <div className="user_detail_container">
        <div className="userdetail">
          <div className="userdetail_left">
            <div className="userprofileID">{initials}</div>
            <span className="username_detail">Hi, {userFullName}</span>
          </div>
          <div className="userdetail_right">
            <div className="usernotification">
              <IoNotificationsSharp onClick={() => handleNotification()} />
              <span className="notification-dot"></span>
            </div>
            {/* <div className="usermessage">
            <FaMessage onClick={() => handleMessage()} />
            <span className="message-dot"></span>
          </div> */}
            <div className="usersignout">
              <IoLogOutOutline
                onClick={handleSignOut}
                style={{ fontSize: "25px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="explore">
        <span className="explore_text">Explore over 200 courses for free</span>
        <span className="search_text">
          Search for courses of your interest below
        </span>
        <div className="course_category">
          {" "}
          <Link to="/all" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="all">All</div>
          </Link>{" "}
          <Link
            to="/science_tech"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="science_tech">Science&Tech</div>
          </Link>{" "}
          <Link
            to="/engineering"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="engineering">Engineering </div>
          </Link>{" "}
          <Link
            to="/social_science"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="social_science">Social science </div>
          </Link>{" "}
          <Link to="/law" style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <div className="law">Law</div>
          </Link>{" "}
          <Link
            to="/health_care"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="health_care">Health Care</div>
          </Link>
        </div>
      </div>

      {activeModal === "notification" && (
        <Modal
          finalFocusRef={finalRef}
          isOpen={notificationDisclosure.isOpen}
          onClose={handleCloseModal}
        >
          <ModalContent className="not_modalcontent">
            <ModalHeader className="not_modalheader">Notifications</ModalHeader>

            <ModalBody className="not_modalbody">
              <div className="not_modalbody_div">
                MEC322 TEST DUE IN {formattedTime}
              </div>

              <div className="not_modalbody_div">EIE212 TEST DUE Tomorrow</div>
              <div className="not_modalbody_div">HSC101 TEST DUE IN 2 DAYS</div>
              <div className="not_modalbody_div">MEC322 TEST DUE IN 2 DAYS</div>

              <div className="not_modalbody_div">CS415 TEST DUE IN 2 DAYS</div>
              <div className="not_modalbody_div">APH423 TEST DUE IN 3 DAYS</div>
              <div className="not_modalbody_div">BIO111 TEST DUE IN 3 DAYS</div>

              <div className="not_modalbody_div">CHM211 TEST DUE IN 3 DAYS</div>
              <div className="not_modalbody_div">PSI313 TEST DUE IN 4 DAYS</div>
              <div className="not_modalbody_div">GEC117 TEST DUE IN 5 DAYS</div>

              <div className="not_modalbody_div">EIE212 TEST DUE IN 5 DAYS</div>
              <div className="not_modalbody_div">PSY121 TEST DUE IN 5 DAYS</div>
            </ModalBody>
            <ModalFooter className="not_modalfooter">
              <Button onClick={handleCloseModal} className="not_modalbutton">
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {activeModal === "message" && (
        <Modal
          finalFocusRef={finalRef}
          isOpen={messageDisclosure.isOpen}
          onClose={handleCloseModal}
        >
          <ModalContent className="mess_modalcontent">
            <ModalHeader color="black" fontSize="1.3rem">
              Messages
            </ModalHeader>

            <ModalBody>{/* Message content here */}</ModalBody>
            <ModalFooter>
              <Button onClick={handleCloseModal}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
