import React from "react";
import dribble from "/dribble.svg";
import notion from "/notion.svg";
import zoom from "/zoom.svg";

export default function Sponsors() {
  return (
    <div className="flex flex-row justify-center gap-48 mb-[130px]">
      <img src={dribble} />
      <img src={notion} />
      <img src={zoom} />
    </div>
  );
}
