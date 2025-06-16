import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { GridItem, Grid, Link, Image } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { SKILLS_DATA } from "./constants";


export default function Skill() {
  return (
    <Fade>
      <Box
      w={'100%'}
        id="skills"
        px={{ base: "5", md: "10", lg: "20" }}
        py={"100px"}>
        <Text
          color={"#C69DD2"}
          fontSize={{ base: 25, md: 35, lg: 56 }}
          fontWeight={"bold"}
          top={5}
          mb={5}
          // border={"1px solid white"}
        >
          Skills
        </Text>
        <Grid
          className="skills-card"
          p={["4%", "0%", "0%", "0%"]}
          px={{ base: "5", md: "10", lg: "20" }}

          w={["100%", "80%", "85%", "100%"]}
          gridTemplateColumns={[
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={4}
          // margin={"auto"}
          >
          {SKILLS_DATA.map(({ icon, title, link }) => {
            return (
              <GridItem
              py={16}
               overflow="hidden" style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}>

                <Link href={link} target="_blank">
                  <Image
                    className="skills-card-img"
                    src={icon}
                    w="30%"
                    margin={"auto"}
                    transition="all .1s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    borderRadius="10%"
                  />
                </Link>
                <Text
                  className="skills-card-name"
                  textAlign={"center"}
                  fontSize={["15px", "20px", "20px", "22px"]}
                  color={"#C69DD2"}>
                  {title}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Fade>
  );
}
