import React, { useState } from "react";
import logo from "/logo.svg";
import logoMob from "/logoMob.svg";
import ReorderIcon from "@mui/icons-material/Reorder";
import useIsMobile from "../../custom-hooks/isMobile";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-baseline lg:items-center">
      {isMobile ? (
        <img src={logoMob} alt="Logo" />
      ) : (
        <img src={logo} alt="Logo" />
      )}
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#191A23] dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded={isOpen}
        >
          <ReorderIcon />
        </button>
        <div
          className={`${
            isOpen
              ? "flex border rounded-lg border-black px-3 py-4 mt-2 "
              : "hidden"
          } flex-col gap-4 items-center text-start lg:flex lg:flex-row lg:w-full lg:order-1 `}
          id="mobile-menu-2"
        >
          <div className="flex flex-col lg:flex-row gap-3">
            <a
              href="#"
              className="hover:bg-[#191A23] w-max rounded p-2 hover:text-white"
            >
              About us
            </a>
            <a
              href="#"
              className="hover:bg-[#191A23] w-max rounded p-2 hover:text-white"
            >
              Service
            </a>
            <a
              href="#"
              className="hover:bg-[#191A23] w-max rounded p-2 hover:text-white"
            >
              Use Cases
            </a>
            <a
              href="#"
              className="hover:bg-[#191A23] w-max rounded p-2 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:bg-[#191A23] w-max rounded p-2 hover:text-white"
            >
              Blog
            </a>
          </div>
          <button className="border px-4 py-3 rounded-lg border-black hover:bg-black hover:text-white w-full">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
