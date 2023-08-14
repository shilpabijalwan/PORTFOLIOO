import { Box, Text, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Flex, Input, HStack, Image } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, ChatIcon } from "@chakra-ui/icons";
import { ic_face_retouching_natural } from "react-icons-kit/md/ic_face_retouching_natural";
import { Icon } from "react-icons-kit";

import { location } from "react-icons-kit/ikons/location";
export default function Contact() {
  return (
    <Box
      id="contact"
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
        Keep In Touch
      </Text>
      <Flex
        flexWrap={["wrap", "wrap"]}
        // border={"1px solid blue"}

        justifyContent={"center"}
        gap={20}
        py={10}
        w={"80%"}
        m={"auto"}
        boxShadow={"lg"}
      >
        <Box
          // border={"1px solid blue"}
          px={20}
          py={10}
        >
          <Text
            color={"#C69DD2"}
            fontSize={{ base: 17, md: 20, lg: 25 }}
            fontWeight={"bold"}
          >
            <Box
              mx={3}
              display={"inline"}
            >
              <EmailIcon />
            </Box>
            shilpabijalwan@gmail.com
          </Text>
          <br />
          <br />
          <Text
            color={"#C69DD2"}
            fontSize={{ base: 17, md: 20, lg: 25 }}
            fontWeight={"bold"}
          >
            <Box
              mx={3}
              display={"inline"}
            >
              <Icon
                size={23}
                icon={location}
              />
            </Box>
            Chamba, Himachal Pradesh
          </Text>
        </Box>

        <Box
          // border={"1px solid green"}
          px={20}
        >
          <form
            action="https://formspree.io/f/xzbqqnnn"
            method="POST"
          >
            <InputGroup
              pb={3}
              style={{ color: "#C69DD2" }}
            >
              <InputLeftElement pointerEvents="none">
                <Icon
                  size={23}
                  icon={ic_face_retouching_natural}
                />
              </InputLeftElement>
              <Input
                color={"#C69DD2"}
                type="text"
                placeholder="Name"
                focusBorderColor="#A29C9B"
                w={"300px"}
                name="name"
                variant="Flushed"
              />
            </InputGroup>

            <InputGroup
              pb={3}
              color={"#C69DD2"}
            >
              <InputLeftElement pointerEvents="none">
                <PhoneIcon />
              </InputLeftElement>

              <Input
                type="tel"
                placeholder="Phone number"
                focusBorderColor="#A29C9B"
                name="Phone number"
                variant="Flushed"
              />
            </InputGroup>

            <InputGroup
              pb={3}
              color={"#C69DD2"}
            >
              <InputLeftElement pointerEvents="none">
                <EmailIcon />
              </InputLeftElement>

              <Input
                type="email"
                placeholder="E-mail"
                focusBorderColor="#A29C9B"
                name="email"
                variant="Flushed"
              />
            </InputGroup>

            <InputGroup
              pb={3}
              color={"#C69DD2"}
            >
              <InputLeftElement pointerEvents="none">
                <ChatIcon />
              </InputLeftElement>

              <Input
                focusBorderColor="#A29C9B"
                type="text"
                placeholder="Message"
                name="message"
                variant="Flushed"
              />
            </InputGroup>

            <Input
              focusBorderColor="#A29C9B"
              type="submit"
              value="Send Message"
              color={"#C69DD2"}
              name="btn"
            />
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
