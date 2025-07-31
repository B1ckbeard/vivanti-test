function Button({ type = null, onClick, disabled = false }) {
  switch (type) {
    case "start":
      return (
        <>
          <button
            className="w-[360px] h-[52px] bg-[#E46F50] text-white text-[26px] max-[900px]:text-[23px] leading-[36px] font-bold border-0 cursor-pointer hover:bg-[#F1B287] focus:bg-[#E46F50] transition delay-50"
            onClick={onClick}
            disabled={disabled}
          >
            Начать
          </button>
        </>
      );
    case "next":
      return (
        <>
          <button
            className="w-[360px] h-[52px] bg-[#E46F50] text-white text-[26px] max-[900px]:text-[23px] leading-[36px] font-bold border-0 cursor-pointer flex items-center justify-center hover:bg-[#F1B287] focus:bg-[#E46F50] disabled:bg-[#f0cac0] transition delay-50"
            onClick={onClick}
            disabled={disabled}
          >
            Далее
            <img
              src="src/assets/next.png"
              alt="next"
              className="ml-[12px]"
            />
          </button>
        </>
      );
    case "back":
      return (
        <>
          <button
            className="w-[360px] h-[52px] bg-white text-[#E46F50] border-2 border-[#E46F50] hover:border-[#F1B287] hover:text-[#F1B287] text-[26px] max-[900px]:text-[23px] leading-[36px] font-bold cursor-pointer flex items-center justify-center transition delay-50"
            onClick={onClick}
            disabled={disabled}
          >
            <img
              src="src/assets/back.png"
              alt="back"
              className="mr-[12px] hover:filter hover:text-[#F1B287]"
            />
            Назад
          </button>
        </>
      );
    case "metodology":
      return (
        <>
          <button
            className="w-[457px] h-[52px] truncate bg-white text-[#E46F50] border-2 border-[#E46F50] hover:border-[#F1B287] hover:text-[#F1B287] text-[22px] max-[900px]:text-[22px] leading-[36px] font-bold cursor-pointer flex items-center justify-center transition delay-50"
            onClick={onClick}
            disabled={disabled}
          >
            <img
              src="src/assets/metodology.png"
              alt="back"
              className="mr-[7px]"
            />
            Методология подсчета результата
          </button>
        </>
      );
    case "restart":
      return (
        <>
          <button
            className="w-[360px] h-[52px] bg-[#E46F50] text-white text-[22px] max-[900px]:text-[22px] leading-[36px] font-bold cursor-pointer flex items-center justify-center hover:bg-[#F1B287] focus:bg-[#E46F50] transition delay-50"
            onClick={onClick}
            disabled={disabled}
          >
            <img
              src="src/assets/restart.png"
              alt="back"
              className="mr-[12px]"
            />
            Пройти тест заново
          </button>
        </>
      );
    default:
      return null;
  }
}

export default Button;
