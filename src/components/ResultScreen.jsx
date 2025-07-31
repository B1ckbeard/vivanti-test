import { useState, useEffect } from "react";
import results from "../constants/resultScreenData";
import Button from "./Button";

function ResultScreen({ onShowMetodology, onRestart }) {
  const [answers, setAnswers] = useState([]);

  const calculateAgeScore = (age) => {
    if (age <= 45) return 0;
    if (age <= 54) return 2;
    if (age <= 64) return 3;
    return 4;
  };

  const calculateBMIScore = (bmi) => {
    if (bmi <= 25) return 0;
    if (bmi <= 30) return 1;
    return 3;
  };

  const calculateInputScores = () => {
    setAnswers((prevAnswers) => {
      return prevAnswers.map((ans) => {
        if (ans.score !== undefined) return ans;
        let score = 0;
        switch (ans.id) {
          case 1: // возраст
            score = calculateAgeScore(ans.value);
            break;
          case 2: // ИМТ
            score = calculateBMIScore(ans.value);
            break;
          default:
            score = 0;
        }
        return { ...ans, score };
      });
    });
  };

  useEffect(() => {
    const savedAnswers = localStorage.getItem("diabetesAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
      calculateInputScores();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTotalScore = () => {
    const totalScore = answers.reduce(
      (total, answer) => total + answer.score,
      0
    );
    return totalScore;
  };

  const getResult = () => {
    const totalScore = calculateTotalScore();
    if (totalScore < 7) return results[0];
    if (totalScore < 12) return results[1];
    if (totalScore <= 14) return results[2];
    if (totalScore <= 20) return results[3];
    return results[4];
  };

  return (
    <div className="p-[25px] max-[900px]:px-[18px] max-[900px]:pb-[0] flex max-[900px]:flex-col-reverse justify-between max-[900px]:items-center">
      <div className="text-left max-w-[820px]">

        <div className="mb-[40px] max-[900px]:mb-[32px]">
          <h4 className="text-[20px] leading-[28px] font-bold mb-[16px]">Результат</h4>
          <p className="text-[18px] leading-[24px] mb-[16px]">{getResult().risk}</p>
          <p className="text-[18px] leading-[24px]">
            {getResult().description}
          </p>
        </div>

        <div className="btn_group flex flex-row max-[900px]:flex-col-reverse max-[900px]:items-center gap-[38px] max-[900px]:gap-[24px] max-[900px]:text-center max-[900px]:mb-[40px]">
          <Button
            type={"metodology"}
            onClick={onShowMetodology}
          />
          <Button type={"restart"} onClick={onRestart} />
        </div>
      </div>
      <img
        className="w-[284px] h-[282px] right-0 max-[900px]:mb-[32px]"
        src={`assets/question_img1-min.png`}
        alt="question_img"
      />
    </div>
  );
}

export default ResultScreen;
