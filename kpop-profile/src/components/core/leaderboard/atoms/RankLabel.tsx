import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

interface RankLabelProps {
  label: string;
}

const RankLabel: FC<RankLabelProps> = ({ label }) => {
  return (
    <Box p={{ base: 2, md: 4 }} borderRadius="md" textAlign="left">
      <Text
        fontWeight="bold"
        fontSize={{ base: "md", md: "lg" }}
        color="gray.700"
      >
        {label}
      </Text>
    </Box>
  );
};

export default RankLabel;
