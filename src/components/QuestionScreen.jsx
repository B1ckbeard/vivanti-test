import Button from "./Button";
import Input from "./Input";

function QuestionScreen({ data, questionsLength, onClickNext, onClickBack }) {
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
                      <input type="checkbox" id={op.value} name={op.value} />
                      <label htmlFor={op.value}>{op.value}</label>
                    </div>
                  ))
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={option.value}
                      name={option.value}
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
            <Input />
            <p className="input_description">{data.inputDescription}</p>
          </div>
        );
      case "dropdown":
        return (
          <div>
            <select className="dropdown" name="dropdown" id="dropdown">
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
            <Button text={"Далее"} onClick={onClickNext} />
          </div>
        </div>
        <img
          className="question_block__img"
          src={`src/assets/question_img${data.img_id}.png`}
          alt="question_img"
        />
      </div>
    </>
  );
}

export default QuestionScreen;
