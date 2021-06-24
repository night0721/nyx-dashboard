import { Typography } from '@material-ui/core'
import CardContainer from '../components/CardContainer'
import Card from '../components/Card'
import { useSession } from 'next-auth/client'

export default function Home() {

  const [session, loading] = useSession()

  return (
  
  <>
    {!session && <>
      <h1>Seems like you&apos;re not logged in. Log in to get started!</h1>
    </>
  }
  {session && <>
      <h1>Welcome {session.user.name}!</h1>
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
