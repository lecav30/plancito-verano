import { FC, ReactElement, useState } from "react";
import { handleShowInformation } from "../../features/plans/plansSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


interface InformationButtonProps {
  name: string;
  onClick?: () => void;
}

const InformationButton: FC<InformationButtonProps> = (props) => {
  const style = useSelector((state: RootState) => state.plans.style);

  return (
    <button
      className={`border-2 px-2 py-1 rounded-lg text-xl
      ${style.darkMode ? "text-white border-white" : "text-black border-black"}`}
      style={{
        backgroundColor: `${style.primaryColor}80`,
      }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

interface InformationProps {
  children: ReactElement | null;
  visible: boolean;
}

const InformationBox: FC<InformationProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute z-40 flex justify-center items-center bg-[#00000080]
      px-4 py-2 rounded-3xl text-white text-2xl inset-0 max-lg:text-base
      ${props.visible ? "block" : "hidden"}`}
    >
      <button
        className="absolute top-10 right-10"
        onClick={() => dispatch(handleShowInformation())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="#fff" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
          </g>
        </svg>
      </button>
      {props.children}
    </div>
  );
};

interface CardProps {
  img: string;
  name: string;
  prices: ReactElement;
  resume: ReactElement;
}

const Card: FC<CardProps> = (props) => {
  const showInformationBox = useSelector(
    (state: RootState) => state.plans.showInformation,
  );
  const style = useSelector((state: RootState) => state.plans.style);

  const dispatch = useDispatch();

  const [informationContent, setInformationContent] =
    useState<ReactElement | null>(null);

  const handleInformationBox = (content: string) => {
    dispatch(handleShowInformation());
    switch (content) {
      case "prices":
        setInformationContent(props.prices);
        break;
      case "plan":
        setInformationContent(props.resume);
        break;
      default:
        setInformationContent(null);
        break;
    }
  };

  return (
    <div
      className="relative border-2 rounded-3xl "
      style={{
        borderColor: style.darkColor,
      }}
    >
      <InformationBox visible={showInformationBox}>
        {informationContent}
      </InformationBox>
      <div className="relative flex justify-center ">
        <img src={props.img} alt="Portada" className="rounded-3xl h-96 max-lg:h-80" />
        <div
          className={`flex justify-evenly min-w-[50%] absolute bottom-[20%] max-lg:space-x-3
          ${showInformationBox ? "hidden" : "visible"}`}
        >
          <InformationButton
            name="Precios"
            onClick={() => handleInformationBox("prices")}
          />
          <InformationButton
            name="Plancito"
            onClick={() => handleInformationBox("plan")}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
