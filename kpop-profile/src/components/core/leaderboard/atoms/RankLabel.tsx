import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

interface RankLabelProps {
  label: string;
}

const RankLabel: FC<RankLabelProps> = ({ label }) => {
  return (
    <Box p={3} borderRadius="md" width="80%" textAlign="left">
      <Text fontWeight="bold" fontSize="lg" color="gray.700">
        {label}
      </Text>
    </Box>
  );
};

export default RankLabel;
