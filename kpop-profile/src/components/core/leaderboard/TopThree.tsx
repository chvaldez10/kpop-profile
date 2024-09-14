import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { topThreeData } from "@/data/mock/leaderboard";
import TopThreeCard from "./TopThreeCard";

const TopThree: FC = () => {
  const [second, first, third] = topThreeData;

  return (
    <Flex justifyContent="center" alignItems="flex-end" gap={4} mb={8}>
      {second && <TopThreeCard {...second} rank={2} />}
      {first && <TopThreeCard {...first} rank={1} />}
      {third && <TopThreeCard {...third} rank={3} />}
    </Flex>
  );
};

export default TopThree;
