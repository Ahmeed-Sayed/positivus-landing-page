import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import Section from "../section";

export default function WorkingProcess() {
  const [expanded, setExpanded] = useState("01");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const CustomAccordion = styled(Accordion)(({ theme }) => ({
    "&.Mui-expanded": {
      backgroundColor: "#B9FF66",
    },
    "&::before": {
      display: "none",
    },
    padding: "40px 60px",
    marginBottom: "30px",
    borderRadius: "45px",
    borderWidth: "2px",
    borderBottomWidth: "5px",
    borderColor: "black",
    backgroundColor: "#F3F3F3",
  }));

  const title = "Our Working Process";
  const subText = "Step-by-Step Guide to Achieving Your Business Goals";

  const processes = [
    {
      id: "01",
      title: "Consultation",
      text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "02",
      title: "Research and Strategy Development",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla iusto dolorum laboriosam veniam vel eos, eum debitis saepe autem quam odio voluptate numquam sunt, aliquam reiciendis quisquam facilis ullam.",
    },
    {
      id: "03",
      title: "Implementation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla iusto dolorum laboriosam veniam vel eos, eum debitis saepe autem quam odio voluptate numquam sunt, aliquam reiciendis quisquam facilis ullam.",
    },
    {
      id: "04",
      title: "Monitoring and Optimization",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla iusto dolorum laboriosam veniam vel eos, eum debitis saepe autem quam odio voluptate numquam sunt, aliquam reiciendis quisquam facilis ullam.",
    },
    {
      id: "05",
      title: "Reporting and Communication",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla iusto dolorum laboriosam veniam vel eos, eum debitis saepe autem quam odio voluptate numquam sunt, aliquam reiciendis quisquam facilis ullam.",
    },
    {
      id: "06",
      title: "Continual Improvement",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla iusto dolorum laboriosam veniam vel eos, eum debitis saepe autem quam odio voluptate numquam sunt, aliquam reiciendis quisquam facilis ullam.",
    },
  ];

  return (
    <Section title={title} subText={subText} marginTop={"mt-[140px]"}>
      {processes.map((process, index) => (
        <CustomAccordion
          key={index}
          expanded={expanded === process.id}
          onChange={handleChange(process.id)}
        >
          <AccordionSummary
            expandIcon={
              expanded === process.id ? (
                <RemoveCircleOutlineIcon fontSize="large" />
              ) : (
                <AddCircleOutlineIcon fontSize="large" />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontSize: "60px", marginRight: "25px" }}>
              {process.id}
            </Typography>
            <Typography fontSize={"30px"} alignSelf="center">
              {process.title}
            </Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Typography>{process.text}</Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </Section>
  );
}
