import React from "react";
import { Text, Box, useColorMode, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ABOUT_ME } from "./constants";

export default function About() {
  return (
    <Fade direction="top">
      <Box
        id="about"
        w={'100%'}
        px={{ base: "5", md: "10", lg: "20" }}
          py={"150px"}
       
      >
        <Text
          color={"#C69DD2"}
          fontSize={{ base: 25, md: 35, lg: 56 }}
          fontWeight={"bold"}
          top={5}
          mb={5}
        >
          About Me
        </Text>

        <Box
          display={"flex"}
          flexWrap={["wrap-reverse", "wrap-reverse", "nowrap", "nowrap"]}
          justifyContent={"center"}
          w="90%"
          margin={"auto"}
          // border={"1px solid purple"}
          gap={30}
        >
          <Box
            // border={"1px solid green"}
            textAlign={"justify"}
            fontFamily={"Segoe Print"}
            fontSize={15}
            color={"#A29C9B"}
            justifyContent={"space-around"}
            flex={["", "", 2, 3]}
          >
            {/* <Fade direction="top"> */}
              <Text
                letterSpacing={{ base: 0.5, md: 2, lg: 2 }}
                textAlign={"justify"}
                lineHeight={"30px"}
                fontSize={["xs", "sm", "md", "md"]}
              >
                {ABOUT_ME}
              </Text>
            {/* </Fade> */}
          </Box>
        
        </Box>
      </Box>
    </Fade>
  );
}
