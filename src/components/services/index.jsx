import React from "react";
import ServiceCard from "../service-card";
import seo from "/seo.svg";
import analytics from "/analytics.svg";
import contentCreation from "/contentCreation.svg";
import emailMarketing from "/emailMarketing.svg";
import payPerClick from "/payPerClick.svg";
import socialMedia from "/socialMedia.svg";
import Section from "../section";
import services from "./services-data.json"
export default function Services() {
  const subText =
    "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:";
  const title = "Services";

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
