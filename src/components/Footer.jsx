import React from "react";
import { Box, Flex, Spacer, Link, Text, Icon } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.100" px={4} py={8}>
      <Flex align="center" justify="space-between" wrap="wrap">
        <Text>&copy; {new Date().getFullYear()} Aligned. All rights reserved.</Text>
        <Spacer />
        <Box>
          <Link mx={2} href="https://twitter.com/aligned" isExternal>
            <Icon as={FaTwitter} />
          </Link>
          <Link mx={2} href="https://www.linkedin.com/company/aligned" isExternal>
            <Icon as={FaLinkedin} />
          </Link>
          <Link mx={2} href="https://github.com/aligned" isExternal>
            <Icon as={FaGithub} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
