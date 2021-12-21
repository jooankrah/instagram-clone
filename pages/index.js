import Head from 'next/head'
import Feed from '../components/feed'
import Header from '../components/header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Instagram Clone by The Jooankrah</title>
      </Head>
      <div className='bg-gray-100 h-screen'>
        {/**header goes here */}
        <Header />

        {/**main section starts here */}
        <Feed />
      </div>
    </div>
  )
}
