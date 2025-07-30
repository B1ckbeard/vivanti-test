import "./App.css";
import Footer from "./components/Footer";
import ScreenList from "./components/ScreenList";

function App() {
  return (
    <>
      <header className="h-[77px] w-auto bg-[#2C6086]"></header>
      <main className="pt-[40px] pb-[80px] max-[900px]:pb-[60px] text-center">
        <div className="max-w-[1280px] px-[28px] max-[900px]:px-[16px] mx-auto">
          <h1 className="text-[40px] max-[900px]:text-[28px] text-left font-bold mb-[23px] max-[900px]:mb-[32px] leading=[45px] max-[900px]:leading=[32px]">
            Тест для оценки риска развития сахарного диабета 2 типа (шкала
            FINDRISC)
          </h1>
          <div className="max-w-[1224px] max-h-[340px] mb-[40px] max-[900px]:mb-[32px]">
            <img
              src="src/assets/banner-min.png"
              alt="banner"
            />
          </div>
          <ScreenList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
