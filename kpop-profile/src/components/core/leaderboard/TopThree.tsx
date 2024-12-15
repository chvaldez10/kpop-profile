import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { topThreeData } from "@/data/mock/leaderboard";
import TopThreeCard from "./TopThreeCard";

const TopThree: FC = () => {
  const [first, second, third] = topThreeData;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems={{ base: "flex-start", md: "flex-end" }}
      gap={8}
      mt={{ base: 4, md: 16 }}
      mx="auto"
    >
      {first && (
        <TopThreeCard {...first} rank={first.rank} order={{ base: 1, md: 2 }} />
      )}
      {second && (
        <TopThreeCard
          {...second}
          rank={second.rank}
          order={{ base: 2, md: 1 }}
        />
      )}
      {third && (
        <TopThreeCard {...third} rank={third.rank} order={{ base: 3, md: 3 }} />
      )}
    </Flex>
  );
};

export default TopThree;
