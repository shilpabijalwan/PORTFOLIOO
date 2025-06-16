import { Box, Text, Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { ABOUT_ME } from "../pages/constants";
import Resume from "../pages/Resume";

export default function Information() {
  const fontSizeTitle = useBreakpointValue({ base: "30px", md: "50px", lg: "56px" });

  return (
    <Fade direction="top">
      <Box
        w="100%"
        px={{ base: 5, md: 10, lg: 20 }}
        py={{ base: 10, md: 20 }}
        borderRadius="xl"
      >
        {/* Top Heading Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={3}
        >
          <Text
            color="#A29C9B"
            fontSize={{ base: "27px", md: "40px", lg: "45px" }}
            fontWeight="bold"
          >
            Hi, I am
          </Text>
          <Text
            color="pink.200"
            fontSize={fontSizeTitle}
            fontWeight="bold"
            textAlign="center"
          >
            Shilpa Bijalwan
          </Text>
          <Fade direction="up">
            <Box fontSize={fontSizeTitle}>👋</Box>
          </Fade>
        </Flex>

        {/* Typewriter */}
        <Center mt={10}>
          <Text
            fontSize={{ base: "25px", md: "30px", lg: "40px" }}
            color="#C69DD2"
            fontWeight="bold"
            textAlign="center"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("A Front-end Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("A Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Programmer")
                  .start();
              }}
            />
          </Text>
        </Center>

        {/* About Me Section */}
        <Box
          maxW="1000px"
          mx="auto"
          textAlign="justify"
          mt={8}
          px={{ base: 4, md: 10 }}
          fontFamily="Segoe Print"
          fontSize={15}
          color="#A29C9B"
        >
          <Fade direction="down">
            <Text letterSpacing={{ base: 0.5, md: 2 }}>{ABOUT_ME}</Text>
          </Fade>
        </Box>

        {/* Resume Button */}
        <Center mt={8}>
          <Resume />
        </Center>
      </Box>
    </Fade>
  );
}
