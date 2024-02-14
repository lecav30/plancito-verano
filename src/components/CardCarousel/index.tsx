import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import Beach from "../../images/playahd2.jpg";

const CardCarousel = () => {
  const Plans = [
    {
      img: Beach,
      name: "Bar Acuático",
      prices: (
        <div>
          <b>Movilidad:</b> S/.50 a S/.60 desde <i>Plaza Norte</i> o{" "}
          <i>Metro Izaguirre</i>. <br />
          <b>Entrada:</b> S/.20 (hay combos disponibles). <br />
          <b>Comida:</b> S/.20 aprox (o incluida en el combo).
          <br /> <br />
          <b>Total:</b> S/.100 - S/.120
        </div>
      ),
      reference: "",
      resume: "",
    },
    {
      img: Beach,
      name: "Playas Huacho",
      prices: (
        <div>
          <b>Opciones:</b> Hornillos, Colorado, Cabeza de León, Paraíso,
          Palmeritas, Cocoy. <br />
          <b>Movilidad:</b> S/.50 a S/.60 desde <i>Plaza Norte</i> o{" "}
          <i>Metro Izaguirre</i>. <br />
          <b>Comida:</b> S/.20 a S/.25 aprox. <br />
          <b>Alquila una sombrilla y silla:</b> S/.20 aprox.
          <br /> <br />
          <b>Total:</b> S/.100 - S/.120
        </div>
      ),
      reference: "",
      resume: "",
    },
    {
      img: Beach,
      name: "Cerro Azul",
      prices: (
        <div>
          <b>Movilidad:</b> S/.40 a S/.60. <br />
          <b>Comida:</b> S/.20 a S/.25 aprox. <br />
          <b>Alquila una sombrilla y silla:</b> S/.20 aprox. <br />
          <i>En caso de acampar:</i> <br /> <b>Equipamiento:</b> Leña/Tienda de
          acampar/Comida (opcional): S/.20 a S/.30.
          <br /> <br />
          <b>Total:</b> S/.120 - S/.130
        </div>
      ),
      reference: "",
      resume: "",
    },
  ];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Carousel showIndicators={false} showStatus={false} className="max-w-6xl">
        {Plans.map((plan, index) => (
          <Card
            key={index}
            img={plan.img}
            name={plan.name}
            prices={plan.prices}
            reference={plan.reference}
            resume={plan.resume}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
