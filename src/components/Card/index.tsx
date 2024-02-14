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
  reference: string;
  resume: string;
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
      case "reference":
        setPopupContent(
          <div className="text-white text-2xl">{props.reference}</div>
        );
        break;
      case "plan":
        setPopupContent(
          <div className="text-white text-2xl">{props.resume}</div>
        );
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
        <img src={props.img} alt="" className="rounded-3xl" />
        <div className="flex justify-evenly min-w-[50%] absolute bottom-[20%]">
          <InformationButton
            name="Precios"
            onClick={() => handlePopup("prices")}
          />
          <InformationButton
            name="Referencia"
            onClick={() => handlePopup("reference")}
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
