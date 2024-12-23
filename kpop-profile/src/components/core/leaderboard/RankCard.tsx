import { FC } from "react";
import { HStack, Image } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";
import { RankBadge } from "@/components/core/ui";

// Components
import HorizontalSocialStack from "./atoms/HorizontalSocialStack";
import RankLabel from "./atoms/RankLabel";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({
  group,
  rank,
  logoSrc,
}) => {
  return (
    <HStack
      spacing={{ base: 2, md: 4 }}
      bg="white"
      borderRadius="xl"
      p={{ base: 4, md: 6 }}
      alignItems="center"
      justifyContent="space-between"
      h="160px"
      w={{ base: "95%", md: "full" }}
      mx="auto"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      position="relative"
    >
      {/* Grouped Items */}
      <HStack spacing={{ base: 2, md: 4 }} alignItems="center">
        {/* Rank Badge */}
        <RankBadge rank={rank} />

        {/* Group Image */}
        <Image
          src={logoSrc}
          alt={group.name}
          width={{ base: "100px", md: "120px" }}
          height={{ base: "80px", md: "100px" }}
          objectFit="cover"
          borderRadius="md"
        />

        {/* Group Header */}
        <RankLabel label={group.name} />
      </HStack>

      {/* Group Socials */}
      <HorizontalSocialStack />
    </HStack>
  );
};

export default LeaderboardCard;
