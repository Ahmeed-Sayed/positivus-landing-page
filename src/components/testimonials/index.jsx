import React, { Fragment } from "react";
import Section from "../section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { Pagination, Navigation } from "swiper/modules";
import teamTestimonials from "./testimonials-data.json";
import { useMediaQuery } from "@mui/material";
export default function Testimonials() {
  const xMobScreen = useMediaQuery("(max-width:1024px)");

  const sectionContent = {
    title: "Testimonials",
    subText:
      "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  };

  return (
    <Section marginTop={"mt-[100px]"} {...sectionContent}>
      <Swiper
        slidesPerView={xMobScreen ? "1" : "2"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper bg-custom-black text-white rounded-[45px]"
      >
        {teamTestimonials.map((testimony, index) => {
          return (
            <SwiperSlide key={testimony.id} className="mt-5 lg:mt-20 mb-[150px] px-8">
              <div className="flex flex-col  ">
                <div className="border-2 border-custom-green tooltip relative rounded-[45px] px-3 lg:px-14 pt-4 lg:pt-12 pb-8 lg:pb-14 text-justify  ">
                  <span>{testimony.text}</span>
                </div>
                <div className="text-xl flex flex-col text-left mt-6 ps-10 lg:ps-20 pt-5 pb-8 lg:pb-16 ">
                  <span className="text-custom-green text-xl">
                    {testimony.name}
                  </span>
                  <span>{testimony.position}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
}
