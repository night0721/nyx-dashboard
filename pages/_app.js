import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cath Dashboard</title>
      </Head>
      <Navbar/>
      <div className='page-container'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
