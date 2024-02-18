import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlanIndex,
  handleShowInformation,
  changeStyle,
} from "../../features/plans/plansSlice";
import { Plans } from "../../util/Plans";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { RootState } from "../../redux/store";
import { myStyles } from "../../util/Styles";
import axios from "axios";
import { useCookies } from "react-cookie";

const OptionSelected = ({ index }: { index: number }) => {
  const style = useSelector((state: RootState) => state.plans.style);

  return (
    <div>
      <h2
        className={`min:text-center text-4xl mb-5 
        ${style.darkMode ? "text-white" : "text-black"}`}
        style={{
          textShadow: style.darkMode
            ? `.125rem .125rem .25rem ${style.darkColor}`
            : `.125rem .125rem .25rem ${style.lightColor}`,
        }}
      >
        {Plans[index].name}
      </h2>
    </div>
  );
};

const CardCarousel = () => {
  const API = import.meta.env.VITE_API_URL;
  const [cookies, setCookie] = useCookies(["vote"]);
  const dispatch = useDispatch();

  const availableStyles = ["Aquapark", "PlayaHuacho", "CerroAzul"];

  const index = useSelector((state: RootState) => state.plans.index);
  const style = useSelector((state: RootState) => state.plans.style);
  const showInformationBox = useSelector(
    (state: RootState) => state.plans.showInformation
  );

  const [showDialog, setShowDialog] = useState(false);
  const [voterData, setVoterData] = useState({
    Name: "",
    Comment: "",
    Plan: Plans[index].name,
  });

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCookie("vote", true, { path: "/" });
    axios.post(API, voterData).then((res) => {
      console.log(res);
      setVoterData({
        Name: "",
        Comment: "",
        Plan: Plans[index].name,
      });
    });
  };

  return (
    <div className="flex justify-center items-center h-full w-full lg:w-1/2 max-lg:mx-7 ">
      <div className="flex flex-col items-center">
        <div className="hidden max-lg:block ">
          <OptionSelected index={index} />
        </div>
        <Carousel
          showIndicators={false}
          showStatus={false}
          className="max-w-3xl"
          onChange={(index) => {
            dispatch(changePlanIndex(index));
            dispatch(changeStyle(myStyles[availableStyles[index]]));
            if (showInformationBox) dispatch(handleShowInformation());
          }}
        >
          {Plans.map((plan, index) => (
            <div key={index}>
              <Card
                img={plan.img}
                name={plan.name}
                prices={plan.prices}
                resume={plan.resume}
              />
            </div>
          ))}
        </Carousel>

        <button
          className={`mt-5 border-black border-2 rounded-lg px-2 py-1
          w-fit ${style.darkMode ? "text-white" : "text-black"} ${
            cookies.vote && "opacity-50"
          }`}
          style={{
            backgroundColor: style.primaryColor,
          }}
          onClick={openDialog}
        >
          {" "}
          {cookies.vote ? "Ya votaste!" : "Quiero ir ahí!"}
        </button>
      </div>
      <Transition appear show={showDialog} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl
                  p-6 text-left align-middle shadow-xl transition-all"
                  style={{
                    backgroundColor: style.backgroundColor,
                  }}
                >
                  <Dialog.Title className="text-center">
                    {cookies.vote
                      ? "Ya completaste la encuesta!"
                      : "Por favor completa la encuesta!"}
                  </Dialog.Title>
                  {cookies.vote ? (
                    <p className="text-center text-sm mt-5">
                      Gracias por tu voto! <br />
                      En caso te hayas equivocado o quieras cambiar de voto por
                      favor escribelo en el grupo de WhatsApp o por privado a
                      los organizadores del grupo. Muchas gracias!
                    </p>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-5">
                      <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="py-2">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Escribe tu nombre..."
                          className="text-black focus:outline-none py-1 px-2 rounded-lg"
                          value={voterData.Name}
                          onChange={(e) =>
                            setVoterData({ ...voterData, Name: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="comments" className="py-2">
                          Algún comentario?
                        </label>
                        <textarea
                          id="comments"
                          placeholder="Deja tu comentario..."
                          className="text-black focus:outline-none py-1 px-2 rounded-lg"
                          value={voterData.Comment}
                          onChange={(e) =>
                            setVoterData({
                              ...voterData,
                              Comment: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex justify-evenly mt-5">
                        <button
                          type="button"
                          className={`px-2 py-1 border-black border-2 rounded-lg
                        ${style.darkMode ? "text-white" : "text-black"}`}
                          style={{
                            backgroundColor: style.primaryColor,
                          }}
                          onClick={closeDialog}
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className={`px-2 py-1 border-black border-2 rounded-lg
                        ${style.darkMode ? "text-white" : "text-black"}`}
                          style={{
                            backgroundColor: style.primaryColor,
                          }}
                          onClick={closeDialog}
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CardCarousel;
