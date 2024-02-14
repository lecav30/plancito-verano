import "./App.css";
import Countdown from "./components/Countdown";
import CardCarousel from "./components/CardCarousel";

function App() {
  return (
    <div className="h-screen overflow-auto snap-mandatory snap-y scrollbar-hide">
      <div className="h-screen snap-start">
        <Countdown />
      </div>
      <div className="h-screen snap-start">
        <CardCarousel />
      </div>
    </div>
  );
}

export default App;
