import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { getOrdinalSuffix } from "@/utils/numberHelpers";

interface LeaderboardRankingProps {
  rank: number;
}

const LeaderboardRanking: FC<LeaderboardRankingProps> = ({ rank }) => {
  const rankString = getOrdinalSuffix(rank);

  return (
    <Box
      position="absolute"
      top={4}
      left={4}
      bg="brand.400"
      color="white"
      px={4}
      py={1}
      borderRadius="full"
      fontSize="sm"
      fontWeight="bold"
      boxShadow="md"
    >
      {rankString}
    </Box>
  );
};

export default LeaderboardRanking;
