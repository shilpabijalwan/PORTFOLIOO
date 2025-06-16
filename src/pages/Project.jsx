import {
  Box,
  Button,
  Grid,
  Image,
  Stack,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

// Carousel settings
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Project() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "10px", md: "40px" });

  const allProjects = [
    {
      name: "AI TEXT SUMMARIZER",
      discription:
        "AI Text Summarizer is a web application that uses AI to summarize long texts into concise summaries with bullet points.",
      Techstack: "React, Tailwind CSS, Gemini API, Generative AI",
      img: "Screenshot 2025-06-16 005815.png",
      livelink: "https://ai-content-summarizer-three.vercel.app/",
    },
    {
      name: "WAREHOUSE MANAGEMENT SYSTEM (WMS)",
      discription:
        "A Warehouse Management System (WMS) is a software application designed to support and optimize warehouse or distribution center management and fulfillment operations.",
      Techstack: "React, Tailwind CSS, Redux Toolkit",
      img: "Screenshot 2025-06-16 002050.png",
     
    },
    {
      name: "TRANSPORT MANAGEMENT SYSTEM (TMS)",
      discription:
        "A Transport Management System (TMS) is a software application designed to manage and optimize the daily operations of transportation logistics.",
      Techstack: "React, Tailwind CSS, Redux Toolkit",
      img: "Screenshot 2025-06-16 002050.png",
     
    },
    {
      name: "EAT FROM YOUR SEAT",
      discription:
        "Eat From Your Seat App Suite is based on a series of connected apps, designed for stadiums. It helps enhance fan experience and increase food and beverage revenue.",
      Techstack: "HTML, CSS, VUE JS, VUEX, NUXT JS",
      img: "Screenshot 2024-07-29 213901.png",
      livelink: "https://www.eatfromyourseat.com/",
    },
    {
      name: "PRODIGY FOOTBALL",
      discription:
        "Prodigy Football’s Elite Development Program aims to raise coaching standards at grassroots and community levels.",
      Techstack: "React, Tailwind CSS, Redux Toolkit, stripe payment integration",
      img: "Screenshot 2024-07-29 215656.png",
      livelink: "https://program.prodigyfootball.com.au/",
    },
  ];

  return (
    <Box id="project" py={{ base: 10, md: 20 }}>
      <Text
        color="#C69DD2"
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        textAlign="center"
      
      >
        Projects
      </Text>

      {/* Slick CSS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Box
        position="relative"
        width={{ base: "90%", md: "70%", lg: "90%" }}
        margin="auto"
        px={{ base: 4, md: 10 }}
        py={10}
        overflow="hidden"
        shadow="lg"
      >
        {/* Left Arrow */}
        <IconButton
          aria-label="left-arrow"
          icon={<BiLeftArrowAlt style={{ background: "transparent" }} />}
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          style={{ background: "#C69DD2" }}
          borderRadius="full"
          onClick={() => slider?.slickPrev()}
        />

        {/* Right Arrow */}
        <IconButton
          aria-label="right-arrow"
          icon={<BiRightArrowAlt style={{ background: "transparent" }} />}
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
         style={{ background: "#C69DD2" }}
          borderRadius="full"
          onClick={() => slider?.slickNext()}
        />

        {/* Carousel */}
        <Slider {...settings} ref={(s) => setSlider(s)}>
          {allProjects.map((item, idx) => (
            <Box key={idx} textAlign="center" p={4} border>
              <Image
                src={item.img}
                alt={item.name}
                borderRadius="lg"
                mx="auto"
                maxH={{ base: "200px", md: "300px", lg: "450px" }}
                objectFit="cover"
              />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                mt={5}
                color="#C69DD2"
              >
                {item.name}
              </Text>
              <Text
                fontSize={{ base: "sm", lg: "md" }}
                mt={2}
                color="gray.300"
              >
                {item.discription}
              </Text>
              <Text
                fontSize="md"
                mt={2}
                fontWeight="semibold"
              color="#C69DD2"
              >
                Tech Stack: {item.Techstack}
              </Text>
             {item.livelink&& <Button
                mt={4}
                colorScheme="purple"
                color="#C69DD2"
                variant="outline"
                padding={5}
                borderColor="#C69DD2"
                _hover={{ bg: "#C69DD2", color: "white" }}
                as="a"
                href={item.livelink}
                target="_blank"
                size="sm"
              >
                Visit Live Site
              </Button>}
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
