import Card from "../components/Card";
import { useSession } from "next-auth/client";
import { Text } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import { CTA } from "../components/CTA";
import { Features } from "../components/Features/Features";
import { Footer } from "../components/Footer/Footer";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import Testimonials from "../components/Testimonials/Testimonials";
import AuthButton from "../components/AuthButton";

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,
      },
    },
  };

  const [session, loading] = useSession();
  return (
    <>
      {!session && (
        <>
          <Hero />
          <Features />
          <Testimonials />
          <CTA />
          <Footer />
        </>
      )}
      {session && (
        <>
          <Text fontSize="4xl">Welcome {session.user.name}!</Text>
          <motion.div
            className="grid"
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <Card
              title="commands"
              desc="lorem ipsum dolor sit amet"
              link="/controlpanel/commands"
            />
            <StatCard />
          </motion.div>
        </>
      )}
    </>
  );
}
