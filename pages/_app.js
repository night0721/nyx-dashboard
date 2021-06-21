import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Cath Dashboard</title>
      </Head>
      <Navbar/>
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
