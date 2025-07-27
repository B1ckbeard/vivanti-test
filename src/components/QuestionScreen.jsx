import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";

function QuestionScreen({ data, questionsLength, onClickNext, onClickBack }) {
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem("diabetesAnswers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("diabetesAnswers", JSON.stringify(answers));
    console.log(answers);
  }, [answers]);

  const currentAnswer = answers.find((answer) => answer.id === data.id);

  const handleInputChange = (value) => {
    const valueAsNumber = parseFloat(value);
    if (!isNaN(valueAsNumber)) {
      setAnswers((prev) => {
        const otherAnswers = prev.filter((answer) => answer.id !== data.id);
        return [
          ...otherAnswers,
          {
            id: data.id,
            value: valueAsNumber,
          },
        ];
      });
    }
  };

  const handleDropdownChange = (value) => {
    const selectedOption = data.selectOptions.find(
      (opt) => opt.value === value
    );
    setAnswers((prevState) => {
      const filteredAnswer = prevState.filter(
        (answer) => answer.id !== data.id
      );
      return [
        ...filteredAnswer,
        {
          id: data.id,
          value: selectedOption.value,
          score: selectedOption.score,
        },
      ];
    });
  };

  const handleCheckboxChange = (optionValue, isChecked, score) => {
    setAnswers((prevState) => {
      const otherAnswers = prevState.filter((answer) => answer.id !== data.id);
      if (isChecked) {
        return [
          ...otherAnswers,
          { id: data.id, value: optionValue, score: score },
        ];
      } else {
        return otherAnswers;
      }
    });
  };

  const renderInput = () => {
    switch (data.type) {
      case "checkbox":
        return (
          <>
            {data.selectOptions.map((option) => (
              <div key={option.value}>
                {Object.hasOwn(option, "title") && <h4>{option.title}</h4>}
                {Object.hasOwn(option, "options") ? (
                  option.options.map((op) => (
                    <div key={op.value}>
                      <input
                        type="checkbox"
                        id={op.value}
                        name={op.value}
                        checked={answers.some(
                          (a) => a.id === data.id && a.value === op.value
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(
                            op.value,
                            e.target.checked,
                            op.score
                          )
                        }
                      />
                      <label htmlFor={op.value}>{op.value}</label>
                    </div>
                  ))
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      checked={answers.some(
                        (a) => a.id === data.id && a.value === option.value
                      )}
                      onChange={(e) =>
                        handleCheckboxChange(
                          option.value,
                          e.target.checked,
                          option.score
                        )
                      }
                    />
                    <label htmlFor={option.value}>{option.value}</label>
                  </>
                )}
              </div>
            ))}
          </>
        );
      case "input":
        return (
          <div>
            <Input
              value={currentAnswer?.value ?? ""}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <p className="input_description">{data.inputDescription}</p>
          </div>
        );
      case "dropdown":
        return (
          <div>
            <select
              className="dropdown"
              name="dropdown"
              id="dropdown"
              onChange={(e) => handleDropdownChange(e.target.value)}
            >
              {data.selectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="question_block__wrapper">
        <div className="question_block__group">
          <div className="question_block__text">
            <h4>
              Вопрос {data.id}/{questionsLength}
            </h4>
            <p className="question_block__description">{data.description}</p>
            {renderInput()}
          </div>
          <div className="btn_group">
            <Button text={"Назад"} onClick={onClickBack} />
            <Button
              text={"Далее"}
              onClick={onClickNext}
              disabled={!answers.some((a) => a.id === data.id)}
            />
          </div>
        </div>
        <img
          className="question_block__img"
          src={`src/assets/question_img${data.img_id}-min.png`}
          alt="question_img"
        />
      </div>
    </>
  );
}

export default QuestionScreen;
