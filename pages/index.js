import Card from '../components/Card'
import { useSession } from 'next-auth/client'
import { Text } from "@chakra-ui/react"

export default function Home() {

  const [session, loading] = useSession()

  return (
  
  <>
    {!session && <>
      <h1>Seems like you&apos;re not logged in. Log in to get started!</h1>
    </>
  }
  {session && <>
      <Text fontSize='4xl'>Welcome {session.user.name}!</Text>
      <div className='grid'>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
        <Card title='commands' desc='lorem ipsum dolor sit amet' link='/controlpanel/commands'/>
      </div>
    </>
  }
  </>
  )
}
