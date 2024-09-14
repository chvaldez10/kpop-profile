import { FC } from "react";
import { VStack, Image, Text } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";

interface TopThreeCardProps extends LeaderboardEntry {}

const TopThreeCard: FC<TopThreeCardProps> = ({ label, src, rank }) => {
  const rankString = rank === 1 ? "1st" : rank === 2 ? "2nd" : "3rd";

  return (
    <VStack
      spacing={2}
      bg="pink.50"
      borderRadius="md"
      p={4}
      alignItems="center"
      justifyContent="center"
      h={rank === 1 ? "300px" : "250px"}
      w="200px"
      borderColor="pink.200"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      transform={rank === 1 ? "translateY(-30px)" : "none"}
    >
      <Image src={src} alt={label} boxSize="80px" borderRadius="full" />
      <Text fontWeight="bold">{label}</Text>
      <Text>{rankString}</Text>
    </VStack>
  );
};

export default TopThreeCard;
