import React from "react";

import { Box } from "@chakra-ui/react";

interface VinylRecordsProps {
  rank: number;
}

const VinylRecords: React.FC<VinylRecordsProps> = ({ rank }) => {
  return (
    <Box
      w={{ base: "70%", md: "80%" }}
      aspectRatio={1}
      borderRadius="full"
      bg="linear-gradient(145deg, rgba(255, 0, 255, 0.1), rgba(0, 0, 255, 0.1))"
      position="relative"
      boxShadow="0 4px 12px rgba(169, 169, 169, 0.3)"
      _before={{
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "20%",
        height: "20%",
        borderRadius: "full",
        bg: "linear-gradient(145deg, #FFFFFF, #F0F0F0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      _after={{
        content: `"${rank}"`,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#333",
        fontSize: { base: "lg", md: "2xl" },
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
    >
      {/* Adjusted record grooves simulation for a more realistic effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="full"
        background={`linear-gradient(145deg, rgba(255, 0, 255, 0.1), rgba(0, 0, 255, 0.1)),
          repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 1px, rgba(255, 255, 255, 0.1) 2px, transparent 3px),
          repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 1px, rgba(255, 255, 255, 0.1) 2px, transparent 3px)`}
      />
    </Box>
  );
};

export default VinylRecords;
