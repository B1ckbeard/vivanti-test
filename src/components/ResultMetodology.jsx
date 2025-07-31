import Button from "./Button";

function ResultMetodology({ onBack }) {
  return (
    <div className="flex flex-col items-center mb-[10px] max-[900px]:mb-[0]">
      <table className="mx-auto mb-[40px] max-[900px]:mb-[32px] border border-collapse border-[#0D446C] w-full max-w-[1008px]">
        <thead className="pt-[20px]">
          <tr className="bg-[#0D446C] text-white text-[18px] max-[900px]:text-[14px] h-[70px]">
            <th className="border-r border-white font-normal">
              Общее количество баллов
            </th>
            <th className="border-r border-white font-normal">
              Уровень риска СД 2 типа
            </th>
            <th className="font-normal">Вероятность развития СД 2 типа</th>
          </tr>
        </thead>
        <tbody className="text-[16px] max-[900px]:text-[14px]">
          <tr className="border border-[#0D446C] h-[71px]">
            <td className="border border-[#0D446C]">Менее 7</td>
            <td className="border border-[#0D446C] bg-[#DBDEF8]">
              Низкий риск
            </td>
            <td className="border border-[#0D446C]">1 из 100 или 1%</td>
          </tr>
          <tr className="border border-[#0D446C] h-[71px]">
            <td className="border border-[#0D446C]">7–11</td>
            <td className="border border-[#0D446C] bg-[#C5CAEE]">
              Слегка повышен
            </td>
            <td className="border border-[#0D446C]">1 из 25 или 4%</td>
          </tr>
          <tr className="border border-[#0D446C] h-[71px]">
            <td className="border border-[#0D446C]">12–14</td>
            <td className="border border-[#0D446C] bg-[#9BA4E6] text-white">
              Умеренный
            </td>
            <td className="border border-[#0D446C]">1 из 6 или 17%</td>
          </tr>
          <tr className="border border-[#0D446C] h-[71px]">
            <td className="border border-[#0D446C]">15–20</td>
            <td className="border border-[#0D446C] bg-[#7E88D2] text-white">
              Высокий
            </td>
            <td className="border border-[#0D446C]">1 из 3 или 33%</td>
          </tr>
          <tr className="border border-[#0D446C] h-[71px]">
            <td className="border border-[#0D446C]">Более 20</td>
            <td className="border border-[#0D446C] bg-[#6C76BC] text-white">
              Очень высокий
            </td>
            <td className="border border-[#0D446C]">1 из 2 или 50%</td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto max-w-[1199px] mb-[40px] max-[900px]:mb-[32px] grid max-[900px]:grid-cols-1 max-[900px]:items-center grid-cols-2 gap-[38px] max-[900px]:gap-[24px] text-[18px] leading-[24px] text-left">
        <div className="flex flex-row max-[900px]:flex-col items-center max-[900px]:items-start">
          <div className="flex flex-col max-[900px]:flex-row max-[900px]:items-center mr-[24px] max-[900px]:mr-[0px] max-[900px]:mb-[16px]">
            <div className="w-[80px] h-[80px] max-[900px]:mr-[10px]">
              <img src="assets/circle1.png" alt="circle1" />
            </div>
            <p className="text-[24px] text-[#6C76BC] text-center font-extrabold">
              {"<"}12
            </p>
          </div>
          <p>
            Общее количество баллов менее 12. У Вашего пациента хорошее
            здоровье. Рекомендуется продолжать вести здоровый образ жизни!
          </p>
        </div>
        <div className="flex flex-row max-[900px]:flex-col items-center max-[900px]:items-start">
          <div className="flex flex-col max-[900px]:flex-row max-[900px]:items-center mr-[24px] max-[900px]:mr-[0px] max-[900px]:mb-[16px]">
            <div className="w-[80px] h-[80px] max-[900px]:mr-[10px]">
              <img
                src="assets/circle2.png"
                alt="circle2"
                className="w-[80px] h-[80px]"
              />
            </div>
            <p className="text-[24px] text-[#6C76BC] text-center font-extrabold">
              12-14
            </p>
          </div>
          <p className="text-balance">
            Общее количество баллов 12—14. Возможно, у Вашего пациента
            предиабет. Рекомендуется изменить образ жизни.
          </p>
        </div>
        <div className="flex flex-row max-[900px]:flex-col items-center max-[900px]:items-start">
          <div className="flex flex-col max-[900px]:flex-row max-[900px]:items-center mr-[24px] max-[900px]:mr-[0px] max-[900px]:mb-[16px]">
            <div className="w-[80px] h-[80px] max-[900px]:mr-[10px]">
              <img
                src="assets/circle3.png"
                alt="circle3"
                className="w-[80px] h-[80px]"
              />
            </div>
            <p className="text-[24px] text-[#6C76BC] text-center font-extrabold">
              15-20
            </p>
          </div>
          <p>
            Общее количество баллов 15—20. Возможно, у Вашего пациента предиабет
            или сахарный диабет 2 типа. Порекомендуйте ему проверить уровень
            глюкозы (сахара) в крови. Пациенту необходимо дать рекомендации по
            модификации образа жизни и при необходимости назначить лекарства для
            снижения уровня глюкозы (сахара) в крови.
          </p>
        </div>
        <div className="flex flex-row max-[900px]:flex-col items-center max-[900px]:items-start">
          <div className="flex flex-col max-[900px]:flex-row max-[900px]:items-center mr-[24px] max-[900px]:mr-[0px] max-[900px]:mb-[16px]">
            <div className="w-[80px] h-[80px] max-[900px]:mr-[10px]">
              <img
                src="assets/circle4.png"
                alt="circle4"
                className="w-[80px] h-[80px]"
              />
            </div>
            <p className="text-[24px] text-[#6C76BC] text-center font-extrabold">
              {">"}20
            </p>
          </div>
          <p>
            Общее количество баллов более 20. По всей вероятности у Вашего
            пациента сахарный диабет 2 типа. Проверьте у него уровень глюкозы
            (сахара) в крови и постарайтесь его нормализовать. Пациенту
            необходимо дать рекомендации по модификации образа жизни и назначить
            лекарства для контроля уровня глюкозы (сахара) в крови.
          </p>
        </div>
      </div>
        <Button type={"back"} onClick={onBack} />
    </div>
  );
}

export default ResultMetodology;
