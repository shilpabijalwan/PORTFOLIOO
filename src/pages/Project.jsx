import { Box, Button, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  const allProjects = [
    {
      name: "EAT FROM YOUR SEAT",
      discription:
        "Eat From Your Seat App Suite is based on series of connected apps, that are specifically designed and developed for stadiums.Designed specifically for stadiums, the Eat From Your Seat platform solution enables stadium operators to elevate the Fans’ experience and efficiently capture additional food and beverage revenue without disruption to existing concession sales.",

      Techstack: "HTML , CSS , VUE JS , VUEX , NUXT JS",
      img: "Screenshot 2024-07-29 213901.png",
      LiveSite: "Live Site",
      livelink: "https://www.eatfromyourseat.com/",

    },
    {
      name: "PRODIGY FOOTBALL",
      discription:
        "Prodigy Football has designed the Elite Development Program with the purpose of enhancing the overall standards of grassroots and community level coaching.",

      Techstack: "HTML , JAVASCRIPT ,REACT , TAILWIND CSS ,REDUX TOOLKIT ",
      // repo: "Git Repo",
      LiveSite: "Live Site",
      img: "Screenshot 2024-07-29 215656.png",
      livelink: "https://program.prodigyfootball.com.au/",
     
    },
  ];
  return (
    <Box id="project" py={"150px"}>
      <Text
        color={"#C69DD2"}
        fontSize={{ base: 25, md: 35, lg: 56 }}
        fontWeight={"bold"}
        top={5}
        mb={5}
        // border={"1px solid white"}
      >
        Projects
      </Text>
      <br />
      <Grid
        textAlign={"justify"}
        className="skills-card"
        w={{ base: "85%", lg: "90%" }}
        gridTemplateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={14}
        margin={"auto"}>
        {allProjects?.map((ele) => (
          <Stack
            m={"auto"}
            gap={5}
            p={5}
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}>
            <Image src={ele.img} />
            <Text
              border={"1px solid gray"}
              p={3}
              color={"#C69DD2"}
              fontSize={28}
              fontWeight={"bold"}
              textAlign={"center"}>
              {ele.name}
            </Text>
            <Text color={"#A29C9B"} fontSize={16} fontWeight={"bold"}>
              {ele.discription}
            </Text>
            <Text color={"#A29C9B"} fontSize={16} fontWeight={"bold"}>
              Tech Stack:- {ele.Techstack}
            </Text>

            <Stack direction={"row"} justifyContent={"space-around"}>
              {/* <Link to={ele.gitlink}>
                <Button
                  colorScheme="red"
                  textColor="#A29C9B"
                  variant="outline"
                  _hover={{ bg: "#C69DD2", textColor: "black" }}>
                  {ele.repo}
                </Button>
              </Link> */}
              <Link to={ele.livelink}>
                <Button
                  colorScheme="red"
                  _hover={{ bg: "#C69DD2", textColor: "black" }}
                  textColor="#A29C9B"
                  variant="outline">
                  {ele.LiveSite}
                </Button>
              </Link>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}
