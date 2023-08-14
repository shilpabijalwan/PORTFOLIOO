import { Box, Text, Center, Textarea, Flex } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

import Typewriter from "typewriter-effect";

export default function Information() {
  return (
    <Fade direction="left">
      <Box
        // border={"1px solid blue"}
        p={10}
        pb={20}
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

                .typeString("A Full Stack Web Developer")

                .pauseFor(1000)
                .deleteAll()
                .typeString("A MERN Stack Web Developer")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Programmer")
                .start();
            }}
          />
        </Text>
        <Box
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
              An enthusiastic and driven developer ready to contribute expertise
              to exciting projects. With a thirst for knowledge and a commitment
              to excellence,poised to embark on a successful career and drive
              positive change through programming abilities.
            </Text>
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
}
