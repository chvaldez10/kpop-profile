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
      color="brand.400"
      px={3}
      py={2}
      borderRadius="md"
      fontSize="sm"
      fontWeight="bold"
    >
      {rankString}
    </Box>
  );
};

export default LeaderboardRanking;
