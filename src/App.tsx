import "./App.css";
import Countdown from "./components/Countdown";
import CardCarousel from "./components/CardCarousel";
import { useSelector } from "react-redux";
import { Plans } from "./util/Plans";
import { RootState } from "./redux/store";

const OptionSelected = ({ index }: { index: number }) => {
  const style = useSelector((state: RootState) => state.plans.style);

  return (
    <div>
      <h2
        className={`text-center text-4xl mb-5 max-lg:text-center
        ${style.darkMode ? "text-white" : "text-black"}`}
        style={{
          textShadow: style.darkMode
            ? `2px 2px 4px ${style.darkColor}`
            : `2px 2px 4px ${style.lightColor}`,
        }}
      >
        {Plans[index].name}
      </h2>
      {Plans[index].media}
    </div>
  );
};

function App() {
  const index = useSelector((state: RootState) => state.plans.index);
  const style = useSelector((state: RootState) => state.plans.style);

  return (
    <div className="h-screen overflow-auto snap-mandatory snap-y scrollbar-hide">
      <div className="h-screen snap-start">
        <Countdown />
      </div>
      <div
        className="h-screen snap-start flex justify-evenly items-center transition-all"
        style={{
          // backgroundColor: style.backgroundColor,
          background: `linear-gradient(to top, ${style.primaryColor} 50%, ${style.secondaryColor} 75%, ${style.backgroundColor} 100%)`,
        }}
      >
        <CardCarousel />
        <div className="hidden lg:block">
          <OptionSelected index={index} />
        </div>
      </div>
      {/* <div className="h-screen snap-start">
        <CardCarousel />
      </div>
      <div className="h-screen snap-start justify-evenly items-center hidden lg:flex">
        <div>
          <h2 className="text-center text-4xl mb-5">Bar Acuático</h2>
          <InstagramEmbed url="https://www.instagram.com/reel/C18EbH1Jolc/?utm_source=ig_web_button_share_sheet" />
        </div>
        <div>
          <h2 className="text-center text-4xl mb-5">Playa Huacho</h2>
          <TikTokEmbed url="https://www.tiktok.com/@sinplaness/video/7320050212020423942" />
        </div>
        <div>
          <h2 className="text-center text-4xl mb-5">Cerro Azul</h2>
          <TikTokEmbed url="https://www.tiktok.com/@ytuqueplanes/video/7317727984037678341" />
        </div>
      </div> */}
    </div>
  );
}


export default App;

