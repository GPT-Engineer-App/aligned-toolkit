import React from "react";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const BeforeAfterSection = () => {
  return (
    <Box p={20}>
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Life Before and After Aligned
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={12}>
        <Box textAlign="center">
          <Image src="https://cdn.pixabay.com/photo/2019/07/26/20/42/stressed-4366493_1280.jpg" alt="Stressed person drowning in messy data" w="80%" mx="auto" mb={4} rounded="lg" shadow="md" />
          <Heading as="h3" size="lg" mb={2}>
            Before Aligned
          </Heading>
          <Text fontSize="lg">Drowning in data swamps, engineers pull their hair out trying to make sense of the chaos. Models break, data is lost, and nobody knows what's going on!</Text>
        </Box>
        <Box textAlign="center">
          <Image src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png" alt="Happy person easily managing data with Aligned" w="80%" mx="auto" mb={4} rounded="lg" shadow="md" />
          <Heading as="h3" size="lg" mb={2}>
            After Aligned
          </Heading>
          <Text fontSize="lg">With Aligned, data is clean, organized, and easy to understand. Engineers can focus on building great models, not fighting with data. It's like having a superpower!</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BeforeAfterSection;
