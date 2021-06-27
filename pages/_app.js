import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Provider } from 'next-auth/client'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../components/Nav/Header'
import theme from '../chakra_config/theme'
import { ColorModeScript } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ChakraProvider>
        <Head>
          <title>Cath Dashboard</title>
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
