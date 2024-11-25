import { FC } from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ label, src, rank }) => {
  const rankString = rank === 1 ? "1st" : rank === 2 ? "2nd" : "3rd";

  return (
    <HStack
      spacing={2}
      bg="purple.50"
      borderRadius="md"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      h={{ base: "auto", md: "auto" }}
      w={{ base: "full", md: "full" }}
      borderColor="pink.200"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Image
        src={src}
        alt={label}
        w={{ base: "50%", md: "100%" }}
        h={{ base: "48px", md: "96px" }}
        borderRadius="lg"
        objectPosition="center"
      />
      <Text fontWeight="bold">{label}</Text>
      <Text>{rankString}</Text>
    </HStack>
  );
};

export default LeaderboardCard;
