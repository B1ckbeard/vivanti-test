import { useState, useEffect } from "react";
import ResultMetodology from "./ResultMetodology";

function ResultScreen() {
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
    console.log(answers)
    console.log(answers.reduce((total, answer) => total + (answer.score), 0)) 
  };

  calculateTotalScore();

  return (
    <>
      <h4>Результат</h4>
      <p>description</p>
      <ul>
        {answers.map((a) => (
          <li key={a.id}>
            ID:{a.id}, value: {a.value}, score: {a.score}
          </li>
        ))}
      </ul>
      <button>Методология подсчета результата</button>
      <button>Пройти тест заново</button>
    </>
  );
}

export default ResultScreen;
