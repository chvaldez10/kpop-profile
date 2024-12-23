import { FC } from "react";
import { HStack, Flex } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

const SocialIconButton: FC<{ url: string }> = ({ url }) => (
  <Flex
    as="span"
    _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}
    fontSize={{ base: "24px", md: "32px", lg: "40px" }}
    justifyContent="center"
  >
    <SocialIcon url={url} style={{ height: "1em", width: "1em" }} />
  </Flex>
);

const SocialHorizontalStack: FC = () => {
  return (
    <HStack spacing={2}>
      <SocialIconButton url="https://www.youtube.com/@NMIXXOfficial" />
      <SocialIconButton url="https://instagram.com" />
      <SocialIconButton url="https://spotify.com" />
    </HStack>
  );
};

export default SocialHorizontalStack;
