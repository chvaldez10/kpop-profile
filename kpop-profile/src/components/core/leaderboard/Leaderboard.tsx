import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { mockLeaderboardData } from "@/data/mock/leaderboard";
import RankCard from "./RankCard";

const Leaderboard: FC = () => {
  const [fourth, fifth] = mockLeaderboardData.slice(-2);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      gap={4}
      mt={{ base: 4, md: 8 }}
      maxW="3xl"
      mx="auto"
    >
      {fourth && <RankCard {...fourth} rank={fourth.rank} />}
      {fifth && <RankCard {...fifth} rank={fifth.rank} />}
    </Flex>
  );
};

export default Leaderboard;
