import React, { Fragment } from "react";

export default function Section({ title, subText, marginTop, children }) {
  return (
    <Fragment>
      <div className={marginTop}>
        <div className="flex flex-row text-start items-center gap-8 mb-20">
          <span className="bg-[#B9FF66] p-1 rounded-lg text-[40px] font-semibold">
            {title}
          </span>
          <span className="w-2/4 text-justify ">{subText}</span>
        </div>
        {children}
      </div>
    </Fragment>
  );
}
