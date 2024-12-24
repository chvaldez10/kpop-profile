"use client";

import { login, signup } from "@/app/login/actions";

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
import { useState } from "react";

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Setup formData
    const formData = new FormData(e.target as HTMLFormElement);
    formData.set("email", email);
    formData.set("password", password);

    // Check if signup and passwords match
    if (!isLogin) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
    }

    try {
      if (isLogin) {
        await login(formData);
      } else {
        await signup(formData);
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

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
        {isLogin ? "Login" : "Sign Up"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="white.50"
          py={4}
          minHeight={{ base: "100vh", md: "auto" }}
        >
          <ModalHeader>
            {isLogin ? "Welcome Back" : "Create an Account"}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>

                {!isLogin && (
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </FormControl>
                )}

                <Button colorScheme="brand" width="full" type="submit">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>

                <Divider />
                <Text>
                  {isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <ChakraLink
                    color="brand.300"
                    fontWeight="bold"
                    onClick={toggleForm}
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </ChakraLink>
                </Text>
              </VStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
