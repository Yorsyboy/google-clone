import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body'

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </>
  )
}
