import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlanIndex,
  handleShowInformation,
} from "../../features/plans/plansSlice";
import { Plans } from "../../util/Plans";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { RootState } from "../../redux/store";

const CardCarousel = () => {
  const dispatch = useDispatch();
  const showInformationBox = useSelector(
    (state: RootState) => state.plans.showInformation
  );
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex justify-center items-center h-full w-full lg:w-1/2">
      <Carousel
        showIndicators={false}
        showStatus={false}
        className="max-w-3xl"
        onChange={(index) => {
          dispatch(changePlanIndex(index));
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
            <button
              className="mt-5 border-black border-2 rounded-lg px-2 py-1
              disabled:opacity-50"
              // disabled
              onClick={openDialog}
            >
              Quiero ir ahí!
            </button>
          </div>
        ))}
      </Carousel>
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
                  bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title>Por favor completa la encuesta!</Dialog.Title>
                  <form action="" className="mt-5">
                    <div className="flex flex-col mb-3">
                      <label htmlFor="name">Nombre completo</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Escribe tu nombre..."
                        className="text-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="comments">Algún comentario?</label>
                      <textarea
                        id="comments"
                        cols={30}
                        rows={10}
                        placeholder="Deja tu comentario..."
                      />
                    </div>
                  </form>
                  <div className="flex justify-evenly">
                    <button
                      className="px-2 py-1 border-black border-2 bg-red-400 rounded-lg"
                      onClick={closeDialog}
                    >
                      Cancelar
                    </button>
                    <button
                      className="px-2 py-1 border-black border-2 bg-blue-400 rounded-lg"
                      onClick={closeDialog}
                    >
                      Enviar
                    </button>
                  </div>
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
