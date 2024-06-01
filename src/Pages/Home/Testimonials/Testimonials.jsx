import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const Testimonials = () => {
 const axiosPublic = useAxiosPublic();
const {data: reviews = []} = useQuery({
  queryKey: ['review'],
  queryFn: async () =>{
    const res = await axiosPublic.get('reviews')
    return res.data
  }
})
  return (
    <section className="my-20">
      <SectionTitle
        subHeading="what Our Client Say"
        heading="Testimonials"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="w-2/3 text-center m-5">{review.details}</p>
              <h3 className="text-2xl text-orange-400 uppercase">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
