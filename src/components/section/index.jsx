import React, { Fragment } from "react";

export default function Section({ title, subText, marginTop, children }) {
  return (
    <Fragment>
      <div className={marginTop}>
        <div className="flex flex-col lg:flex-row text-start items-center gap-8 mb-5 lg:mb-20">
          <span className="bg-custom-green p-1 rounded-lg text-[40px] font-semibold">
            {title}
          </span>
          <span className="w-3/4 lg:w-2/4 text-center lg:text-justify">
            {subText}
          </span>
        </div>
        {children}
      </div>
    </Fragment>
  );
}
