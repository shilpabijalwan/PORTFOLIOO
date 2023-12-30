import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
export default function Resume() {
  return (
    <Box>
      <Button
        className="nav-link resume"
        // borderRadius={0}
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1F-chHUIyXD5TjjS0jFB53nE0-DS4NlqU/view?usp=share_link",
          );
        }}
        id="resume-button-1"
        color={"#A29C9B"}
        fontSize={18}
        fontWeight={"bold"}
        variant={"outline"}
        borderRadius="10px"
        _hover={{
          bg: "pink.200",
          color: "black",
        }}
      >
        <Link
          href={Resume}
          download
          target="_blank"
          id="resume-link-1"
          _hover={{
            textDecoration: "none",
          }}
        >
          Resume
        </Link>
      </Button>
    </Box>
  );
}
