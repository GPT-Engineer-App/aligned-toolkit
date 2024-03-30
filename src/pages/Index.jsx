import React from "react";
import { Box, Heading, Text, Stack, Button, Flex, Image, Icon, SimpleGrid, Input, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    <Box bg="linear-gradient(135deg, brand.800 0%, brand.600 100%)">
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="nowrap" px={8} py={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="2xl" fontWeight="extrabold" color="black" textAlign={["center", "center", "left", "left"]}>
            Machine Learning products made simple
          </Heading>
          <Heading as="h2" size="xl" color="black" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Redefine Machine Learning Data Management with Aligned: A Tool for Advanced Feature Management, Data Lineage Visualization, and Real-Time Model Monitoring.
          </Heading>
          <Flex justify={["center", "center", "flex-start", "flex-start"]}>
            <Input type="email" placeholder="Your email" rounded="full" border="1px solid" borderColor="gray.300" mr={2} />
            <Button colorScheme="purple" size="lg" rounded="full" flexShrink={0}>
              Get Early Access
            </Button>
          </Flex>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzExODI2NDkzfDA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      <Box p={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Feature icon={<Icon as={FaDatabase} w={12} h={12} color="brand.500" />} title={"Data Lineage"} text={"Collect data lineage through transformations, views, models, data sources, and visualize it in a way that's easy to understand."} />
          <Feature icon={<Icon as={FaChartLine} w={12} h={12} color="brand.500" />} title={"Real-Time Model Evaluation"} text={"View how your models are performing in real-time, and get alerts when they're not performing as expected."} />
          <Feature icon={<Icon as={FaCheckCircle} w={12} h={12} color="brand.500" />} title={"Data Quality Assurance"} text={"Ensure that your data is of the highest quality, and that it's ready to be used in your models."} />
          <Feature icon={<Icon as={FaTags} w={12} h={12} color="brand.500" />} title={"Data-set Annotation"} text={"Generate data-sets for your models, and ensure that they are of the highest quality."} />
        </SimpleGrid>
      </Box>

      <Box p={20} bg="white">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Why Aligned?
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Aligned simplifies machine learning data management, enabling you to focus on building great models.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Streamlined Workflow
            </Heading>
            <Text fontSize="lg">Aligned integrates seamlessly into your existing workflow, making it easy to manage your data at every stage of the machine learning process.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Powerful Insights
            </Heading>
            <Text fontSize="lg">Gain valuable insights into your data and models with Aligned's advanced analytics and visualization tools.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Enterprise-Grade Security
            </Heading>
            <Text fontSize="lg">Keep your data safe and secure with Aligned's robust security features, designed for enterprise-level protection.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box p={20} bg="gray.100">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Join the Waiting List
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Be among the first to experience the power of Aligned. Sign up for our waiting list today!
        </Text>
        <Flex justify="center">
          <Input type="email" placeholder="Your email" rounded="full" border="1px solid" borderColor="gray.300" mr={2} />
          <Button colorScheme="purple" size="lg" rounded="full" flexShrink={0}>
            Join Waiting List
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
