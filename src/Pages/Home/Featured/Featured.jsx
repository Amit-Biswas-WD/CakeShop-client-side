import { Parallax } from "react-parallax";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="my-20">
      <SectionTitle
        heading="Human taste receptors can be divided into four categories: sweet, salty, sour, and bitter."
        subHeading="FROM OUR MENU"
      />
      <Parallax
        className="mt-10"
        bgImage="https://i.ibb.co/xCPyFS4/images-5.jpg"
        bgImageAlt="Parallax background"
        strength={500}
      >
        <div className="md:flex gap-8 my-40 text-black p-10 bg-slate-400 bg-opacity-50">
          <div className="md:w-1/2">
            <img
              className="w-full my-10"
              src="https://i.ibb.co/rbJcwVF/download.jpg"
              alt="Featured dish"
            />
          </div>
          <div className="md:w-1/2 my-12">
            <h2 className="text-2xl">March 20, 2023</h2>
            <h2 className="text-3xl my-4 uppercase">WHERE CAN I GET SOME?</h2>
            <p className="my-4">
              Cake holds a deep symbolic meaning in birthday celebrations. It
              represents the joy and sweetness of life, and blowing out the
              candles is seen as a way to make a wish for the upcoming year. The
              act of cutting and sharing the cake with loved ones also
              symbolizes sharing happiness and good fortune.
            </p>
            <button className="btn glass text-red-700 hover:text-white hover:bg-black">
              Read More
            </button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Featured;
