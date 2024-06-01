import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11:00-10:00"}
        heading={"Order Online"}
      >
     </SectionTitle>
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
          <img src={slide1} />
          <h3 className="text-center uppercase shadow-md lg:text-4xl -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h3 className="text-center uppercase shadow-md lg:text-4xl -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h3 className="text-center uppercase shadow-md lg:text-4xl -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h3 className="text-center uppercase shadow-md lg:text-4xl -mt-16 text-white">
            deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h3 className="text-center uppercase shadow-md lg:text-4xl -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
