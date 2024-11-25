"use client";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  //   ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Divider,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";

const ENABLE_SIGNUP = false;

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        onClick={onOpen}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"brand.300"}
        _hover={{
          bg: "brand.400",
        }}
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white.50">
          <ModalHeader>Welcome Back</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>

              <Button colorScheme="brand" width="full">
                Login
              </Button>

              {ENABLE_SIGNUP && (
                <>
                  <Divider />
                  <Text>
                    Don&apos;t have an account?{" "}
                    <ChakraLink color="brand.300" fontWeight="bold">
                      Sign Up
                    </ChakraLink>
                  </Text>
                </>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
