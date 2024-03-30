import React from "react";
import { Box, Heading, Text, Stack, Button, Flex, Image, Icon, SimpleGrid, Input, useColorModeValue } from "@chakra-ui/react";
import { FaDatabase, FaChartLine, FaCheckCircle, FaTags } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.100", "gray.700")} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Box>
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="nowrap" px={8} py={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color="primary.800" textAlign={["center", "center", "left", "left"]}>
            Machine Learning products made simple
          </Heading>
          <Heading as="h2" size="md" color="primary.800" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Redefine Machine Learning Data Management with Aligned: A Tool for Advanced Feature Management, Data Lineage Visualization, and Real-Time Model Monitoring.
          </Heading>
          <Flex justify={["center", "center", "flex-start", "flex-start"]}>
            <Input type="email" placeholder="Your email" rounded="full" border="1px solid" borderColor="gray.300" mr={2} />
            <Button colorScheme="blue" rounded="full" flexShrink={0}>
              Get Early Access
            </Button>
          </Flex>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzExODI2NDkzfDA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature icon={<Icon as={FaDatabase} w={10} h={10} />} title={"Data Lineage"} text={"Collect data lineage through transformations, views, models, data sources, and visualize it in a way that's easy to understand."} />
          <Feature icon={<Icon as={FaChartLine} w={10} h={10} />} title={"Real-Time Model Evaluation"} text={"View how your models are performing in real-time, and get alerts when they're not performing as expected."} />
          <Feature icon={<Icon as={FaCheckCircle} w={10} h={10} />} title={"Data Quality Assurance"} text={"Ensure that your data is of the highest quality, and that it's ready to be used in your models."} />
          <Feature icon={<Icon as={FaTags} w={10} h={10} />} title={"Data-set Annotation"} text={"Generate data-sets for your models, and ensure that they are of the highest quality."} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Index;
