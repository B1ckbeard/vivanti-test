function ScreenLayout({ children, img }) {
  return (
    <div className="p-[25px] max-[900px]:px-[18px] max-[900px]:pb-[0] flex max-[900px]:flex-col-reverse justify-between max-[900px]:items-center">
      <div className="text-left max-w-[820px]">{children}</div>
      <img
        className="w-[284px] h-[282px] right-0 max-[900px]:mb-[32px]"
        src={img}
        alt="question_img"
      />
    </div>
  );
}

export default ScreenLayout;
