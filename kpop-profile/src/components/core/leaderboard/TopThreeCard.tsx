import { FC } from "react";
import { Stack, Image, Text, VStack } from "@chakra-ui/react";
import { LeaderboardRanking } from "@/components/core/ui";
import { LeaderboardEntry } from "@/types/shared";

const TopThreeCard: FC<LeaderboardEntry> = ({ label, src, rank, order }) => {
  return (
    <Stack
      direction={{ base: "column", md: "column" }}
      spacing={6}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "auto", md: rank === 1 ? "320px" : "270px" }}
      w={{ base: "full", md: "220px" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transform="none"
      order={order}
      position="relative"
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      }}
      cursor="pointer"
    >
      <LeaderboardRanking rank={rank} />

      {/* Image and Text */}
      <VStack spacing={3} zIndex={2}>
        <Image
          src={src}
          alt={label}
          w="full"
          h="48px"
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
    </Stack>
  );
};

export default TopThreeCard;
