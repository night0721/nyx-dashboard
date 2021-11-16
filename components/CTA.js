import { Box, Button, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

export const CTA = () => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{ base: "6", lg: "8" }}
      py={{ base: "16", sm: "20" }}
      textAlign="center"
    >
      <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
        Convinced?
      </Heading>
      <Text mt="4" fontSize="lg">
        Start using Cath.exe in your servers now
      </Text>
      <Button
        mt="8"
        as="a"
        href="#"
        size="lg"
        colorScheme="teal"
        fontWeight="bold"
      >
        Start For Free
      </Button>
    </Box>
  </Box>
);
