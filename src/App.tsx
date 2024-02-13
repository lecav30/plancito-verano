import "./App.css";
import Countdown from "./components/Countdown";
import CardCarousel from "./components/CardCarousel";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-20 text-6xl font-bold">
        Plancito de Verano
      </h1>
      <Countdown />
      <CardCarousel />
    </div>
  );
}

export default App;
