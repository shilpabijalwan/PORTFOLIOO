import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../pages/Resume";
// import { useColorMode } from "@chakra-ui/react";

const Links = [
  { title: "Home", link: "#" },
  { title: "About", link: "#about" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#project" },
  { title: "Contact", link: "#contact" },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const breakpoints = {
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  //   "2xl": "1536px",
  // };
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        px={{ base: "5", md: "10", lg: "20" }}
        py={{ base: "2", md: "10", lg: "5" }}
        position={"fixed"}
        zIndex={1}
        // background={"#1A202C"}
        mb={30}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          // background={"#1A202C"}
        >
          <Box
            display={"flex"}
            // background={"#1A202C"}
          >
            <Text
              color="#FFD3FF"
              fontSize={25}
              fontWeight={"bold"}
            >
              S
            </Text>
            <Text
              color={"#A29C9B"}
              fontSize={25}
              fontWeight={"bold"}
            >
              hilpaBijalwan
            </Text>
          </Box>

          <Box display={"flex"}>
            <IconButton
              // background={"pink"}
              variant="ghost"
              size={"lg"}
              icon={
                isOpen ? (
                  <CloseIcon
                    color="#A29C9B"
                    boxSize={6}
                  />
                ) : (
                  <HamburgerIcon
                    color="#A29C9B"
                    boxSize={8}
                  />
                )
              }
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              _hover={"none"}
            />

            <HStack
              spacing={3}
              alignItems={"center"}
            >
              <HStack
                as={"nav"}
                spacing={15}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <Link
                    _hover={{ textDecoration: "none" }}
                    href={link.link}
                    key={link}
                  >
                    <Text
                      color={"#C69DD2"}
                      fontSize={18}
                      fontWeight={"bold"}
                    >
                      {link.title}
                    </Text>
                  </Link>
                ))}
                <Resume />
              </HStack>
            </HStack>
          </Box>
        </Flex>

        {isOpen ? (
          <Box
            pb={20}
            display={{ md: "none" }}
            // border={"1px solid blue"}
            // h={"100vh"}
          >
            <Stack
              as={"nav"}
              spacing={20}
            >
              <Resume />

              {Links.map((link) => (
                <Link
                  href={link.link}
                  key={link}
                  color={"pink.200"}
                >
                  <Text
                    // color={"#C69DD2"}
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
        {/* <Resume /> */}
      </Box>
    </>
  );
}
