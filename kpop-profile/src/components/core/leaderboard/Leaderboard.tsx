import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { topThreeData } from "@/data/mock/leaderboard";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard: FC = () => {
  const [first, second, third] = topThreeData;

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      gap={4}
      mt={{ base: 4, md: 8 }}
      maxW="2xl"
      mx="auto"
    >
      {first && <LeaderboardCard {...first} rank={first.rank} />}
      {second && (
        <LeaderboardCard
          {...second}
          rank={second.rank}
          order={{ base: 2, md: 1 }}
        />
      )}
      {third && <LeaderboardCard {...third} rank={third.rank} />}
    </Flex>
  );
};

export default Leaderboard;
