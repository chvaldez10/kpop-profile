import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { mockLeaderboardData } from "@/data/mock/leaderboard";
import TopThreeCard from "./TopThreeCard";

const TopThree: FC = () => {
  const topThreeGroups = mockLeaderboardData.slice(0, 3);

  return (
    // TODO: need to be the same width and height as Leaderboard
    // TODO: the spacing needs to be consistent with Leaderboard
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems={{ base: "flex-start", md: "flex-end" }}
      gap={{ base: 4, md: 8 }}
      mt={{ base: 4, md: 16 }}
      mx="auto"
    >
      {topThreeGroups.map((group, index) => (
        <TopThreeCard
          key={index}
          {...group}
          rank={group.rank}
          order={{ base: index + 1, md: index === 0 ? 2 : index === 1 ? 1 : 3 }}
        />
      ))}
    </Flex>
  );
};

export default TopThree;
