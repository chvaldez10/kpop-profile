import { FC } from "react";
import { VStack, Image, Text, Box } from "@chakra-ui/react";
import { LeaderboardEntry } from "@/types/shared";
import { getOrdinalSuffix } from "@/utils/numberHelpers";

interface LeaderboardCardProps extends LeaderboardEntry {}

const LeaderboardCard: FC<LeaderboardCardProps> = ({ label, src, rank }) => {
  const rankString = getOrdinalSuffix(rank);

  return (
    <VStack
      spacing={6}
      bg="white"
      borderRadius="xl"
      p={{ base: 6, md: 4 }}
      alignItems="center"
      justifyContent="center"
      h="auto"
      w="full"
      position="relative"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transform="none"
      cursor="pointer"
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
    </VStack>
  );
};

export default LeaderboardCard;
