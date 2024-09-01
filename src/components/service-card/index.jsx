import React, { useEffect, useState } from "react";
import arrowLink from "/arrowLink.svg";
import lightArrowLink from "/lightArrowLink.svg";

export default function ServiceCard({ title, titleBgColor, image, bgColor }) {
  const [bgClass, setBgClass] = useState("bg-stone-100");
  const [titleBgClass, setTitleBgClass] = useState("bg-white");

  useEffect(() => {
    setBgClass(`bg-${bgColor}`);
    setTitleBgClass(`bg-${titleBgColor}`);
  }, [bgColor, titleBgColor]);

  const titleStyle = titleBgColor.startsWith("#")
    ? { backgroundColor: titleBgColor }
    : {}; //to handle tailwind dynamic classess problem

  return (
    <div
      className={`p-[50px] grid grid-cols-2 border border-black border-b-4 gap-2 rounded-3xl ${bgClass}`}
    >
      <div className="flex flex-col justify-between text-start text-base">
        <span
          className={`text-3xl w-fit font-bold rounded-lg text-center p-1 ${titleBgClass}`}
          style={titleStyle}
        >
          {title}
        </span>
        <a href="#">
          <div className="flex flex-row justify-start gap-4 text-black items-center">
            <img src={bgColor === "black" ? lightArrowLink : arrowLink} />
            <span
              className={`text-[20px] text-base ${
                bgColor === "black" && "text-white"
              }`}
            >
              Learn more
            </span>
          </div>
        </a>
      </div>
      <img src={image} alt="card image" />
    </div>
  );
}
