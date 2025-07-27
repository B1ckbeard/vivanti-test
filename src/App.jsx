import "./App.css";
import Footer from "./components/Footer";
import ScreenList from "./components/ScreenList";

function App() {
  return (
    <>
      <header></header>
      <main>
        <h1>
          Тест для оценки риска развития сахарного диабета 2 типа (шкала FINDRISC)
        </h1>
        <img src="src/assets/banner-min.png" alt="banner" className="banner" />
        <ScreenList />
      </main>
      <Footer />
    </>
  );
}

export default App;
