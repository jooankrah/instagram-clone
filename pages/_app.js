import { SessionProvider, useSession } from "next-auth/react"
import '../styles/globals.css'
import Head from 'next/head'
import Login from "./auth/login"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Instagram Clone by The Jooankrah</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">
        </link>
      </Head>

      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true })
  const isUser = !!session?.user

  if (isUser) {
    return children
  }

  return <Login />
}

export default MyApp
