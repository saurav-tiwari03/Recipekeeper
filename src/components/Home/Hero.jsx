// import heroBg from './../../assets/Food Icons Background.jpg'
import dosa from './../../assets/Dosa img.png';
import samosaImg from './../../assets/Samosa img.png'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between relative'>
      <div className='bg-[#d1c7a0] h-[500px] w-[360px] absolute z-[-100] blur-md flex md:hidden'>
      </div>
      {/*Title Part */}
      <div className='flex flex-col items-center md:items-start'>
        <div className='flex relative z-[-100]'>
          <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-[#512c16] font-bold text-[24px] md:text-[45px]'>
          <Typewriter
            options={{
              strings: ['Where Cravings converge!'],
              autoStart: true,
              loop:true,
            }}
          />
          </h1>
          <h2 className='hidden md:flex flex-col text-[#E9CD5B] text-[22px]'>
            <Typewriter
              options={{
                strings:['Delicious & Nutritious: Recipes Made Easy','Unleash Your Inner Chef'],
                autoStart:true,
                loop:true,
              }} 
            />
          </h2>
          
        </div>
        </div>  
        <div className='mt-4 hidden md:flex'>
          <Link to='/main' className=' started-btn rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-lg bg-[#f4eac4] px-4 py-2' >
              Get Started
          </Link>
        </div>
      </div>
      {/*Image part  */}
      <div id='blur-bg' className='flex relative z-[-100] '>
        <div className='bg-[#d1c7a0] h-[500px] blur-md rounded-l-[200px]  w-[100%] md:w-[500px] absolute top-[-10] right-10 z-[-10] hidden md:flex'></div>
        <div className='flex md:flex-col gap-2 items-center justify-center w-[100%]'>
          <img id='samosa-img' className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] m-[0px]  md:mr-[300px]' src={samosaImg} alt="" />
          <img id='dosa-img' className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] m-[0px] md:ml-[150px]' src={dosa} alt="" />
        </div>
      </div>
      <div className='mt-4 md:hidden flex'>
          <Link to='/main' className=' started-btn rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-lg bg-[#f4eac4] px-4 py-2' >
              Get Started
          </Link>
        </div>
    </div>
  )
}
