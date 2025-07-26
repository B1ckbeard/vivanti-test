import Button from "./Button";

function StartScreen({ data, onClick }) {
  return (
    <>
      <div className="question_block__wrapper">
        <div className="question_block__group">
            <div className="question_block__text">
                <p>{data.description}</p>
                <p>{data.description2}</p>
            </div>
          <Button text={"Начать"} onClick={onClick} />
        </div>
        <img
          className="question_block__img"
          src="src/assets/question_img1.png"
          alt="question_img"
        />
      </div>
    </>
  );
}

export default StartScreen;
