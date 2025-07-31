import Button from "./Button";
import startScreenData from "../constants/startScreenData";
import ScreenLayout from "./ScreenLayout";

function StartScreen({ onClick }) {
  const renderScreen = () => {
    return (
      <>
        <div className="text-[18px] leading-[24px] mb-[40px] max-[900px]:mb-[32px]">
          <p className="mb-[23px]">{startScreenData.description}</p>
          <p>{startScreenData.description2}</p>
        </div>
        <div className="flex max-[900px]:text-center max-[900px]:mb-[40px] max-[900px]:justify-center">
          <Button type={"start"} onClick={onClick} />
        </div>
      </>
    );
  };
  return (
    <ScreenLayout
      children={renderScreen()}
      img={"assets/question_img1-min.png"}
    />
  );
}

export default StartScreen;
