import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./Questions.css";
const Questions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const questions = location.state?.questions || [];
  const courseCode = location.state?.courseCode || [];

  // Initialize state to store user answers
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  // Handle radio button change
  const handleAnswerChange = (index, selectedOption) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = selectedOption;
      return newAnswers;
    });
  };

  // Calculate total score
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const handleGoBack = () => {
    navigate("/all"); // Go back to Course Display
  };

  const [minutes, setMinutes] = useState(3); // Initial countdown duration (2 minutes)
  const [seconds, setSeconds] = useState(0);
  const handleSubmitAnswers = () => {
    const score = calculateScore();
    alert(`Your score: ${score} / ${questions.length}`);
    navigate("/landingpage"); // Navigate to landing page after clicking submit
  };
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else {
        clearInterval(intervalId);
        alert("Time is up!");
        handleSubmitAnswers();
      }
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [minutes, seconds]);

  return (
    <>
      <div className="questions_container">
        <div className="questions_header">
          <IoArrowBack className="back_button" onClick={handleGoBack} />

          <h1 className="questionscoursecode">{courseCode} Questions</h1>
          <div className="question_time">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        <ul>
          {questions.map((question, index) => (
            <div key={index} className="questions_container_ques_ans">
              <p className="questions_container_question">
                {index + 1}. {question.question}
              </p>
              <ul>
                {question.answerOptions.map((answerOption, optionIndex) => (
                  <li
                    key={optionIndex}
                    style={{ listStyle: "none" }}
                    className="questions_container_answer"
                  >
                    <label>
                      <input
                        type="radio"
                        value={answerOption}
                        checked={userAnswers[index] === answerOption}
                        onChange={() => handleAnswerChange(index, answerOption)}
                      />
                      {String.fromCharCode(65 + optionIndex)}. {answerOption}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
      <div className="questions_container_btn_container">
        <button
          onClick={() => handleSubmitAnswers()}
          className="questions_container_btn"
        >
          Submit Answers
        </button>
      </div>
    </>
  );
};

export default Questions;
