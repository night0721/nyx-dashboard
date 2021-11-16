import React from "react";
import Card from "../../components/Card";
import Head from "next/head";
import { useSession } from "next-auth/client";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Index() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          <h1>Seems like you&apos;re not logged in. Log in to get started!</h1>
        </>
      )}
      {session && (
        <>
          <Head>
            <title>Cath Control Panel</title>
          </Head>
          <Text fontSize="4xl" marginBottom="15">
            Control Panel
          </Text>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <Flex direction="column">
              <Card
                title="Commands"
                desc="Control your commands"
                link="/controlpanel/commands"
                variants={item}
              />
              <Spacer />
              <Card
                title="Commands"
                desc="Control your commands"
                link="/controlpanel/commands"
                variants={item}
              />
              <Spacer />
              <Card
                title="Commands"
                desc="Control your commands"
                link="/controlpanel/commands"
                variants={item}
              />
            </Flex>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Index;
