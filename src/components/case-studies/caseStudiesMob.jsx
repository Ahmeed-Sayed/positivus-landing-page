import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import greenArrowLink from "/greenArrowLink.svg";
import "swiper/css/pagination";
import CaseStudies from "./case-studies.json";
export default function CaseStudiesMob() {

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className=" text-white"
    >
      {CaseStudies.map((caseStudy, index) => {
        return (
          <SwiperSlide
            key={caseStudy.id}
            className=" mt-5 lg:mt-20 lg:mb-[150px]  bg-custom-black p-5 rounded-3xl w-3/4"
          >
            <div key={index} className="flex flex-col px-4 lg:px-16  gap-y-5 h-max">
              <span className="text-base ">{caseStudy.text}</span>
              <div className="flex justify-start gap-3 text-custom-green">
                Learn More <img src={greenArrowLink} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
