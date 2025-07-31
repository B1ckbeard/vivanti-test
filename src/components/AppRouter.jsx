import { useState } from "react";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";
import questions from "../constants/questions";
import ResultMetodology from "./ResultMetodology";
//import { motion, AnimatePresence  } from "framer-motion";

function AppRouter() {
  const [currentScreenType, setCurrentScreenType] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleClickStart = () => {
    setCurrentScreenType("question");
  };

  const handleClickNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else if (currentQuestionIndex === questions.length - 1) {
      setCurrentScreenType("result");
    }
  };

  const handleClickBack = () => {
    if (currentScreenType === "question" && currentQuestionIndex === 0) {
      setCurrentScreenType("start");
    }
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleClickMetodology = () => {
    setCurrentScreenType("metodology");
  };

  const handleClickRestart = () => {
    setCurrentScreenType("start");
    setCurrentQuestionIndex(0);
    localStorage.removeItem("diabetesAnswers");
  };

  const handleClickBackMetodology = () => {
    setCurrentScreenType("result");
  };

  return (
    <>
        {currentScreenType !== "metodology" && (
          <div className="mx-auto max-w-[1224px] h-auto bg-[#F0F0F5]">
            {currentScreenType === "start" && (
              <StartScreen onClick={handleClickStart} />
            )}
            {currentScreenType === "question" && (
              <QuestionScreen
                data={questions[currentQuestionIndex]}
                questionsLength={questions.length}
                onClickNext={handleClickNext}
                onClickBack={handleClickBack}
              />
            )}
            {currentScreenType === "result" && (
              <ResultScreen
                onShowMetodology={handleClickMetodology}
                onRestart={handleClickRestart}
              />
            )}
          </div>
        )}
        {currentScreenType === "metodology" && (
          <ResultMetodology onBack={handleClickBackMetodology} />
        )}
    </>
  );
}

export default AppRouter;
