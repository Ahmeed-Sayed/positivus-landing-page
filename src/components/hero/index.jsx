import React from "react";
import illustration from "/illustration.svg";
import SplitSection from "../split-section";
export default function Hero() {
  return (
    <div
      className={`flex flex-col my-16 bg-white rounded-3xl  lg:flex-row`}
    >
      <div className="text-center md:text-start flex flex-col gap-5 order-2 lg:order-1">
        <h1 className="font-bold text-3xl md:text-6xl sm:text-4xl ">
          Navigating the digital landscape for success
        </h1>
        <h4 className="text-sm md:text-[20px] ">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </h4>
        <div>
          <button className="bg-black text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-4 rounded-lg text-sm md:text-[20px]  font-thin">
            Book a consultation
          </button>
        </div>

      </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img src={illustration} alt="Image" />
        </div>
    </div>
  );
}
