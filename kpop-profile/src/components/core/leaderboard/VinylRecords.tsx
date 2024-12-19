import React from "react";

import { Box } from "@chakra-ui/react";

interface VinylRecordsProps {
  rank: number;
}

const VinylRecords: React.FC<VinylRecordsProps> = ({ rank }) => {
  return (
    <Box
      w="80%"
      aspectRatio={1}
      borderRadius="full"
      bg="linear-gradient(145deg, #F7F7F8, #F5F5F5)"
      position="relative"
      boxShadow="0 4px 12px rgba(169, 169, 169, 0.3)"
      _before={{
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "25%",
        height: "25%",
        borderRadius: "full",
        bg: "white",
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
        color: "black",
        fontSize: "2xl",
        fontWeight: "bold",
        zIndex: 1,
      }}
    >
      {/* Record grooves simulation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        borderRadius="full"
        background="repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, rgba(0, 0, 0, 0.1) 3px, transparent 4px)"
      />
    </Box>
  );
};

export default VinylRecords;
