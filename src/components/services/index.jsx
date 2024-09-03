import React from "react";
import ServiceCard from "../service-card";
import seo from "/seo.svg";
import analytics from "/analytics.svg";
import contentCreation from "/contentCreation.svg";
import emailMarketing from "/emailMarketing.svg";
import payPerClick from "/payPerClick.svg";
import socialMedia from "/socialMedia.svg";
import Section from "../section";
export default function Services() {
  const subText =
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:";
  const title = "Services";

  const services = [
    {
      image: seo,
      title: "Search engine optimization",
      titleBgColor: "custom-green",
      bgColor: "stone-100",
    },
    {
      image: payPerClick,
      title: "Pay-per-click advertising",
      titleBgColor: "white",
      bgColor: "custom-green",
    },
    {
      image: socialMedia,
      title: "Social Media Marketing",
      titleBgColor: "white",
      bgColor: "black",
    },
    {
      image: emailMarketing,
      title: "Email Marketing",
      titleBgColor: "custom-green",
      bgColor: "stone-100",
    },
    {
      image: contentCreation,
      title: "Content Creation",
      titleBgColor: "white",
      bgColor: "custom-green",
    },
    {
      image: analytics,
      title: "Analytics and Tracking",
      titleBgColor: "custom-green",
      bgColor: "black",
    },
  ];

  return (
    <>
      <Section title={title} subText={subText}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              titleBgColor={service.titleBgColor}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
