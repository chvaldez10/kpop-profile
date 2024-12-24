"use client";

import { FC, useState, useRef, useEffect } from "react";
import { Box, Text, Tooltip } from "@chakra-ui/react";

interface RankLabelProps {
  label: string;
}

const RankLabel: FC<RankLabelProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const { scrollHeight, clientHeight } = textRef.current;
        setIsTruncated(scrollHeight > clientHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);

    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, [label]);

  return (
    <Box
      p={{ base: 2, md: 4 }}
      borderRadius="md"
      textAlign="left"
      onMouseEnter={() => isTruncated && setIsOpen(true)}
      onMouseLeave={() => isTruncated && setIsOpen(false)}
    >
      <Tooltip
        label={label}
        hasArrow
        bg="gray.800"
        color="white"
        fontSize="md"
        borderRadius="md"
        isOpen={isOpen}
        closeOnClick={false}
      >
        <Text
          ref={textRef}
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
          color="gray.700"
          overflow="hidden"
          display="-webkit-box"
          sx={{
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            maxHeight: "3em",
            WebkitLineClamp: 2,
          }}
        >
          {label}
        </Text>
      </Tooltip>
    </Box>
  );
};

export default RankLabel;
