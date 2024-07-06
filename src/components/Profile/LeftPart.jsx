// import userImg from '../../assets/User img.png'
import profileImg from './../../assets/Profile Photo.png'
export default function LeftPart() {
  return (
    <div>
      <div className='flex relative'>
        <div className='bg-[#d4caa5] blur-md h-[350px] w-[360px]'></div>
        <img className='absolute left-0 top-0' width={350} src={profileImg} alt="" />
      </div>
    </div>
  )
}
