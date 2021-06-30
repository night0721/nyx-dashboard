import Card from '../components/Card'
import { useSession } from 'next-auth/client'
import { Text } from "@chakra-ui/react"
import Hero from '../components/Hero/Hero'
import { CTA } from '../components/CTA'
import { Features } from '../components/Features/Features'
import { Footer } from '../components/Footer/Footer'
import { motion } from 'framer-motion'
import StatCard from '../components/StatCard'

export default function Home() {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3
      }
    }
  }


  const [session, loading] = useSession()

  return (

    <>
      {!session && <>
        <Hero title='Cath.exe' subtitle='Your favorite CODM bot. Cath.exe is packed to the brim with commands for moderation, stats and of course, CODM.' ctaText='Add Cath to your server' image='/logo.png' ctaLink={"https://discord.com/api/oauth2/authorize?client_id=800966959268364288&permissions=4231314550&scope=bot%20applications.commands"}/>
        <Features />
        <CTA />
        <Footer />
      </>
      }
      {session && <>
        <Text fontSize='4xl'>Welcome {session.user.name}!</Text>
        <motion.div className='grid' variants={container} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
          <StatCard/>
        </motion.div>
      </>
      }
    </>
  )
}