import React from "react";
import logo from "/logo.svg";
export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-48">
      <img src={logo} />
      <div className="flex flex-row gap-14 items-baseline text-md ">
        <a href="#">About us</a>
        <a href="#">Service</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <button className="border px-4 py-3 rounded-lg border-black hover:bg-black hover:text-white">
          Request a Quote
        </button>
      </div>
    </div>
  );
}
