import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import { useDispatch } from "react-redux";
import { change } from "../../features/plans/plansSlice";
import { Plans } from "../../util/Plans";

const CardCarousel = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-full w-full lg:w-1/2">
      <Carousel
        showIndicators={false}
        showStatus={false}
        className="max-w-3xl"
        onChange={(index) => {
          dispatch(change(index));
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
              disabled
            >
              Quiero ir ahí!
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
