import Aquapark from "../images/aquapark-hacho.png";
import PlayaHuacho from "../images/playa-huacho.jpeg";
import CerroAzul from "../images/playa-cerro-azul.jpeg";

export type Style = {
  name: string;
  darkColor: string;
  lightColor: string;
  alertColor: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  backgroundImage: string;
  darkMode?: boolean;
};

export const myStyles: { [key: string]: Style } = {
  Aquapark: {
    name: "Aquapark",
    darkColor: "#401d1c",
    lightColor: "#95a4b4",
    alertColor: "#e31523",
    primaryColor: "#1e88b3",
    secondaryColor: "#7597be",
    backgroundColor: "#7edbf1",
    backgroundImage: Aquapark,
    darkMode: true,
  },
  PlayaHuacho: {
    name: "Playa Huacho",
    darkColor: "#3c1e22",
    lightColor: "#fbd035",
    alertColor: "#bc6421",
    primaryColor: "#a46151",
    secondaryColor: "#ca8571",
    backgroundColor: "#fbb044",
    backgroundImage: PlayaHuacho,
    darkMode: true,
  },
  CerroAzul: {
    name: "Cerro Azul",
    darkColor: "#122b21",
    lightColor: "#afbdd9",
    alertColor: "#7c9dd5",
    primaryColor: "#195157",
    secondaryColor: "#436961",
    backgroundColor: "#4c707c",
    backgroundImage: CerroAzul,
    darkMode: true,
  },
};
