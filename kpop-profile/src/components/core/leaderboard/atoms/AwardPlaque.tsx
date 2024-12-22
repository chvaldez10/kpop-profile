import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

interface AwardPlaqueProps {
  label: string;
}

const AwardPlaque: FC<AwardPlaqueProps> = ({ label }) => {
  return (
    <Box
      bg="linear-gradient(145deg, #8A2BE2, #DA70D6)"
      p={2}
      borderRadius="md"
      width="80%"
      textAlign="center"
      boxShadow="0 2px 4px rgba(138, 43, 226, 0.3)"
      cursor="pointer"
    >
      <Text fontWeight="bold" fontSize="lg" color="white">
        {label}
      </Text>
    </Box>
  );
};

export default AwardPlaque;
