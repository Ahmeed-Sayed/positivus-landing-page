import React from "react";
import Section from "../section";
import caseStudiesData from "./case-studies.json";
import greenArrowLink from "/greenArrowLink.svg";
import { useMediaQuery } from "@mui/material";
import CaseStudiesMob from "./caseStudiesMob";
export default function CaseStudies() {
  const xMobScreen = useMediaQuery("(max-width:1024px)");
  const sectionContent = {
    title: "Case Studies",
    subText:
      "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  };
  return (
    <Section {...sectionContent} marginTop="[140px]">
      {xMobScreen ? (
        <CaseStudiesMob />
      ) : (
        <div className="grid grid-cols-3 divide-x-4  divide-solid divide-stone-300 bg-custom-black text-white text-lg  py-16 text-left rounded-3xl">
          {caseStudiesData.map((caseStudy, index) => (
            <div key={index} className="flex flex-col  px-16 gap-y-5">
              <span>{caseStudy.text}</span>
              <div className="flex justify-start gap-3 text-custom-green">
                Learn More <img src={greenArrowLink} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
