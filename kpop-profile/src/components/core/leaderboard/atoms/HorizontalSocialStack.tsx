import { FC } from "react";
import { HStack, Box } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

const SocialHorizontalStack: FC = () => {
  return (
    <HStack spacing={2}>
      {/* Youtube */}
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
      >
        <SocialIcon
          url="https://www.youtube.com/@NMIXXOfficial"
          style={{ height: 24, width: 24 }}
        />
      </Box>

      {/* Instagram */}
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
      >
        <SocialIcon
          url="https://instagram.com"
          style={{ height: 24, width: 24 }}
        />
      </Box>

      {/* Spotify */}
      <Box
        as="span"
        _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
      >
        <SocialIcon
          url="https://spotify.com"
          style={{ height: 24, width: 24 }}
        />
      </Box>
    </HStack>
  );
};

export default SocialHorizontalStack;
