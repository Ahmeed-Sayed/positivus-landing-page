import React from "react";
import Section from "../section";
import johnSmith from "/johnSmith.svg";
import brianWilliams from "/brianWilliams.svg";
import michealBrown from "/michealBrown.svg";
import TeamCard from "../team-card";
import team from "./team-data.json";
export default function Team() {
  const sectionContent = {
    title: "Team",
    subText:
      "Meet the skilled and experienced team behind our successful digital marketing strategies",
  };
  return (
    <Section {...sectionContent} marginTop={"mt-[140px]"}>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-10 ">
        {team.map((member, index) => {
          return <TeamCard {...member} />;
        })}
      </div>
    </Section>
  );
}
