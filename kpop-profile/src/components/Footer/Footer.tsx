import { Container, HStack, Text, Box } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export const Footer = () => (
  <Box as="footer" py={{ base: "12", md: "16" }}>
    <Container maxW="container.lg">
      <HStack gap="6" justify="space-between" align="center">
        {/* GitHub Icon */}
        <Box
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.2s",
          }}
        >
          <SocialIcon
            url="https://github.com/chvaldez10/kpop-profile"
            style={{ height: "2em", width: "2em" }}
          />
        </Box>

        {/* Copyright */}
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} K-pop Profile. All rights reserved.
        </Text>
      </HStack>
    </Container>
  </Box>
);

export default Footer;
