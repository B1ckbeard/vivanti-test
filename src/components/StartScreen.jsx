import Button from "./Button";
import startScreenData from "../constants/startScreenData";

function StartScreen({ onClick }) {
  return (
    <>
      <div className="p-[25px] max-[900px]:px-[18px] max-[900px]:pb-[0] flex max-[900px]:flex-col-reverse justify-between max-[900px]:items-center">
        <div className="text-left max-w-[820px]">

          <div className="text-[18px] leading-[24px] mb-[40px] max-[900px]:mb-[32px]">
            <p className="mb-[23px]">{startScreenData.description}</p>
            <p>{startScreenData.description2}</p>
          </div>

          <div className="max-[900px]:text-center max-[900px]:mb-[40px]">
            <Button type={'start'} onClick={onClick} />
          </div>
        </div>
        <img
          className="w-[284px] h-[282px] right-0 max-[900px]:mb-[32px]"
          src="assets/question_img1-min.png"
          alt="question_img"
        />
      </div>
    </>
  );
}

export default StartScreen;
