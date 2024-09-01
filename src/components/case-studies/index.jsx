import React, { Fragment } from "react";
import Section from "../section";
import greenArrowLink from "/greenArrowLink.svg";
export default function CaseStudies() {
  const title = "Case Studies";
  const subText =
    "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies";
  ("Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies");

  const caseStudies = [
    {
      id: 1,
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      id: 2,
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      id: 3,
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];
  return (
    <Section title={title} subText={subText} marginTop="[140px]">
      <div className="grid grid-cols-3 divide-x-4  divide-solid divide-stone-300 bg-[#191A23] text-white text-lg  py-16 text-left rounded-3xl">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="flex flex-col  px-16 gap-y-5">
            <span>{caseStudy.text}</span>
            <div className="flex justify-start gap-3 text-[#B9FF66]">
              Learn More <img src={greenArrowLink} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
