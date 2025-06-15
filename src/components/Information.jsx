import { Box, Text, Center, Textarea, Flex } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

import Typewriter from "typewriter-effect";
import { SUMMERY } from "../pages/constants";

export default function Information() {
  return (
    <Fade direction="top">
      <Box
        // border={"1px solid blue"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        px={{ base: "5", md: "10", lg: "20" }}
        py={{ base: "2", md: "10", lg: "5" }}
      >
        <Center display={"flex"}>
          <Text
            color={"#A29C9B"}
            fontSize={{ base: "27px", md: "40px", lg: "45px" }}
            fontWeight={"bold"}
            pr={5}
          >
            Hi, I am
          </Text>
          <Text
            color={"pink.200"}
            fontSize={{ base: "30px", md: "50px", lg: "56px" }}
            fontWeight={"bold"}
          >
            Shilpa Bijalwan
          </Text>

          <Fade
            fontSize={30}
            direction="up"
            animation-duration="5s"
          >
            <Box
              fontSize={{ base: "30px", md: "50px", lg: "50px" }}
              fontWeight={"bold"}
            >
              👋
            </Box>
          </Fade>
        </Center>

        <Text
          fontSize={{ base: "25px", md: "30px", lg: "40px" }}
          mt={10}
          color={"#C69DD2"}
          fontWeight={"bold"}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter

                .typeString("A Front-end Developer")

                .pauseFor(1000)
                .deleteAll()
                .typeString("A Web Developer")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Programmer")
                .start();
            }}
          />
        </Text>
        <Box 
        px={{ base: "5", md: "10", lg: "20" }}
        // py={{ base: "2", md: "10", lg: "5" }}
          // border={"1px solid green"}
          w="100%"
          textAlign={"justify"}
          p={5}
          mt={5}
          fontFamily={"Segoe Print"}
          fontSize={15}
          color={"#A29C9B"}
        >
          <Fade direction="down">
            <Text letterSpacing={{ base: 0.5, md: 2, lg: 2 }}>
              {SUMMERY}
            </Text>
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
}
