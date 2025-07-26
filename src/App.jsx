import { useState } from "react";
import "./App.css";
import Screen from "./components/Screen";
import questions from "./constants/questions";
import startScreenData from "./constants/startScreenData";
import Footer from "./components/Footer";

function App() {
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
    } // disabled button if < 0
  };

  return (
    <>
      <header></header>
      <main>
        <h1>
          Тест для оценки риска развития сахарного диабета 2 типа (шкала
          FINDRISC)
        </h1>
        <img src="src/assets/banner.png" alt="banner" className="banner" />
        <div className="question_block">
          {currentScreenType === "start" && (
            <Screen
              type="start"
              data={startScreenData}
              onClickNext={handleClickStart}
            />
          )}
          {currentScreenType === "question" && (
            <Screen
              type="question"
              data={questions[currentQuestionIndex]}
              questionsLength={questions.length}
              onClickNext={handleNext}
              onClickBack={handleBack}
            />
          )}
          {currentScreenType === "result" && (
            <Screen
              type="result"
              data={questions[currentQuestionIndex]}
              onClickNext={handleNext}
              onClickBack={handleBack}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
