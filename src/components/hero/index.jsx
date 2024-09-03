import React from "react";
import illustration from "/illustration.svg";
import illustrationMob from "/illustrationMob.svg";
import useIsMobile from "../../custom-hooks/isMobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col my-16 bg-white rounded-3xl  lg:flex-row lg:justify-between ">
      <div className="text-left lg:text-start flex flex-col lg:items-start w-full lg:w-2/5 gap-8 order-2 lg:order-1 ">
        <h4 className="font-bold text-3xl  sm:text-4xl lg:text-6xl lg:leading-[77px]">
          Navigating the digital landscape for success
        </h4>
        <h4 className="text-sm lg:text-[20px] leading-7 text-justify">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </h4>
        <div className="w-full lg:w-fit">
          <button
            type="button"
            className="bg-custom-black w-full text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-4 rounded-lg text-sm md:text-[20px] font-thin"
          >
            Book a consultation
          </button>
        </div>
      </div>
      <div className="flex justify-center order-1 lg:order-2 lg:w-3/5">
        {isMobile ? (
          <div className="flex justify-center">
            <img src={illustrationMob} alt="Image" />
          </div>
        ) : (
          <div className="flex flex-row justify-center">
            <img src={illustration} alt="Image" />
          </div>
        )}
      </div>
    </div>
  );
}
