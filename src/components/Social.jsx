import { Link, Image, Box, Stack } from "@chakra-ui/react";
import React from "react";

const socials = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    link: "https://github.com/shilpabijalwan",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
    link: "https://www.linkedin.com/in/shilpabijalwan01/",
  },
];
export default function Socials() {
  return (
    <Stack
      spacing={5}
      position={"fixed"}
      bottom={7}
      left={6}
      zIndex={6}
      visibility={["visible", "visible", "visible"]}>
      {socials.map((s) => {
        return (
          <Box
            width={"40px"}
            transition="transform 0.4s"
            key={Math.random()}
            _hover={{
              transform: "rotate(360deg) scaleY(1.1)",
            }}>
            <Link href={s.link} target="_blank" key={Math.random()}>
              <Image src={s.logo} />
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
}
