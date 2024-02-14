import { useRef, useState, useEffect } from 'react';

const Countdown = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMin] = useState(0);
  const [segundos, setSeg] = useState(0);

  const daysCircle = useRef();
  const hourCircle = useRef();
  const minuteCircle = useRef();
  const secondCircle = useRef();

  const actualizarContador = () => {
    const fechaLimite = new Date('2024-03-09T00:00:00');
    const fechaActual = new Date();
    const diferenciaTiempo = fechaLimite.getTime() - fechaActual.getTime();
    const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
    const diferenciaHoras = Math.ceil((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const difereciaMin = Math.ceil((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
    const diferenciaSeg = Math.ceil((diferenciaTiempo % (1000 * 60)) / 1000);

    setDias(diferenciaDias);
    setHoras(diferenciaHoras);
    setMin(difereciaMin);
    setSeg(diferenciaSeg);

    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${440 - (440 * diferenciaDias) / 365}px`;
    }
    if (hourCircle.current) {
      hourCircle.current.style.strokeDashoffset = `${451 - (451 * diferenciaHoras) / 24}px`;
    }
    if (minuteCircle.current) {
      minuteCircle.current.style.strokeDashoffset = `${451 - (451 * difereciaMin) / 60}px`;
    }
    if (secondCircle.current) {
      secondCircle.current.style.strokeDashoffset = `${451 - (451 * diferenciaSeg) / 60}px`;
    }
  };

  useEffect(() => {
    const reloj = setInterval(actualizarContador, 1000);

    return function limpieza() {
      clearInterval(reloj);
    };
  });

  return (
    <div className="flex flex-col md:flex-row justify-center items-center rounded-lg backdrop-blur-md bg-opacity-100">
      <div className="flex flex-wrap justify-center items-center">
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
                strokeDasharray: '440px',
                strokeDashoffset: '440px',
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{dias}</span>
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
                strokeDasharray: '451px',
                strokeDashoffset: '451px',
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{horas}</span>
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
                strokeDasharray: '451px',
                strokeDashoffset: '451px',
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{minutos}</span>
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
                strokeDasharray: '451px',
                strokeDashoffset: '451px',
              }}
              className="fill-transparent stroke-white stroke-[8px]"
            ></circle>
          </svg>
          <div className="text-[#000000] absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{segundos}</span>
            <span className="text-center">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
