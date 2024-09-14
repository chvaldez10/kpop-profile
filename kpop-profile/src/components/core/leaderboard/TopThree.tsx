import { FC } from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { topThreeData } from "@/data/mock/leaderboard";

const TopThree: FC = () => {
  const [second, first, third] = topThreeData;

  const LeaderCard = ({
    entry,
    place,
    palceString,
  }: {
    entry: LeaderboardEntry;
    place: number;
    palceString: string;
  }) => (
    <VStack
      spacing={2}
      bg="pink.50"
      borderRadius="md"
      p={4}
      alignItems="center"
      justifyContent="center"
      h={place === 1 ? "300px" : "250px"}
      w="200px"
      borderColor="pink.200"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      transform={place === 1 ? "translateY(-30px)" : "none"}
    >
      <Image
        src={entry.src}
        alt={entry.username}
        boxSize="80px"
        borderRadius="full"
      />
      <Text fontWeight="bold">{entry.username}</Text>
      <Text>{palceString}</Text>
    </VStack>
  );

  return (
    <Flex justifyContent="center" alignItems="flex-end" gap={4} mb={8}>
      {second && <LeaderCard entry={second} place={2} palceString="2nd" />}
      {first && <LeaderCard entry={first} place={1} palceString="1st" />}
      {third && <LeaderCard entry={third} place={3} palceString="3rd" />}
    </Flex>
  );
};

export default TopThree;
