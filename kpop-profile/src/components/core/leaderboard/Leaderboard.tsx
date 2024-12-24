import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { mockLeaderboardData } from "@/data/mock/leaderboard";
import RankCard from "./RankCard";

const Leaderboard: FC = () => {
  const topFiveGroups = mockLeaderboardData.slice(0, 5);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      gap={4}
      mt={{ base: 4, md: 8 }}
      maxW="3xl"
      mx="auto"
    >
      {topFiveGroups.map((group) => (
        <RankCard key={group.rank} {...group} />
      ))}
    </Flex>
  );
};

export default Leaderboard;
