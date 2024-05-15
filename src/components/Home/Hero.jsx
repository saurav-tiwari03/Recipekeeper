import dosaImg from './../../assets/Dosa img.png'
import samosaImg from './../../assets/Samosa img.png'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom'


export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-between'> 
      {/*Right Side */}
      <div className='flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center ml-10 flex-col'>
          <h1 className="text-[#512C16] text-4xl max-w-[600px] font-bold">
          Where cravings
          <span className='text-[#d0c69f]'>
            <Typewriter
              options={{
                strings: [' converge','meet','fulfill'],
                autoStart: true,
                loop: true,
              }}
              />
          </span>
          </h1>
        </div>
        <div className='flex items-start justify-start'>
          <Link className='bg-[#f4eac4] text-xl font-semibold px-4 py-2 mt-4 rounded-xl drop-shadow transition-all duration-200'>Get Started</Link>
        </div>
      </div>
      {/*Left Side */}
      <div className=''>
        <div>
          <div className='flex flex-col bg-[#d0c69f] w-[600px] h-[600px] bg-glass'>
            <img className='h-[300px] w-[325px]' src={samosaImg} alt="" />
            <div className='flex items-end justify-end'>
              <img className='h-[300px] w-[325px]' src={dosaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  