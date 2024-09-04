import React from "react";
import positivusLight from "/positivusLight.svg";
import socialLinkedLight from "/socialLinkedLight.svg";
import socialFacebookLight from "/socialFacebookLight.svg";
import socialXLight from "/socialXLight.svg";
import { Divider } from "@mui/material";
export default function Footer() {
  const positivusContactData = {
    email: "info@positivus.com",
    phone: "555-567-8901",
    address: "1234 Main St, Moonstone City, Stardust State 12345",
  };

  return (
    <section className="absolute left-0 -bottom-34 h-max  sm:relative px-4 py-3 lg:px-16 lg:py-12 bg-custom-black text-white sm:rounded-t-[45px] mt-24 lg:mt-36 flex flex-col gap-6 lg:gap-20">
      <div className="flex flx-col gap-6 lg:gap-16 ">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16 w-full ">
          <div className="flex flex-row gap-4 justify-center">
            <img src={positivusLight} />
            <span className="text-3xl">Positivus</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 items-center font-thin">
            <a href="#" className="lg:underline">
              About us
            </a>
            <a href="#" className="lg:underline">
              Service
            </a>
            <a href="#" className="lg:underline">
              Use Cases
            </a>
            <a href="#" className="lg:underline">
              Pricing
            </a>
            <a href="#" className="lg:underline">
              Blog
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-row gap-5 items-center">
            <a>
              <img src={socialLinkedLight} />
            </a>
            <a>
              <img src={socialFacebookLight} />
            </a>
            <a>
              <img src={socialXLight} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16">
        <div className="flex flex-col gap-4 text-center items-center lg:text-left mb-2">
          <span className="bg-custom-green text-black text-xl font-semibold w-fit rounded-lg px-2 my-2">
            Contact us:
          </span>
          <span>Email: {positivusContactData.email}</span>
          <span>Phone: {positivusContactData.phone}</span>
          <span>Address: {positivusContactData.address}</span>
        </div>
        <div className="bg-[#292A32] px-3 py-5 lg:px-10 lg:py-14 flex flex-col lg:flex-row gap-5 rounded-lg items-center  ">
          <input
            className="bg-transparent px-9 py-4 border-white border rounded-xl text-white text-lg w-3/4"
            placeholder="Email"
            type="email"
          />
          <button
            type="button"
            className="bg-custom-green text-black text-lg hover:bg-[#D5FFA4] hover:cursor-pointer px-9 py-4 rounded-lg w-3/4"
          >
            Subscribe to news
          </button>
        </div>
      </div>
      <div>
        <Divider
          color="white"
          sx={{ marginBottom: "50px", marginTop: "0px" }}
        />
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
