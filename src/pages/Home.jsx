import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Information from "../components/Information";
import { Link } from "react-router-dom";
import Simple from "../navbar/Nav";

import Skill from "./Skill";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import { DrawerColor } from "../components/DrawerColor";
import WorkExperience from "./WorkingExperience";

export default function Home() {
  return (
    <Box
      id="#"
      pt={[10, 20, 30, 40]}
      
    >
     
      <Information />

      <About />
      <WorkExperience />
      <Skill />
      <Project />
      <Contact />
    </Box>
  );
}
