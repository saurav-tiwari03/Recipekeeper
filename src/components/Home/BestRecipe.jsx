import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import GolgappeImg from './../../assets/Golgappe img.png'

export default function BestRecipe() {
  const [index, setIndex] = useState(0);

  const indexIncHandler = () => {
    setIndex(prevIndex => (prevIndex + 1) % 3);
  }

  const indexDecHandler = () => {
    setIndex(prevIndex => (prevIndex - 1 + 3) % 3);
  }

  return (
    <div>
      <div className="flex flex-col ml-10 md:items-start items-center" >
        <h1 className="text-black text-2xl font-bold ">Best Recipes of the Week</h1>
        <div className="h-[4px] w-[300px] bg-[#D3C8A3] "></div>
      </div>

      <div className="hidden md:flex p-12 items-center justify-evenly">
        <div className='flex items-ceter justify-evenly gap-12'>
          <BestRecipeCard text={'Golgappe'}/>
          <BestRecipeCard text={'Gajar Ka Halwa'}/>
          <BestRecipeCard text={'Veg Roll'}/>
        </div>
      </div>

      <div className="flex md:hidden p-12 items-center justify-evenly">
        <button>
          <FaArrowAltCircleLeft className='flex text-3xl text-[#d0c69f] cursor-pointer ' onClick={indexDecHandler}/>
        </button>
        <div className='flex'>
          <BestRecipeCard text={'Golgappe'} isVisible={index === 0}/>
          <BestRecipeCard text={'Gajar Ka Halwa'} isVisible={index === 1}/>
          <BestRecipeCard text={'Veg Roll'} isVisible={index === 2}/>
        </div>
        <button>
          <FaArrowAltCircleRight className='flex text-3xl text-[#d0c69f] cursor-pointer ' onClick={indexIncHandler}/>
        </button>
      </div>
    </div>
  )
}

function BestRecipeCard ({text, isVisible = true }) {
  return (
    <div className={`flex ${isVisible ? '' : 'hidden'}`}>
      <div className="bg-[#F7EECD] p-12 rounded-tr-[60px] w-[300px] h-[350px] drop-shadow">
        <img src={GolgappeImg} alt="" />
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
