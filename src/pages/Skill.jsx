import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { GridItem, Grid, Link, Image } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const skill = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://ionicframework.com/docs/icons/logo-react-icon.png",
    title: "React",
    link: "https://react.dev",
  },
  {
    icon: "https://images.opencollective.com/redux-devtools-extension/965cbe9/logo/256.png",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  // {
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  //   title: "Mongo DB",
  //   link: "https://www.mongodb.com/",
  // },
  // {
  //   icon: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
  //   title: "Node.js",
  //   link: "https://nodejs.org/en",
  // },
  // {
  //   icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&usqp=CAU",
  //   title: "Express",
  //   link: "https://expressjs.com/",
  // },
  {
    icon: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    title: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    title: "Git",
    link: "https://git-scm.com/",
  },
  // {
  //   icon: "https://static-00.iconduck.com/assets.00/next-js-icon-144x144-oytn4vne.png",
  //   title: "Next js",
  //   link: "https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs",
  // },
  {
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
];
export default function Skill() {
  return (
    <Fade >
      <Box
        id="skills"
        // border={"4px solid white"}
        py={"150px"}
      >
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
          w={["100%", "80%", "85%", "65%"]}
          gridTemplateColumns={[
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={4}
          margin={"auto"}
        >
          {skill.map(({ icon, title, link }) => {
            return (
              <GridItem
                padding={"35px"}
                overflow="hidden"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <Link
                  href={link}
                  target="_blank"
                >
                  <Image
                    className="skills-card-img"
                    src={icon}
                    w="100%"
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
                  fontSize={["15px", "20px", "20px", "25px"]}
                  color={"#C69DD2"}
                >
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
