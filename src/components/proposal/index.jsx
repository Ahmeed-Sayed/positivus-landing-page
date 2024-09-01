import React from "react";
import SplitSection from "../split-section";
import proposal from "/proposal.svg";
export default function Proposal() {
  return (
    <SplitSection image={proposal} bgColor={"stone-100"}>
      <div className="text-start flex flex-col justify-between gap-5 h-full p-16">
        <span className="text-3xl font-bold">Let’s make things happen</span>
        <span className="text-2xl ">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </span>
        <button className="bg-black text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-5 rounded-2xl text-[20px] w-fit font-semibold">
          Get your free proposal
        </button>
      </div>
    </SplitSection>
  );
}
