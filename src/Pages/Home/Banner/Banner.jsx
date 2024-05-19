import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src="https://i.ibb.co/Qf7wx2g/image4.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/mRg5wg4/image2.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/QpRXbQh/image1.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/Q6XQYgD/image3.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/TwgTR09/image5.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/vZtyD9N/image6.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
