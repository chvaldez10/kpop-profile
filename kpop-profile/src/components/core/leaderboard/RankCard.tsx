import { FC } from "react";
import { HStack, Image } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";
import { RankBadge } from "@/components/core/ui";

// Components
import AwardPlaque from "./atoms/AwardPlaque";
import HorizontalSocialStack from "./atoms/HorizontalSocialStack";

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
      cursor="pointer"
    >
      <RankBadge rank={rank} />
      <Image
        src={"/images/logos/nmixx-logo.jpg"}
        alt={group.name}
        boxSize="60px"
        borderRadius="md"
      />
      <AwardPlaque label={group.name} />
      <HorizontalSocialStack />
    </HStack>
  );
};

export default LeaderboardCard;
