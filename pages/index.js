import { Typography } from '@material-ui/core'
import CardContainer from '../components/CardContainer'

export default function Home() {
  return (
    <>
      <h1>Welcome User!</h1>
      <div className='grid'>
        <CardContainer title='Commands' link='/controlpanel/commands'>Command controls</CardContainer>
        <CardContainer title='Commands' link='/controlpanel/commands'>Command controls</CardContainer>
        <CardContainer title='Commands' link='/controlpanel/commands'>Command controls</CardContainer>
        <CardContainer title='Commands' link='/controlpanel/commands'>Command controls</CardContainer>
        <CardContainer title='Commands' link='/controlpanel/commands'>Command controls</CardContainer>
      </div>
    </>
  )
}
