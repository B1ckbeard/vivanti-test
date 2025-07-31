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
              <div key={option.value} className="mb-[12px]">
                {Object.hasOwn(option, "title") && (
                  <h4 className="text-lg font-bold mb-[12px]">
                    {option.title}
                  </h4>
                )}

                {Object.hasOwn(option, "options") ? (
                  <div className={data.id === 3 ? "grid gap-y-2" : ""}>
                    {option.options.map((op) => (
                      <div
                        key={op.value}
                        className={
                          data.id === 3
                            ? "grid grid-cols-3 gap-4 items-center"
                            : ""
                        }
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={op.value}
                            name={op.value}
                            className="mr-2 h-4 w-4"
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
                          <label htmlFor={op.value} className="text-base">
                            {op.value}
                          </label>
                        </div>
                        {data.id === 3 && (
                          <div className="text-right text-base font-medium">
                            <p className="text-left">
                              ({op.score}{" "}
                              {op.score === 1
                                ? "балл"
                                : op.score >= 2 && op.score <= 4
                                ? "балла"
                                : "баллов"}
                              )
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid auto-cols-max grid-flow-col items-center">
                    <input
                      type="checkbox"
                      id={option.value}
                      name={option.value}
                      className="mr-2 h-4 w-4 "
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
                    <label htmlFor={option.value} className="mr-[30px]">
                      {option.value}
                    </label>
                    <p className="text-left">
                      ({option.score}{" "}
                      {option.score === 1
                        ? "балл"
                        : option.score >= 2 && option.score <= 4
                        ? "балла"
                        : "баллов"}
                      )
                    </p>
                  </div>
                )}
              </div>
            ))}
          </>
        );
      case "input":
        return (
          <div className="w-full max-w-[386px] max-[900px]:flex max-[900px]:flex-col">
            <Input
              value={currentAnswer?.value ?? ""}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <p className="text-[13px] leading-[16px] text-[#707075] w-full max-w-[386px]">
              {data.inputDescription}
            </p>
          </div>
        );
      case "dropdown":
        return (
          <div className="mx-auto max-[900px]:max-w-[343px]">
            <select
              className="max-w-[343px] w-full h-[44px] text-[18px] text-[#707075] bg-white border-2 border-[#E46F50] focus:outline-none focus:border-[#E46F50]"
              name="dropdown"
              id="dropdown"
              onChange={(e) => handleDropdownChange(e.target.value)}
            >
              {data.selectOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-black bg-white hover:bg-[#E46F50] checked:bg-[#E46F50]"
                >
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

  const addLinkToLastWords = (text, wordsCount = 2, url) => {
    const words = text.split(" ");
    const lastWords = words.splice(-wordsCount).join(" ");

    return (
      <>
        {words.join(" ")}{" "}
        <a
          href={url}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {lastWords}
        </a>
      </>
    );
  };

  return (
    <>
      <div className="p-[25px] max-[900px]:pt-[18px] max-[900px]:px-[18px] flex max-[900px]:flex-col-reverse justify-between max-[900px]:items-center">
        <div className="text-left max-w-[820px]">
          <div className="text-[18px] leading-[24px] mb-[32px] max-[900px]:mb-[32px]">
            <h4 className="text-[20px] font-bold leading-[28px] mb-[24px]">
              Вопрос {data.id}/{questionsLength}
            </h4>
            {data.description2 ? (
              <div className="mb-[32px]">
                <p className="text-[18px] leading-[24px] mb-[11px]">
                  {data.description}
                </p>
                <p className="text-[18px] leading-[24px]">
                  {addLinkToLastWords(
                    data.description2,
                    2,
                    "https://clinic-cvetkov.ru/company/kalkulyator-imt/"
                  )}
                </p>
              </div>
            ) : (
              <p className="text-[18px] leading-[24px] mb-[24px]">
                {data.description}
              </p>
            )}
            {renderInput()}
          </div>

          <div className="btn_group flex flex-row max-[900px]:flex-col-reverse max-[900px]:items-center gap-[38px] max-[900px]:gap-[24px] max-[900px]:text-center mb-[25px] max-[900px]:mb-[15px]">
            <Button type={"back"} onClick={onClickBack} />
            <Button
              type={"next"}
              onClick={onClickNext}
              disabled={!answers.some((a) => a.id === data.id)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[284px] h-[282px] right-0 max-[900px]:mb-[32px]"
            src={`assets/question_img${data.img_id}-min.png`}
            alt="question_img"
          />
        </div>
      </div>
    </>
  );
}

export default QuestionScreen;
