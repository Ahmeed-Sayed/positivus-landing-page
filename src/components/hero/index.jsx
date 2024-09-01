import React from "react";
import illustration from "/illustration.svg";
import SplitSection from "../split-section";
export default function Hero() {
  return (
    <SplitSection image={illustration}>
      <div  className="text-start flex flex-col gap-5">
        <h1 className="font-bold text-6xl">
          Navigating the digital landscape for success
        </h1>
        <h4 className="text-[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </h4>
        <div>
          <button className="bg-black text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-4 rounded-lg text-[20px] font-thin">
            Book a consultation
          </button>
        </div>
      </div>
    </SplitSection>
  );
}
