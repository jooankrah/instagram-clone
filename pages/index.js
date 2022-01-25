import Head from 'next/head'
import Feed from '../components/feed'
import Header from '../components/header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Instagram Clone by The Jooankrah</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">
        </link>
      </Head>
      <div className='bg-gray-100'>
        {/**header goes here */}
        <Header />

        {/**main section starts here */}
        <Feed />
      </div>
    </div>
  )
}
