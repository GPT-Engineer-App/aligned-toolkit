import React from "react";
import { Box, Flex, Spacer, Image, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="md">
      <Flex align="center" justify="space-between" wrap="wrap">
        <Image src="path/to/aligned-logo.png" alt="Aligned Logo" h={8} />
        <Spacer />
        <Box>
          <Link mx={4} fontWeight="medium">
            Product
          </Link>
          <Link mx={4} fontWeight="medium">
            Pricing
          </Link>
          <Link mx={4} fontWeight="medium">
            About
          </Link>
          <Link mx={4} fontWeight="medium">
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
