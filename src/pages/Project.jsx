import { Box, Button, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  const allProjects = [
    {
      name: "Purplle",
      discription:
        "Purplle.com is an online store that sells cosmetics, fragrances, skin, and hair care products.It was founded in 2011 and is headquartered in Mumbai, Maharashtra. Purplle has over 1,000 brands, 60,000 products, and 7 million monthly active users. The company uses a mix of organic and paid marketing techniques to reach its target audience",

      Techstack: "HTML , CSS , React , Redux , ChakraUi",
      repo: "Git Repo",
      LiveSite: "Live Site",
      img: "https://miro.medium.com/v2/resize:fit:1200/1*MVJ9c0M3O6XgtXixCeATZQ.png",
      livelink: "https://purple-clone-4uck.vercel.app/",
      gitlink:
        "https://github.com/shilpabijalwan/purpleClone/tree/main/purple-clone",
    },
    {
      name: "AutoZone",
      discription:
        "AutoZone is the nation's leading retailer and a leading distributor of automotive replacement parts and accessories with more than 7,000 stores in the US, Mexico, Brazil and Puerto Rico. Each store carries an extensive line for cars, sport utility vehicles, vans and light trucks, including new and remanufactured hard parts, maintenance items and accessories.",

      Techstack: "HTML , CSS , JavaScript...",
      repo: "Git Repo",
      LiveSite: "Live Site",
      img: "https://www.retailtouchpoints.com/wp-content/uploads/2021/11/AutoZone-960x514.png",
      livelink: "https://darling-yeot-95e7b2.netlify.app/",
      gitlink: "https://github.com/bharat24862486/prized-beef-1928?search=1",
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
              <Link to={ele.gitlink}>
                <Button
                  colorScheme="red"
                  textColor="#A29C9B"
                  variant="outline"
                  _hover={{ bg: "#C69DD2", textColor: "black" }}>
                  {ele.repo}
                </Button>
              </Link>
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
