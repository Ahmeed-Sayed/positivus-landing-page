import React from "react";
import positivusLight from "/positivusLight.svg";
import socialLinkedLight from "/socialLinkedLight.svg";
import socialFacebookLight from "/socialFacebookLight.svg";
import socialXLight from "/socialXLight.svg";
import InputField from "../input-field";
import { Divider } from "@mui/material";
export default function Footer() {
  const positivusContactData = {
    email: "info@positivus.com",
    phone: "555-567-8901",
    address: "1234 Main St, Moonstone City, Stardust State 12345",
  };

  return (
    <section className="px-16 py-12 bg-[#191A23] text-white rounded-t-[45px] mt-36 flex flex-col gap-20">
      <div className="flex flx-col gap-16 ">
        <div className="flex flex-row justify-between gap-16 w-full ">
          <div className="flex flex-row gap-4 items-center">
            <img src={positivusLight} />
            <span className="text-3xl">Positivus</span>
          </div>
          <div className="flex flex-row gap-10 items-center font-thin">
            <a href="#" className="underline">
              About us
            </a>
            <a href="#" className="underline">
              Service
            </a>
            <a href="#" className="underline">
              Use Cases
            </a>
            <a href="#" className="underline">
              Pricing
            </a>
            <a href="#" className="underline">
              Blog
            </a>
          </div>
          <div className="flex flex-row gap-5 items-center">
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
      <div className="flex flex-row gap-32">
        <div className="flex flex-col gap-6 text-left">
          <span className="bg-[#B9FF66] text-black text-xl font-semibold w-fit rounded-lg px-2">
            Contact us:
          </span>
          <span>Email: {positivusContactData.email}</span>
          <span>Phone: {positivusContactData.phone}</span>
          <span>Address: {positivusContactData.address}</span>
        </div>
        <div className="bg-[#292A32] px-10 py-14 flex flex-row gap-5 rounded-lg items-center  ">
          <input
            className="bg-transparent px-9 py-6 border-white border rounded-xl text-white text-lg"
            placeholder="Email"
            type="email"
          />
          <button
            type="button"
            className="bg-[#B9FF66] text-black text-xl hover:bg-[#D5FFA4] hover:cursor-pointer px-9 py-4 rounded-lg w-max "
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
        <div className="flex flex-row gap-10">
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
