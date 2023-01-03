import { useRef } from 'react'
import { useRouter } from 'next/router'
import { UserInfo } from '../../api/users'
import { GlobalState } from '../../store/reducers'
import { connect, useDispatch } from 'react-redux'

interface HomePageProps {
  userInfo: UserInfo
}

const Home: React.FC<HomePageProps> = ({ userInfo }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <>
      <h1
        className='text-[2.5rem] mt-5 cursor-pointer font-[400] text-medium mobile:text-[2rem] mobile:font-semibold'
        onClick={() => {
          router.push('/')
        }}
      >
        Home Page
      </h1>
      <p className='text-lg mobile:mt-3 text-light'>Be confident</p>
    </>
  )
}

const mapStateToPros = (state: GlobalState) => {
  return {
    userInfo: state.main.userInfo
  }
}

export default connect(mapStateToPros)(Home)
