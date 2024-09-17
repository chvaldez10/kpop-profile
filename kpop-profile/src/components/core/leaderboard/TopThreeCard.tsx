import { FC } from "react";
import { Stack, Image, Text } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";

interface TopThreeCardProps extends LeaderboardEntry {}

const TopThreeCard: FC<TopThreeCardProps> = ({ label, src, rank }) => {
  const rankString = rank === 1 ? "1st" : rank === 2 ? "2nd" : "3rd";

  return (
    <Stack
      direction={{ base: "row", md: "column" }}
      spacing={2}
      bg="pink.50"
      borderRadius="md"
      p={4}
      alignItems="center"
      justifyContent={{ base: "flex-start", md: "center" }}
      h={{ base: "auto", md: rank === 1 ? "300px" : "250px" }}
      w={{ base: "full", md: "200px" }}
      borderColor="pink.200"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      transform={{
        base: "none",
        md: rank === 1 ? "translateY(-30px)" : "none",
      }}
    >
      <Image
        src={src}
        alt={label}
        // boxSize="80px"
        width="100%"
        height={{ base: "48px", md: "96px" }}
        // objectFit="cover"
        borderRadius="lg"
        objectPosition="center"
      />
      <Text fontWeight="bold">{label}</Text>
      <Text>{rankString}</Text>
    </Stack>
  );
};

export default TopThreeCard;
