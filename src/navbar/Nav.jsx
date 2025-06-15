import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../pages/Resume";
import React, { useState, useEffect } from "react";
import "../App.css";

const Links = [
  { title: "Home", link: "#" },
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#project" },
  { title: "Contact", link: "#contact" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeHash, setActiveHash] = useState(window.location.hash || "#");

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        px={{ base: "5", md: "10", lg: "20" }}
        py={{ base: "2", md: "10", lg: "5" }}
        position={"fixed"}
        zIndex={1}
        mb={30}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box className="inverted-radius">SB</Box>

          <Box display={"flex"}>
            <IconButton
              variant="ghost"
              size={"lg"}
              icon={
                isOpen ? (
                  <CloseIcon color="#A29C9B" boxSize={6} />
                ) : (
                  <HamburgerIcon color="#A29C9B" boxSize={8} />
                )
              }
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              _hover={"none"}
            />

            <HStack spacing={3} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={15}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <Link
                    _hover={{ textDecoration: "none" }}
                    href={link.link}
                    key={link.link}
                    // onClick={()=>onClose()}
                  >
                    <Text
                      color={
                        activeHash === link.link
                          ? "#FFD3FF" // Highlight color
                          : "#C69DD2"
                      }
                      fontSize={18}
                      fontWeight={"bold"}
                    >
                      {link.title}
                    </Text>
                  </Link>
                ))}
               
                <Image
                  src="/pic.jpg"
                  alt="IMG"
                  h={"50px"}
                  w={"50px"}
                  borderRadius={"full"}
                />
              </HStack>
            </HStack>
          </Box>
        </Flex>

        {isOpen ? (
          <Box
            py={10}
            display={{ md: "none" }}
            // border={"1px solid blue"}
            h={"100vh"}
          >
            <Stack as={"nav"} spacing={20}>
              <Image
                src="/pic.jpg"
                alt="IMG"
                h={"50px"}
                w={"50px"}
                borderRadius={"full"}
              />

              {Links.map((link) => (
                <Link
                  href={link.link}
                  key={link.link}
                  color={"pink.200"}
                  onClick={onClose}
                >
                  <Text
                    color={activeHash === link.link ? "#FFD3FF" : "#C69DD2"}
                    fontSize={18}
                    fontWeight={"bold"}
                  >
                    {link.title}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
