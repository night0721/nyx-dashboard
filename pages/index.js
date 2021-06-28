import Card from '../components/Card'
import { useSession } from 'next-auth/client'
import { Text } from "@chakra-ui/react"
import Hero from '../components/Hero/Hero'
import { CTA } from '../components/CTA'
import { Features } from '../components/Features/Features'
import {Footer} from '../components/Footer/Footer'

export default function Home() {

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
        <div className='grid'>
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
          <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands' />
        </div>
      </>
      }
    </>
  )
}
