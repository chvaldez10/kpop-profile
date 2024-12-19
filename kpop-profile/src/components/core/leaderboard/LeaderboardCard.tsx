import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { RankBadge } from "@/components/core/ui";

import AwardPlaque from "./AwardPlaque";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ label, rank }) => {
  return (
    <VStack
      spacing={8}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h="160px"
      w={{ base: "full", md: "full" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      position="relative"
      cursor="pointer"
    >
      <RankBadge rank={rank} />
      <AwardPlaque label={label} />
    </VStack>
  );
};

export default LeaderboardCard;
