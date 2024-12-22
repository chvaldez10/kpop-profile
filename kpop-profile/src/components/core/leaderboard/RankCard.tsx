import { FC } from "react";
import { HStack, Image } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";
import { RankBadge } from "@/components/core/ui";

// Components
import HorizontalSocialStack from "./atoms/HorizontalSocialStack";
import RankLabel from "./atoms/RankLabel";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ group, rank }) => {
  return (
    <HStack
      spacing={4}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="space-between"
      h="160px"
      w="full"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      position="relative"
    >
      {/* Rank Badge */}
      <RankBadge rank={rank} />

      {/* Group Image */}
      <Image
        src={"/images/group-images/nmixx.jpg"}
        alt={group.name}
        boxSize="84px"
        borderRadius="md"
      />

      {/* Group Header */}
      <RankLabel label={group.name} />

      {/* Group Socials */}
      <HorizontalSocialStack />
    </HStack>
  );
};

export default LeaderboardCard;
