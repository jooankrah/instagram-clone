import Feed from '../components/feed'
import Header from '../components/header'

export default function Home() {

  return (
    <div className='bg-gray-100'>
      {/**header goes here */}
      <Header />

      {/**main section starts here */}
      <Feed />
    </div>
  )
}

Home.auth = true