import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

function Screen({
  type,
  data,
  questionsLength = null,
  onClickNext,
  onClickBack = null,
}) {
  switch (type) {
    case "start":
      return <StartScreen data={data} onClick={onClickNext} />;
    case "question":
      return (
        <QuestionScreen
          data={data}
          questionsLength={questionsLength}
          onClickNext={onClickNext}
          onClickBack={onClickBack}
        />
      );
    case "result":
      return <ResultScreen />;
    default:
      return <p>Default case</p>;
  }
}

export default Screen;
