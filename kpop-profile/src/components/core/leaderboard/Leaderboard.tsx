import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { topThreeData } from "@/data/mock/leaderboard";
import LeaderboardCard from "./LeaderboardCard";

const Leaderboard: FC = () => {
  const [fourth, fifth] = topThreeData.slice(-2);

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
      {fourth && <LeaderboardCard {...fourth} rank={fourth.rank} />}
      {fifth && <LeaderboardCard {...fifth} rank={fifth.rank} />}
    </Flex>
  );
};

export default Leaderboard;
