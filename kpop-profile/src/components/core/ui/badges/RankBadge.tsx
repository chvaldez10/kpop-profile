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
      px={{ base: 2, md: 4 }}
      py={{ base: 1, md: 2 }}
      borderRadius="md"
      fontSize="sm"
      fontWeight="bold"
    >
      {rankString}
    </Box>
  );
};

export default LeaderboardRanking;
