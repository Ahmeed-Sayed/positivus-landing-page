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
import { useMediaQuery } from "@mui/material";
import processes from "./working-process-data.json";
export default function WorkingProcess() {
  const [expanded, setExpanded] = useState("01");
  const xMobScreen = useMediaQuery("(max-width:1024px)");

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
    padding: xMobScreen ? "15px 20px" : "40px 60px",
    marginBottom: "30px",
    borderRadius: "45px",
    borderWidth: "2px",
    borderBottomWidth: "5px",
    borderColor: "black",
    backgroundColor: "#F3F3F3",
    justifyContent: "space-between",
  }));
  const sectionContent = {
    title: "Our Working Process",
    subText: "Step-by-Step Guide to Achieving Your Business Goals",
  };

  return (
    <Section {...sectionContent} marginTop={"mt-[140px]"}>
      {processes.map((process, index) => (
        <CustomAccordion
          key={index}
          expanded={expanded === process.id}
          onChange={handleChange(process.id)}
        >
          <AccordionSummary
            expandIcon={
              expanded === process.id ? (
                <RemoveCircleOutlineIcon fontSize={xMobScreen ? "" : "large"} />
              ) : (
                <AddCircleOutlineIcon fontSize={xMobScreen ? "" : "large"} />
              )
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              sx={{
                fontSize: xMobScreen ? "16px" : "60px",
                marginRight: "25px",
              }}
            >
              {process.id}
            </Typography>
            <Typography
              sx={{
                fontSize: xMobScreen ? "16px" : "60px",
              }}
            >
              {process.title}
            </Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: xMobScreen ? "12px" : "30px",
              }}
            >
              {process.text}
            </Typography>
          </AccordionDetails>
        </CustomAccordion>
      ))}
    </Section>
  );
}
