function Button({ type = null, onClick, disabled = false }) {
  const baseClasses =
    "h-[52px] font-bold cursor-pointer flex items-center justify-center transition delay-50";

  const typeClasses = {
    start:
      "w-[360px] bg-[#E46F50] text-white text-[26px] max-[900px]:text-[23px] leading-[36px] hover:bg-[#F1B287] focus:bg-[#E46F50]",
    next: "w-[360px] bg-[#E46F50] text-white text-[26px] max-[900px]:text-[23px] leading-[36px] hover:bg-[#F1B287] focus:bg-[#E46F50] disabled:bg-[#f0cac0]",
    back: "w-[360px] bg-white text-[#E46F50] border-2 border-[#E46F50] hover:border-[#F1B287] hover:text-[#F1B287] text-[26px] max-[900px]:text-[23px] leading-[36px]",
    metodology:
      "w-[457px] truncate bg-white text-[#E46F50] border-2 border-[#E46F50] hover:border-[#F1B287] hover:text-[#F1B287] text-[22px] max-[900px]:text-[22px] leading-[36px]",
    restart:
      "w-[360px] bg-[#E46F50] text-white text-[22px] max-[900px]:text-[22px] leading-[36px] hover:bg-[#F1B287] focus:bg-[#E46F50]",
  };

  const icons = {
    next: { src: "assets/next.png", alt: "next", className: "ml-[12px]" },
    back: {
      src: "assets/back.png",
      alt: "back",
      className: "mr-[12px] hover:filter hover:text-[#F1B287]",
    },
    metodology: {
      src: "assets/metodology.png",
      alt: "metodology",
      className: "mr-[7px]",
    },
    restart: {
      src: "assets/restart.png",
      alt: "restart",
      className: "mr-[12px]",
    },
  };

  const buttonTexts = {
    start: "Начать",
    next: "Далее",
    back: "Назад",
    metodology: "Методология подсчета результата",
    restart: "Пройти тест заново",
  };

  if (!type || !typeClasses[type]) return null;

  return (
    <button
      className={`${baseClasses} ${typeClasses[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {type === "back" || type === "metodology" || type === "restart" ? (
        <>
          <img {...icons[type]} />
          {buttonTexts[type]}
        </>
      ) : (
        <>
          {buttonTexts[type]}
          {type === "next" && <img {...icons.next} />}
        </>
      )}
    </button>
  );
}

export default Button;
