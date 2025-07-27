import { useState } from "react";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";
import questions from "../constants/questions";

function ScreenList() {
  const [currentScreenType, setCurrentScreenType] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleClickStart = () => {
    setCurrentScreenType("question");
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setCurrentScreenType("result");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="question_block">
      {currentScreenType === "start" && (
        <StartScreen onClick={handleClickStart} />
      )}
      {currentScreenType === "question" && (
        <QuestionScreen
          data={questions[currentQuestionIndex]}
          questionsLength={questions.length}
          onClickNext={handleNext}
          onClickBack={handleBack}
        />
      )}
      {currentScreenType === "result" && <ResultScreen />}
    </div>
  );
}

export default ScreenList;
