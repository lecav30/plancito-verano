import "./App.css";
import Countdown from "./components/Countdown";
import CardCarousel from "./components/CardCarousel";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Plancito de verano</h1>
      <Countdown />
      <CardCarousel />
    </div>
  );
}

export default App;
