import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Project() {
  
  return (
    <Box
      id="project"
      // border={"1px solid blue"}
      py={"150px"}
    >
      <Text
        color={"#C69DD2"}
        fontSize={18}
        fontWeight={"bold"}
      >
        Projects
      </Text>
    </Box>
  );
}
