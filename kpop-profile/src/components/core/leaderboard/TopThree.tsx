import { FC } from "react";
import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";

const topThreeData = [
  {
    username: "Skulldugger",
    avatar: "/path/to/avatar1.png",
    points: 500,
    prize: 5000,
  },
  {
    username: "Klaxxon",
    avatar: "/path/to/avatar2.png",
    points: 1500,
    prize: 10000,
  },
  {
    username: "Ultralex",
    avatar: "/path/to/avatar3.png",
    points: 250,
    prize: 2500,
  },
];

const TopThree: FC = () => {
  const [second, first, third] = topThreeData;

  const LeaderCard = ({
    entry,
    place,
  }: {
    entry: LeaderboardEntry;
    place: number;
  }) => (
    <VStack
      spacing={2}
      bg="white"
      borderRadius="md"
      p={4}
      alignItems="center"
      justifyContent="flex-end"
      h={place === 1 ? "300px" : "250px"}
      w="200px"
    >
      <Image
        src={entry.avatar}
        alt={entry.username}
        boxSize="80px"
        borderRadius="full"
      />
      <Text fontWeight="bold">{entry.username}</Text>
      <Text>🏆</Text>
      <Text>Earn {entry.points} points</Text>
      <Text fontWeight="bold">💎 {entry.prize.toLocaleString()}</Text>
      <Text>Prize</Text>
    </VStack>
  );

  return (
    <Flex justifyContent="center" alignItems="flex-end" gap={4} mb={8}>
      {second && <LeaderCard entry={second} place={2} />}
      {first && <LeaderCard entry={first} place={1} />}
      {third && <LeaderCard entry={third} place={3} />}
    </Flex>
  );
};

export default TopThree;
