import {useState , useEffect} from 'react';
const Countdown = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMin] = useState(0);
  const [segundos, setSeg] = useState(0);

  useEffect(() => {
    const fechaLimite = new Date('2024-03-09T00:00:00');
    const actualizarContador = () =>{
      const fechaActual = new Date();
      const diferenciaTiempo = fechaLimite.getTime() - fechaActual.getTime();
      const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 *24));
      const diferenciaHoras = Math.ceil((diferenciaTiempo % (1000 * 60 * 60 *24))/(1000*60*60));
      const difereciaMin = Math.ceil((diferenciaTiempo % (1000*60*60)) / (1000*60));
      const diferenciaSeg = Math.ceil((diferenciaTiempo % (1000*60)) / (1000));

      setDias(diferenciaDias);
      setHoras(diferenciaHoras);
      setMin(difereciaMin);
      setSeg(diferenciaSeg);
    }
    
  
    const reloj = setInterval(actualizarContador,1000);

    return function limpieza (){
      clearInterval(reloj);
    }
  });
  return (
    <div>
      <h1>Countdown!</h1>
      <p>Dias restantes: {dias}</p>
      <p>Horas: {horas}</p>
      <p>Minutos: {minutos}</p>
      <p>Segundos: {segundos}</p>
      
    </div>

  );
};

export default Countdown;
