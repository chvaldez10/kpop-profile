import { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";

// Components
import AwardPlaque from "./atoms/AwardPlaque";
import VinylRecords from "./VinylRecords";
import HorizontalSocialStack from "./atoms/HorizontalSocialStack";

interface PlatinumPlaqueProps extends LeaderboardEntry {
  order: { base: number; md: number };
}

const PlatinumPlaque: FC<PlatinumPlaqueProps> = ({ group, rank, order }) => {
  // Check if the screen is mobile
  // const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <VStack
      spacing={4}
      bg="white"
      borderRadius="xl"
      p={{ base: 4, md: 6 }}
      alignItems="center"
      justifyContent="center"
      h={{ base: "60vh", md: "400px" }}
      w={{ base: "90%", md: "300px" }}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      mx="auto"
      order={order}
      position="relative"
    >
      {/* Vinyl Records */}
      <VinylRecords rank={rank} />

      {/* Award Plaque */}
      <AwardPlaque label={group.name} />

      {/* Social Stack */}
      <HorizontalSocialStack />
    </VStack>
  );
};

export default PlatinumPlaque;
