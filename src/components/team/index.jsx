import React from "react";
import Section from "../section";
import johnSmith from "/johnSmith.svg";
import brianWilliams from "/brianWilliams.svg";
import michealBrown from "/michealBrown.svg";
import TeamCard from "../team-card";
export default function Team() {
  const title = "Team";
  const subText =
    "Meet the skilled and experienced team behind our successful digital marketing strategies";
  const team = [
    {
      id: "0001",
      name: "John Smith",
      image: johnSmith,
      position: "CEO and Founder",
      description:
        "7+ years of experience in project management and team leadership. Strong communication skills and commitment to team development.",
    },
    {
      id: "0002",
      name: "Michael Brown",
      image: michealBrown,
      position: "Senior SEO Specialist",
      description:
        "5+ years experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    },
    {
      id: "0003",
      name: "Brian Williams",
      image: brianWilliams,
      position: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing, proficient in audience metrics and building engaging content.",
    },
    {
      id: "0004",
      name: "John Smith",
      image: johnSmith,
      position: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    },
    {
      id: "0005",
      name: "John Smith",
      image: michealBrown,
      position: "Content Creator",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    },
    {
      id: "0006",
      name: "John Smith",
      image: brianWilliams,
      position: "Director of Operations",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    },
  ];
  return (
    <Section title={title} subText={subText} marginTop={"mt-[140px]"}>
      <div className="grid grid-cols-3 gap-10">
        {team.map((member, index) => {
          return <TeamCard {...member}  />;
        })}
      </div>
    </Section>
  );
}
