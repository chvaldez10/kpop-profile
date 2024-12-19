"use client";

import { FC } from "react";
import { VStack, useMediaQuery } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { LeaderboardRanking } from "@/components/core/ui";

// Components
import AwardPlaque from "./AwardPlaque";
import VinylRecords from "./VinylRecords";

const TopThreeCard: FC<LeaderboardEntry> = ({ label, rank, order }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack
      spacing={8}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "300px", md: rank === 1 ? "440px" : "400px" }}
      w={{ base: "full", md: "300px" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      order={order}
      position="relative"
    >
      {/* Rank Badge */}
      <LeaderboardRanking rank={rank} />

      {/* Vinyl Records */}
      {!isMobile && <VinylRecords rank={rank} />}

      {/* Award Plaque */}
      <AwardPlaque label={label} />
    </VStack>
  );
};

export default TopThreeCard;
