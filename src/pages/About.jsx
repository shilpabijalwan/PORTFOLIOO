import React from "react";
import { Text, Box, useColorMode, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade direction="right">
      <Box
        id="about"
        // border={"1px solid red"}
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
            <Fade direction="top">
              <Text
                letterSpacing={{ base: 0.5, md: 2, lg: 2 }}
                textAlign={"justify"}
                lineHeight={"30px"}
                fontSize={["xs", "sm", "md", "md"]}
              >
                A passionate and dedicated programmer with a strong desire to
                build a successful career in the field. Thrive on solving
                problems and enjoy the thrill of diving into new projects. Quick
                learner ,constantly exploring different programming languages
                and frameworks to expand knowledge.Eager to contribute my skills
                and bring a fresh perspective to the table. Committed to
                continuous learning and staying updated with the latest industry
                trends. With a strong foundation in programming fundamentals and
                a proactive mindset. Excited to embark on this journey and make
                a meaningful impact as a programmer.
              </Text>
            </Fade>
          </Box>
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"50%"}
            alignItems={"center"}
          >
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zRAOfjdgfg-H_lAFAqcdXRXrZcL2g5lDSQ&usqp=CAU"
              borderRadius={"50%"}
            />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
