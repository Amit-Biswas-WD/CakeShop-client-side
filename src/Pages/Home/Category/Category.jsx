import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Category = () => {
  return (
    <section>
      <div className="my-24">
        <h2 className="text-center font-extrabold text-4xl my-10">
          Well Products & Categories
        </h2>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/c8C9hZq/black-forest-cake-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/BGL88CB/ferrero-rocher-chocolate-cake-1-large.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/HPjW3fC/brown-bread-3.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/WHwpDZj/P-Black-Forest-Cakes-large-1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/z2g01fb/vanilla-anniversary-cake-2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/ynZfPk7/Premium-Chocolate-Cakes-large.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/mCthB1Y/vanilla-fresh-fruit-cake-1-large.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/4N0ktPq/Chocolate-Spread.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full"
                src="https://i.ibb.co/mCthB1Y/vanilla-fresh-fruit-cake-1-large.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Category;
