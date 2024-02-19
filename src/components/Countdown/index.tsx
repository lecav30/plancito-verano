import { useEffect, useRef, useState } from "react";
import './styles.css';
import Beach from "../../images/playahd2.jpg";
const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const secondTimer = useRef(null);

  const actualizarContador = () => {
    const deadline = new Date("2024-03-09T00:00:00");
    const currentDate = new Date();
    const timeDifference = deadline.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.ceil(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesDifference = Math.ceil(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsDifference = Math.ceil((timeDifference % (1000 * 60)) / 1000);

    setDays(daysDifference);
    setHours(hoursDifference);
    setMinutes(minutesDifference);
    setSeconds(secondsDifference);
    };
  useEffect(() => {
    const clock = setInterval(actualizarContador, 1000);

    return function clear() {
      clearInterval(clock);
    };
  });
  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center bg-cover bg-no-repeat
      w-full h-full relative"
      style={{
        backgroundImage: `url(${Beach})`,
      }}
    >
      <h1
        className="absolute font-bold top-[10%] text-center text-5xl md:text-6xl 
        leading-snug md:leading-normal max-md:top-[5%]"
      >
        PLANCITO <br className="md:hidden" />
        DE <br className="md:hidden" />
        VERANO
      </h1>
      <div className="flex gap-3 sm:gap-1   backdrop-blur-md h-36 rounded-lg overflow-hidden pt-2 pr-3 sm:pt-0 sm:pr-0">
        <div className="flex flex-col backdrop-blur-md sm:w-32 w-16">
          <div className="h-16 sm:h-20 backdrop-blur-md">
            <div className="h-[60px] flex justify-center backdrop-blur-md sm:text-3xl text-xl !text-[#000000]">
              <div
                className={
                  days >= 0 &&
                  hours == 23 &&
                  minutes == 59 &&
                  seconds == 59
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {days}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#000000]">
              {days == 1 ? "Dia" : "Dias"}
            </span>
          </div>
        </div>
        <div className="flex flex-col backdrop-blur-md sm:w-32 w-16">
          <div className="h-16 sm:h-20 backdrop-blur-md">
            <div className="h-[60px] flex justify-center backdrop-blur-md sm:text-3xl text-xl !text-[#000000]">
              <div
                className={
                  hours >= 0 &&
                  minutes == 59 &&
                  seconds == 59
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {hours}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#000000]">
              {hours == 1 ? "Hora" : "Horas"}
            </span>
          </div>
        </div>
        <div className="flex flex-col backdrop-blur-md sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-backdrop-blur-md">
            <div className="h-[60px] flex justify-center backdrop-blur-md sm:text-3xl text-xl !text-[#000000]">
              <div
                className={
                  minutes >= 0 && seconds == 60
                    ? "animate-timer"
                    : "relative top-5"
                }
              >
                {minutes}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#000000]">
              {minutes == 1 ? "Minuto" : "Minutos"}
            </span>
          </div>
        </div>
        <div className="flex flex-col backdrop-blur-md sm:w-32 w-16">
          <div className="h-16 sm:h-20 backdrop-blur-md">
            <div className="h-[60px] flex justify-center  backdrop-blur-md overflow-hidden sm:text-3xl text-xl text-[#000000]">
              <div ref={secondTimer} className={seconds < 61 ? "animate-timer" : "relative-top-5"}>{seconds}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#000000]">
              {seconds == 1 ? "Segundo" : "Segundos"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;