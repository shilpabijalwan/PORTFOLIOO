import { Box, Flex, Heading, Text, VStack, Circle } from "@chakra-ui/react";

const experiences = [
  {
    company: "Omniful",
    role: "Software Engineer",
    duration: "Oct 2024 – Present",
    description:
      "Built internal tools and customer-facing dashboards using Next.js and Chakra UI. Optimized performance and collaborated with cross-functional teams.",
  },
  {
    company: "Evomorf",
    role: "Frontend Developer",
    duration: "June 2023 – Oct 2024",
    description:
      "Worked on building reusable React components and implemented REST API integration for a CRM application.",
  },
];

export default function WorkExperience() {
  return (
    <Box
      py={10}
             px={{ base: "5", md: "10", lg: "20" }}
      rounded="xl"
     w={'100%'}
    //   mx="auto"
    >
      <Heading
        size="lg"
        mb={10}
        textAlign="center"
        color={"#C69DD2"}
          fontSize={{ base: 25, md: 35, lg: 56 }}
          fontWeight={"bold"}
        letterSpacing="wide"
      >
        Work Experience
      </Heading>
      <Flex direction="column" position="relative" ml={6}>
        {/* Timeline vertical line with gradient */}
        <Box
          position="absolute"
          top={0}
          left={2}
          width="3px"
          height="100%"
          bgGradient="linear(to-b, #C69DD2, #38B2AC)"
          borderRadius="full"
          zIndex={0}
        />
        <VStack spacing={12} align="stretch" position="relative" zIndex={1}>
          {experiences.map((exp, idx) => (
            <Flex key={idx} align="flex-start" position="relative">
              {/* Timeline dot with gradient */}
              <Circle
                size="20px"
                bgGradient="linear(to-br, #C69DD2, #38B2AC)"
                mt={1}
                mr={6}
                zIndex={2}
              />
              <Box
                p={6}
                borderRadius="xl"
                boxShadow="md"
                w="100%"
                borderLeft="5px solid #E9D8FD"
                transition="box-shadow 0.2s, transform 0.2s"
                _hover={{ boxShadow: "xl", transform: "translateY(-3px) scale(1.01)" }}
              >
                <Flex
                  justify="space-between"
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "flex-start", md: "center" }}
                >
                  <Box>
                    <Heading size="md" color="#C69DD2" mb={1}>
                      {exp.role}
                    </Heading>
                    <Text
                      fontSize="sm"
                      color="purple.500"
                      fontWeight="semibold"
                       align='start'
                    >
                      {exp.company}
                    </Text>
                  </Box>
                  <Text fontSize="sm" color="gray.500" mt={{ base: 2, md: 0 }}>
                    {exp.duration}
                  </Text>
                </Flex>
                <Text mt={3} color="#A29C9B" fontSize="md" align="start">
                  {exp.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}
