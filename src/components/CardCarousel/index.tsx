import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";

const CardCarousel = () => {
  return (
    <Carousel showIndicators={false} showStatus={false}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Carousel>
  );
};

export default CardCarousel;
