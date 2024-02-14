import { FC, ReactElement } from "react";

interface PopUpProps {
  children: ReactElement | null;
  visible: boolean;
  onClick?: () => void;
}

const PopUp: FC<PopUpProps> = (props) => {
  return (
    <div
      className={`absolute z-[999] flex justify-center items-center bg-[#00000080]
      px-4 py-2 rounded-3xl text-white text-2xl inset-0
      ${props.visible ? "block" : "hidden"}`}
    >
      <button className="absolute top-10 right-10" onClick={props.onClick}>
        X
      </button>
      {props.children}
    </div>
  );
};

export default PopUp;
