import CerroAzul from "../images/playa-cerro-azul.jpeg";
import PlayaHuacho from "../images/playa-huacho.jpeg";
import AquaPark from "../images/aquapark-hacho.png";
import {
  InstagramEmbed,
  TikTokEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

export const Plans = [
  {
    img: AquaPark,
    name: "Bar Acuático",
    prices: (
      <div>
        <b>Movilidad:</b> S/.50 a S/.60 desde <i>Plaza Norte</i> o{" "}
        <i>Metro Izaguirre</i>. <br />
        <b>Entrada:</b> S/.20 (hay combos disponibles). <br />
        <b>Comida:</b> S/.20 aprox (o incluida en el combo).
        <br /> <br />
        <b>Total:</b> S/.100 - S/.120
      </div>
    ),
    resume: <div></div>,
    media: (
      <InstagramEmbed url="https://www.instagram.com/reel/C18EbH1Jolc/?utm_source=ig_web_button_share_sheet" />
    ),
  },
  {
    img: PlayaHuacho,
    name: "Playas Huacho",
    prices: (
      <div>
        <b>Opciones:</b> Hornillos, Colorado, Cabeza de León, Paraíso,
        Palmeritas, Cocoy. <br />
        <b>Movilidad:</b> S/.50 a S/.60 desde <i>Plaza Norte</i> o{" "}
        <i>Metro Izaguirre</i>. <br />
        <b>Comida:</b> S/.20 a S/.25 aprox. <br />
        <b>Alquila una sombrilla y silla:</b> S/.20 aprox.
        <br /> <br />
        <b>Total:</b> S/.100 - S/.120
      </div>
    ),
    resume: <div></div>,
    media: (
      <TikTokEmbed url="https://www.tiktok.com/@sinplaness/video/7320050212020423942" />
    ),
  },
  {
    img: CerroAzul,
    name: "Cerro Azul",
    prices: (
      <div>
        <b>Movilidad:</b> S/.40 a S/.60. <br />
        <b>Comida:</b> S/.20 a S/.25 aprox. <br />
        <b>Alquila una sombrilla y silla:</b> S/.20 aprox. <br />
        <i>En caso de acampar:</i> <br /> <b>Equipamiento:</b> Leña/Tienda de
        acampar/Comida (opcional): S/.20 a S/.30.
        <br /> <br />
        <b>Total:</b> S/.120 - S/.130
      </div>
    ),
    resume: <div></div>,
    media: (
      <YouTubeEmbed url="https://youtu.be/RHbENWNVXCw?si=dhVP6gyaMPvp1kQU" />
    ),
  },
];
