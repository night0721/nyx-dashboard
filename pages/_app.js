import '../styles/globals.css'
import Head from 'next/head'
import { Provider, useSession } from 'next-auth/client'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../components/Nav/Header'
import theme from '../chakra_config/theme'
import { ColorModeScript } from "@chakra-ui/react"
import Sidebar from '../components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {

  const [session, loading] = useSession()

  return (
    <Provider>
      <ChakraProvider>
        <Head>
          <title>Cath Dashboard</title>
          <link rel="icon" href="/logo.png" type="image/png" />
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header/>
        <div className='page-container'>
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp