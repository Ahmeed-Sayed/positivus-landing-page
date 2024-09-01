import React from "react";

export default function SplitSection({
  image,
  bgColor = "white",
  children,
  ...props
}) {
  return (
    <div className={`grid grid-cols-2 my-16  bg-${bgColor} rounded-3xl`}>
      <div>{children}</div>
      <div className="flex justify-center">
        <img src={image} />
      </div>
    </div>
  );
}
