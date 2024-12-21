import { FC } from "react";
import { HStack, Box } from "@chakra-ui/react";
import { FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";

const SocialHorizontalStack: FC = () => {
  return (
    <HStack spacing={2}>
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        color="red.500"
      >
        <FaYoutube size="24px" />
      </Box>
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        bgGradient="linear(to-br, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
        borderRadius="full"
        p={1}
      >
        <FaInstagram size="24px" color="white" />
      </Box>
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
        color="green.500"
      >
        <FaSpotify size="24px" />
      </Box>
    </HStack>
  );
};

export default SocialHorizontalStack;
