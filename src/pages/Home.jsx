import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import Information from "../components/Information";


import Skill from "./Skill";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { DrawerColor } from "../components/DrawerColor";
import WorkExperience from "./WorkingExperience";

export default function Home() {
  return (
    <Box id="#" pt={[10, 20, 30, 40]}>
      <Information />
      <WorkExperience />
      <Skill />
      <Project />
      <Contact />
    </Box>
  );
}
