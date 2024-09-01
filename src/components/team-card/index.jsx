import React from "react";
import linkedSocialBlack from "/linkedSocialBlack.svg";
export default function TeamCard({
  image,
  name,
  position,
  description,
  id,
  ...props
}) {
  return (
    <div
      className="grid grid-cols-1 divide-y divide-black  py-10 px-[35px] border-2 border-b-4 rounded-[45px] border-black "
      key={id}
    >
      <div className="flex flex-row gap-4 relative mb-6">
        <div>
          <img src={image} />
        </div>
        <div className="flex flex-col gap-3  justify-end text-left">
          <span className="font-semibold text-lg">{name}</span>
          <span>{position}</span>
        </div>
        <div className="absolute right-0 top-0">
          <img src={linkedSocialBlack} />
        </div>
      </div>
      <div className="pt-6 text-left">{description}</div>
    </div>
  );
}
