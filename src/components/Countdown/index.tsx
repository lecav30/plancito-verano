import { useRef, useState, useEffect } from "react";
import Beach from "../../images/playahd2.jpg";
import useScreenWidth from "../../hooks/useScreenWidth";

const Countdown = () => {
  const screenWidth = useScreenWidth();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const daysCircle = useRef<SVGCircleElement | null>(null);
  const hourCircle = useRef<SVGCircleElement | null>(null);
  const minuteCircle = useRef<SVGCircleElement | null>(null);
  const secondCircle = useRef<SVGCircleElement | null>(null);

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

    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        440 - (440 * daysDifference) / 365
      }px`;
    }
    if (hourCircle.current) {
      hourCircle.current.style.strokeDashoffset = `${
        451 - (451 * hoursDifference) / 24
      }px`;
    }
    if (minuteCircle.current) {
      minuteCircle.current.style.strokeDashoffset = `${
        451 - (451 * minutesDifference) / 60
      }px`;
    }
    if (secondCircle.current) {
      secondCircle.current.style.strokeDashoffset = `${
        451 - (451 * secondsDifference) / 60
      }px`;
    }
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
        leading-snug md:leading-normal"
      >
        PLANCITO <br className="md:hidden" />
        DE <br className="md:hidden" />
        VERANO
      </h1>
      {screenWidth < 768 ? (
        <div className="relative backdrop-blur-md rounded-lg mt-20">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-[#88adf1] stroke-[8px]"
            ></circle>
            <circle
              r="70"
              ref={daysCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "440px",
                strokeDashoffset: "440px",
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div
            className="text-[#000000] absolute top-[70px] left-11 text-xl font-semibold
            flex flex-col items-center w-24 h-20"
          >
            <div className="flex gap-2">
              <span className="text-center">{days}</span>
              <span className="text-center">Días</span>
            </div>
            <div className="flex gap-2">
              <span className="text-center">{hours}</span>
              <span className="text-center">Horas</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center backdrop-blur-md rounded-lg">
          <div className="relative">
            <svg className="-rotate-90 h-48 w-48">
              <circle
                r="70"
                cx="90"
                cy="90"
                className="fill-transparent stroke-[#88adf1] stroke-[8px]"
              ></circle>
              <circle
                r="70"
                ref={daysCircle}
                cx="90"
                cy="90"
                style={{
                  strokeDasharray: "440px",
                  strokeDashoffset: "440px",
                }}
                className="fill-transparent stroke-white stroke-[8px]"
              ></circle>
            </svg>
            <div
              className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold
            flex flex-col items-center w-24 h-20"
            >
              <span className="text-center">{days}</span>
              <span className="text-center">Dias</span>
            </div>
          </div>
          <div className="relative">
            <svg className="-rotate-90 h-48 w-48">
              <circle
                r="70"
                cx="90"
                cy="90"
                className="fill-transparent stroke-[#88adf1] stroke-[8px]"
              ></circle>
              <circle
                r="70"
                ref={hourCircle}
                cx="90"
                cy="90"
                style={{
                  strokeDasharray: "451px",
                  strokeDashoffset: "451px",
                }}
                className="fill-transparent stroke-white stroke-[8px]"
              ></circle>
            </svg>
            <div
              className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold
              flex flex-col items-center w-24 h-20"
            >
              <span className="text-center">{hours}</span>
              <span className="text-center">Horas</span>
            </div>
          </div>
          <div className="relative">
            <svg className="-rotate-90 h-48 w-48">
              <circle
                r="70"
                cx="90"
                cy="90"
                className="fill-transparent stroke-[#88adf1] stroke-[8px]"
              ></circle>
              <circle
                r="70"
                ref={minuteCircle}
                cx="90"
                cy="90"
                style={{
                  strokeDasharray: "451px",
                  strokeDashoffset: "451px",
                }}
                className="fill-transparent stroke-white stroke-[8px]"
              ></circle>
            </svg>
            <div
              className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold 
            flex flex-col items-center w-24 h-20"
            >
              <span className="text-center">{minutes}</span>
              <span className="text-center">Minutos</span>
            </div>
          </div>
          <div className="relative">
            <svg className="-rotate-90 h-48 w-48">
              <circle
                r="70"
                cx="90"
                cy="90"
                className="fill-transparent stroke-[#88adf1] stroke-[8px]"
              ></circle>
              <circle
                r="70"
                ref={secondCircle}
                cx="90"
                cy="90"
                style={{
                  strokeDasharray: "451px",
                  strokeDashoffset: "451px",
                }}
                className="fill-transparent stroke-white stroke-[8px]"
              ></circle>
            </svg>
            <div
              className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold 
            flex flex-col items-center w-24 h-20"
            >
              <span className="text-center">{seconds}</span>
              <span className="text-center">Segundos</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
