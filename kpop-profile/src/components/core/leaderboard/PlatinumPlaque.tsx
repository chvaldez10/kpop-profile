"use client";

import { FC } from "react";
import { VStack, useMediaQuery } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";

// Components
import AwardPlaque from "./atoms/AwardPlaque";
import VinylRecords from "./VinylRecords";

interface PlatinumPlaqueProps extends LeaderboardEntry {
  order: { base: number; md: number };
}

const TopThreeCard: FC<PlatinumPlaqueProps> = ({ group, rank, order }) => {
  // Check if the screen is mobile
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack
      spacing={8}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "160px", md: rank === 1 ? "440px" : "400px" }}
      w={{ base: "full", md: "300px" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      order={order}
      position="relative"
    >
      {/* Vinyl Records */}
      {!isMobile && <VinylRecords rank={rank} />}

      {/* Award Plaque */}
      <AwardPlaque label={group.name} />
    </VStack>
  );
};

export default TopThreeCard;
