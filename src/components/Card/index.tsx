import { FC, ReactElement, useState } from "react";
import PopUp from "../Popup";

interface InformationButtonProps {
  name: string;
  onClick?: () => void;
}

const InformationButton: FC<InformationButtonProps> = (props) => {
  return (
    <button
      className="border-white border-2 px-2 py-1 rounded-lg bg-[#ffffff70]
      text-xl"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

interface CardProps {
  img: string;
  name: string;
  prices: ReactElement;
  resume: ReactElement;
}

const Card: FC<CardProps> = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactElement | null>(null);

  const handlePopup = (content: string) => {
    setShowPopup(!showPopup);
    switch (content) {
      case "prices":
        setPopupContent(props.prices);
        break;
      case "plan":
        setPopupContent(props.resume);
        break;
      default:
        setPopupContent(null);
        break;
    }
  };

  return (
    <div className="relative">
      <PopUp visible={showPopup} onClick={() => setShowPopup(false)}>
        {popupContent}
      </PopUp>
      <div className="relative flex justify-center">
        <img src={props.img} alt="Portada" className="rounded-3xl h-96" />
        <div className="flex justify-evenly min-w-[50%] absolute bottom-[20%]">
          <InformationButton
            name="Precios"
            onClick={() => handlePopup("prices")}
          />
          <InformationButton
            name="Plancito"
            onClick={() => handlePopup("plan")}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
