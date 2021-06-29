import Card from '../components/Card'
import { useSession } from 'next-auth/client'
import { Text } from "@chakra-ui/react"
import Hero from '../components/Hero/Hero'
import { CTA } from '../components/CTA'
import { Features } from '../components/Features/Features'
import {Footer} from '../components/Footer/Footer'
import {motion} from 'framer-motion'

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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const [session, loading] = useSession()

  return (

    <>
      {!session && <>
        <Hero title='Cath.exe' subtitle='Your favorite CODM bot. Cath.exe is packed to the brim with commands for moderation, stats and of course, CODM.' ctaText='Sign In' image='/logo.png' />
        <Features />
        <CTA />
        <Footer />
      </>
      }
      {session && <>
        <Text fontSize='4xl'>Welcome {session.user.name}!</Text>
        <motion.div className='grid' variants={container} initial="hidden" animate="visible">
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' variants={item}/>
        </motion.div>
      </>
      }
    </>
  )
}
