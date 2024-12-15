import { FC } from "react";
import { Stack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";

const TopThreeCard: FC<LeaderboardEntry> = ({ label, src, rank, order }) => {
  const rankString = rank === 1 ? "1st" : rank === 2 ? "2nd" : "3rd";

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
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Rank Badge */}
      <Box
        position="absolute"
        top={3}
        right={3}
        bg="brand.400"
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        fontSize="sm"
        fontWeight="bold"
        boxShadow="md"
      >
        {rankString}
      </Box>

      {/* Image and Text */}
      <VStack spacing={3} zIndex={2}>
        <Image
          src={src}
          alt={label}
          w="70%"
          h="auto"
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
