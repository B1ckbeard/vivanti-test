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
    <div className="question_block__wrapper">
      <div className="question_block__group">
        <div className="question_block__text">
          <h4>Результат</h4>
          <p className="question_block__description">{getResult().risk}</p>
          <p className="question_block__description">
            {getResult().description}
          </p>
        </div>
        <div className="btn_group">
          <Button
            text={"Методология подсчета результата"}
            onClick={onShowMetodology}
          />
          <Button text={"Пройти тест заново"} onClick={onRestart} />
        </div>
      </div>
      <img
        className="question_block__img"
        src={`src/assets/question_img1-min.png`}
        alt="question_img"
      />
    </div>
  );
}

export default ResultScreen;
