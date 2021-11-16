import React from "react";
import Link from "next/link";
import { Text, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Card({ title, desc, link }) {
  return (
    <Link href={link}>
      <MotionFlex
        direction="column"
        background="gray.900"
        width={300}
        height={150}
        p="5"
        borderRadius="15px"
        variants={item}
      >
        <Text fontSize="2xl">{title}</Text>
        <Text fontSize="lg" style={{ marginBottom: "10px" }}>
          {desc}
        </Text>
        <Button colorScheme="teal" variant="outline">
          Learn More
        </Button>
      </MotionFlex>
    </Link>
  );
}

export default Card;
