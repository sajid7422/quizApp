import React, { useEffect, useState } from "react";
import { QuizData } from "./QuizDummyData";
import "./LandingView.css"; // Import your CSS file

function LandingView() {
  const [queNo, setQuesNo] = useState(1);
  const [score, setscore] = useState(0);
  const [selectedAns, setSelectedAns] = useState("");
  const [correctAnswer, setCorrectanswer] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);
  const [tickColor, setTickcolor] = useState(null);

  useEffect(() => {}, [score]);

  const handleNext = () => {
    setTickcolor(null);
    setCorrectanswer(null);
    setQuesNo(queNo + 1);
    if (correctAnswer === selectedAns) {
      setscore(score + 1);
    }
  };

  const handleOption = (option, quiz, index) => {
    setTickcolor(index);
    setCorrectanswer(quiz.Answer);
    setSelectedAns(option);
  };

  const Showresult = () => {
    if (correctAnswer === selectedAns) {
      setscore(score + 1);
    }
    setDisplayResult(true);
  };

  return (
    <div>
      {!displayResult ? (
        <div className="quiz-container">
          <center className="quiz-header">{`Question ${queNo}/${QuizData.length}`}</center>
          <section className="quiz-questions">
            {QuizData.map((quiz, index) => {
              return (
                <div key={index} className={`question ${index + 1 === queNo ? "" : "hidden"}`}>
                  <div className="question-text">{quiz.Question}</div>
                  <div className="options">
                    {quiz.Options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <button
                          className={`button ${optionIndex === tickColor ? "selected" : ""}`}
                          onClick={() => handleOption(option, quiz, optionIndex)}
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
          <div className="quiz-controls">
            {queNo < QuizData.length ? (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="submit-button" onClick={Showresult}>
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="result">
          {`Your Score is ${score} out of ${QuizData.length}`}
        </div>
      )}
    </div>
  );
}

export default LandingView;
