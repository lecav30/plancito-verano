import "./App.css";
import Countdown from "./components/Countdown";
import CardSlice from "./components/CardSlice";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Plancito de verano</h1>
      <Countdown />
      <CardSlice />
    </div>
  );
}

export default App;
