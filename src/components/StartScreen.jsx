import Button from "./Button";
import startScreenData from "../constants/startScreenData";

function StartScreen({ onClick }) {
  return (
    <>
      <div className="question_block__wrapper">
        <div className="question_block__group">
            <div className="question_block__text">
                <p>{startScreenData.description}</p>
                <p>{startScreenData.description2}</p>
            </div>
          <Button text={"Начать"} onClick={onClick} />
        </div>
        <img
          className="question_block__img"
          src="src/assets/question_img1-min.png"
          alt="question_img"
        />
      </div>
    </>
  );
}

export default StartScreen;
