import Feed from '../components/feed'
import Header from '../components/header'
import UploadModal from '../components/uploadModal'

export default function Home() {

  return (
    <div className='bg-gray-100'>
      {/**header goes here */}
      <Header />

      {/**main section starts here */}
      <UploadModal />
      <Feed />
    </div>
  )
}

Home.auth = true