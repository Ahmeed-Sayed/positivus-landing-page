import React from "react";
import proposal from "/proposal.svg";
export default function Proposal() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-16  bg-stone-100 rounded-3xl">
      <div className="text-start flex flex-col justify-between gap-5 h-full p-16">
        <span className=" text-2xl lg:text-3xl font-bold">
          Let’s make things happen
        </span>
        <span className="text-xl lg:text-2xl  ">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </span>
        <button className="bg-black text-white hover:bg-stone-700 hover:text-stone-200 px-8 py-5 rounded-2xl text-[20px] w-full lg:w-fit  font-semibold">
          Get your free proposal
        </button>
      </div>
      <div className=" hidden lg:flex justify-center">
        <img src={proposal} />
      </div>
    </div>
  );
}
