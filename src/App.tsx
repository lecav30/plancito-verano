import "./App.css";
import Countdown from "./components/Countdown";
import CardCarousel from "./components/CardCarousel";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";

function App() {
  return (
    <div className="h-screen overflow-auto snap-mandatory snap-y scrollbar-hide">
      <div className="h-screen snap-start">
        <Countdown />
      </div>
      <div className="h-screen snap-start">
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
      </div>
    </div>
  );
}

export default App;
