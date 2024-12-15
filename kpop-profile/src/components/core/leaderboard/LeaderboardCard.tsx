import { FC } from "react";
import { VStack, Image, Text } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { LeaderboardRanking } from "@/components/core/ui";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ label, src, rank }) => {
  return (
    <VStack
      spacing={6}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h="auto"
      w="full"
      position="relative"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transform="none"
      cursor="pointer"
    >
      <LeaderboardRanking rank={rank} />

      {/* Image and Text */}
      <VStack spacing={3} zIndex={2}>
        <Image
          src={src}
          alt={label}
          w="70%"
          h="auto"
          borderRadius="xl"
          objectFit="cover"
          boxShadow="lg"
        />
        <Text
          fontWeight="bold"
          fontSize="lg"
          textAlign="center"
          color="gray.800"
        >
          {label}
        </Text>
      </VStack>
    </VStack>
  );
};

export default LeaderboardCard;
