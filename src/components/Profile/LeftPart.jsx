// import userImg from '../../assets/User img.png'
import { useSelector } from 'react-redux'
import profileImg from './../../assets/noProfileImg.png'
import { FaEdit } from "react-icons/fa";


export default function LeftPart() {
  const {user} = useSelector((state) => state.user) 
  return (
    <div>
      <div className='flex relative flex-col'>
        <div className='bg-[#d4caa5] blur-md h-[340px] w-[360px] -z-1'></div>
        <div className=''>
          {
            user.imageUrl ?
            (<img className='absolute left-0 top-0' width={350} src={user.imageUrl} alt="" />) :
            (
              <div className='flex flex-col'>
                <img className='absolute left-0 top-0 rounded-full' width={330} src={profileImg} />
                <button className='text-3xl text-center flex justify-center text-[#54301a] '>
                  <FaEdit />
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
