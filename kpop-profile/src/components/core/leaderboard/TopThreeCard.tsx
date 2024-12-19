import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { LeaderboardRanking } from "@/components/core/ui";

// Components
import AwardPlaque from "./AwardPlaque";
import VinylRecords from "./VinylRecords";

const TopThreeCard: FC<LeaderboardEntry> = ({ label, rank, order }) => {
  return (
    <VStack
      spacing={8}
      bg="white"
      borderRadius="xl"
      p={6}
      alignItems="center"
      justifyContent="center"
      h={{ base: "300px", md: "400px" }}
      w={{ base: "full", md: "300px" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      order={order}
      position="relative"
    >
      {/* Rank Badge */}
      <LeaderboardRanking rank={rank} />

      {/* Vinyl Records */}
      <VinylRecords rank={rank} />

      {/* Award Plaque */}
      <AwardPlaque label={label} />
    </VStack>
  );
};

export default TopThreeCard;
