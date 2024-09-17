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
      gap={4}
      mb={8}
    >
      {first && <TopThreeCard {...first} rank={first.rank} />}
      {second && <TopThreeCard {...second} rank={second.rank} />}
      {third && <TopThreeCard {...third} rank={third.rank} />}
    </Flex>
  );
};

export default TopThree;
