import React, { Fragment } from "react";
import Section from "../section";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { Pagination, Navigation } from "swiper/modules";
export default function Testimonials() {
  const sectionContent = {
    title: "Testimonials",
    subText:
      "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  };

  const teamTestimonials = [
    {
      id: "0031585",
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      id: "0031586",
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
    {
      id: "0031587",
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      name: "John Smith",
      position: "Marketing Director at XYZ Corp",
    },
  ];
  return (
    <Section marginTop={"mt-[100px]"} {...sectionContent}>
      <Swiper
        slidesPerView={"2"}
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
            <SwiperSlide key={testimony.id} className="mt-20 mb-[150px]">
              <div className="flex flex-col  ">
                <div className="border-2 border-custom-green  rounded-[45px] px-14 pt-12 pb-14 text-left  ">
                  <span>{testimony.text}</span>
                </div>
                <div className="text-xl flex flex-col text-left mt-6 ps-20 pt-5 pb-16 ">
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
