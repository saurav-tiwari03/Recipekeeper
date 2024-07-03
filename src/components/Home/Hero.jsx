import dosaImg from './../../assets/Dosa img.png'
import samosaImg from './../../assets/Samosa img.png'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom'


export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-4'> 
      {/*Right Side */}
      <div className='flex  justify-center flex-col ml-10'>
        <div className='flex items-center justify-center flex-col'>
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
          <div className=''>
            <p className='text-[#E9CD5B]'>Recipes Made Easy</p>
          </div>
        </div>
        <div className='flex items-start justify-center'>
          <Link className='bg-[#f4eac4]  text-xl font-semibold px-4 py-2 mt-4 rounded-xl transition-all duration-200' to='/login'>Get Started</Link>
        </div>
      </div>
      {/*Left Side */}
      <div className=''>
        <div className=''>
          <div className='flex flex-col bg-[#d0c69f] w-auto h-auto md:w-[600px] md:h-[600px] bg-glass pb-4'>
            <img className='h-[200px] w-[225px] md:h-[300px] md:w-[325px] drop-shadow-lg' src={samosaImg} alt="" />
            <div className='flex items-end justify-end'>
              <img className='h-[200px] w-[225px] md:h-[300px] md:w-[325px] drop-shadow-xl' src={dosaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
