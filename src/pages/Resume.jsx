import { Box, Button, Image, keyframes, Link } from "@chakra-ui/react";
import React from "react";

export default function Resume() {
  const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #A29C9B, 0 0 10px #f687b3, 0 0 15px #A29C9B;
  }
  25% {
    box-shadow: 0 -5px 10px #A29C9B, -5px 0 15px #A29C9B, 5px 0 15px #A29C9B;
  }
  50% {
    box-shadow: 0 0 20px #A29C9B, 0 0 30px #A29C9B;
  }
  75% {
    box-shadow: 5px 0 15px #A29C9B, 0 5px 15px #A29C9B;
  }
  100% {
    box-shadow: 0 0 5px #A29C9B, 0 0 10px #A29C9B, 0 0 15px #A29C9B;
  }
`;
  return (
    <Box>
      <Button
        as="a"
        href="/SB.pdf" // Make sure resume.pdf is in public folder
        download="Shilpa_Resume.pdf" // Optional: rename file on download
        target="_blank"
        id="resume-button-1"
        color="#A29C9B"
        fontSize={18}
        fontWeight="bold"
        variant="outline"
        borderRadius="10px"
        fontFamily={"Segoe Print"}
        _hover={{
          bg: "none",
        }}
        transform="scale(1.05)"
        transition="transform 0.2s ease-in-out"
        boxShadow="0 0 15px #A29C9B" // pink glow
        borderColor="#A29C9B" // match glow color
        animation= {`${glow} 1.5s infinite`}
        
      >
        <Image
          src="download (1).svg"
          alt="Download Icon"
          boxSize="20px"
          mr={2}
        />{" "}
        Download my resume
      </Button>
    </Box>
  );
}
