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
      const currentQuestionAnswers = prevState.filter(
        (answer) => answer.id === data.id
      );

      const otherAnswers = prevState.filter((answer) => answer.id !== data.id);
      if (data.id === 8) {
        const selectedType = optionValue === "Нет" ? "no" : "yes";
        if (isChecked) {
          if (selectedType === "no") {
            return [
              ...otherAnswers,
              { id: data.id, value: optionValue, score },
            ];
          } else {
            const yesAnswersCount = currentQuestionAnswers.filter(
              (a) => a.value !== "Нет"
            ).length;
            if (yesAnswersCount < 2) {
              const filtered = currentQuestionAnswers.filter(
                (a) => a.value !== "Нет"
              );
              return [
                ...otherAnswers,
                ...filtered,
                { id: data.id, value: optionValue, score },
              ];
            }
            return prevState;
          }
        } else {
          return prevState.filter(
            (a) => !(a.id === data.id && a.value === optionValue)
          );
        }
      }

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
                        className="mr-[8px]"
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
                      className="mr-[8px]"
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
            <p className="text-[13px] leading-[16px] text-[#707075] text-balance max-w-[343px]">{data.inputDescription}</p>
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
      <div className="p-[25px] max-[900px]:px-[18px] max-[900px]:pb-[0] flex max-[900px]:flex-col-reverse justify-between max-[900px]:items-center">
        <div className="text-left max-w-[820px]">

          <div className="text-[18px] leading-[24px] mb-[40px] max-[900px]:mb-[32px]">
            <h4 className="text-[20px] font-bold leading-[28px] mb-[24px]">
              Вопрос {data.id}/{questionsLength}
            </h4>
            <p className="text-[18px] leading-[24px] mb-[14px]">{data.description}</p>
            {renderInput()}
          </div>

          <div className="btn_group gap-[38px] max-[900px]:text-center max-[900px]:mb-[40px]">
            <Button text={"Назад"} onClick={onClickBack} />
            <Button
              text={"Далее"}
              onClick={onClickNext}
              disabled={!answers.some((a) => a.id === data.id)}
            />
          </div>
        </div>
        <img
          className="w-[284px] h-[282px] right-0 max-[900px]:mb-[32px]"
          src={`src/assets/question_img${data.img_id}-min.png`}
          alt="question_img"
        />
      </div>
    </>
  );
}

export default QuestionScreen;
