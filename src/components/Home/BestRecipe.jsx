/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import GolgappeImg from './../../assets/Golgappe img.png'
import Samosa from './../../assets/Golgappe img.png'
import MedalImg1 from './../../assets/MedalImg1.png'
import MedalImg2 from './../../assets/MedalImg2.png'
import MedalImg3 from './../../assets/MedalImg3.png'

export default function BestRecipe() {
  const [show,setShow] = useState(0);

  const showIncHandler = () => {
    if(show == 2){
      setShow(2)
    }
    else {
      setShow((show + 1) % 3)
    }
  }

  const showDecHandler = () => {
    if(show == 0){
      setShow(0)
    }
    else {
      setShow((show - 1 + 3) % 3)
    }
  }
  

  return (
    <div className='my-4'>
      <div className="flex flex-col md:items-start ml-0 md:ml-10 items-center" >
        <h1 className="text-black text-2xl font-bold ">Best Recipes of the Week</h1>
        <div className="h-[4px] w-[300px] bg-[#D3C8A3] "></div>
      </div>

      <div className="hidden md:flex p-12 items-center justify-evenly">
        <div className='flex items-ceter justify-evenly gap-12'>
          <BestRecipeCard text={'Golgappe'} img={MedalImg1} isVisible={true}/>
          <BestRecipeCard text={'Gajar Ka Halwa'} img={MedalImg2} isVisible={true}/>
          <BestRecipeCard text={'Veg Roll'} img={MedalImg3} isVisible={true}/>
        </div>
      </div>

    {/*Responsive Card  Navigation */}
      <div className='flex flex-col items-center gap-4 mt-10 ml-4 justify-center md:hidden'>
        <div className='flex items-center gap-4'>
          <div className='text-2xl text-[#d0c69f]'>
            <button onClick={showDecHandler}><FaArrowAltCircleLeft  /></button>
          </div>
          <div className='flex w-[250px] h-[320px]  text-center relative overflow-x-hidden '>
            <div className={`transition-all duration-500 absolute
            ${show == 0 ? 'translate-x-0' :''}
            ${show == 1 ? '-translate-x-[1000px]' : ''}
            ${show == 2 ? '-translate-x-[2000px]' : ''} 
            `}>
              <div>
                <div className="bg-[#F7EECD] p-12 rounded-tr-[60px] w-[225px] h-[300px] drop-shadow">
                <img className='absolute top-0 left-0 h-[60px] w-[60px]'  src={MedalImg1} alt="" />
                  <img src={GolgappeImg} alt="" />
                  <p className="text-center text-xl my-4">GolGappe</p>
                  <div className='flex items-center justify-center'>
                    <button className="bg-[#eddd9f] text-black font-semibold py-1 px-3 rounded-tr-2xl rounded-bl-2xl"> 
                      View Recipe 
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-500 absolute 
            ${show == 0 ? 'translate-x-[1000px]' :''}
            ${show == 1 ? 'translate-x-0' : ''}
            ${show == 2 ? '-translate-x-[1200px]' : ''} 
            `} >
              <div className="bg-[#F7EECD] p-12 rounded-tr-[60px] w-[225px] h-[300px] drop-shadow">
                <img className='absolute top-0 left-0 h-[60px] w-[60px]'  src={MedalImg2} alt="" />
                  <img src={Samosa} alt="" />
                  <p className="text-center text-xl my-4">GolGappe</p>
                  <div className='flex items-center justify-center'>
                    <button className="bg-[#eddd9f] text-black font-semibold py-1 px-3 rounded-tr-2xl rounded-bl-2xl"> 
                      View Recipe 
                    </button>
                  </div>
                </div>
            </div>

            <div className={`transition-all duration-500  
            ${show == 0 ? 'translate-x-[2400px]' :''}
            ${show == 1 ? 'translate-x-[1200px]' : ''}
            ${show == 2 ? 'translate-x-0' : ''} 
            `}>
              <div className="bg-[#F7EECD] p-12 rounded-tr-[60px] w-[225px] h-[300px] drop-shadow">
                <div>
                  <img className='absolute top-0 left-0 h-[60px] w-[60px]'  src={MedalImg3} alt="" />
                </div>
                  <div>
                    <img src={GolgappeImg} alt="" />
                  </div>
                  <p className="text-center text-xl my-4">GolGappe</p>
                  <div className='flex items-center justify-center'>
                    <button className="bg-[#eddd9f] text-black font-semibold py-1 px-3 rounded-tr-2xl rounded-bl-2xl"> 
                      View Recipe 
                    </button>
                  </div>
                </div>
            </div>
        </div>
        <div className='text-2xl text-[#d0c69f]'>
          <button onClick={showIncHandler}><FaArrowAltCircleRight /></button>
        </div>
       </div>
       {/*Under Line Navigation */}
       <div className='flex gap-1'>
        <div className={` ${show == 0 ? 'bg-[#d0c69f]' : 'bg-[#f7eecd]'} h-[5px] w-[50px]`}></div>
        <div className={` ${show == 1 ? 'bg-[#d0c69f]' : 'bg-[#f7eecd]'} h-[5px] w-[50px]`}></div>
        <div className={` ${show == 2 ? 'bg-[#d0c69f]' : 'bg-[#f7eecd]'} h-[5px] w-[50px]`}></div>
       </div>
      </div>
    </div>
  )
}

function BestRecipeCard ({text, img ,isVisible}) {
  return (
    <div className={`flex ${isVisible ? '' : 'hidden'}`}>
      <div className="bg-[#F7EECD] p-12 rounded-tr-[60px] w-[300px] h-[350px] drop-shadow">
        <div>
          <img className='absolute top-0 left-0 h-[50px] w-[50px]' src={img} alt="" />
        </div>
        <div>
          <img src={GolgappeImg} alt="" />
        </div>
        <p className="text-center text-xl my-4">{text}</p>
        <div className='flex items-center justify-center'>
          <button className="bg-[#eddd9f] text-black font-semibold py-1 px-3 rounded-tr-2xl rounded-bl-2xl"> 
            View Recipe 
          </button>
        </div>
      </div>
    </div>
  )
}
