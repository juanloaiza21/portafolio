//Css for all the app
import 'bootswatch/dist/vapor/bootstrap.min.css';
import '../global.css';
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Juan Loaiza</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp