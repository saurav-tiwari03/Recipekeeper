import userImg from './../assets/User img.png'
import {Link} from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { useState } from 'react';


export default function Navbar() {
  const [show,setShow] = useState(true);
  return (  
  <>
    <div className='flex md:hidden'>
      <div id='bg-blur' className={` drop-shadow-lg duration-500 transition-all ease-in-out flex items-center justify-center absolute w-[75%] ${show ? ('-translate-x-[600px]') : (' translate-x-1')} p-4`}>
            <ul className='flex flex-col font-bold gap-3 px-[30px] py-[5px] '>
              <Link to='/' className={`text-[#512C16] text-2xl hover:text-3xl duration-[500ms] transition-all ease-in-out h-[30px] w-[100px ] ${show ? ('-translate-x-[300px]') :('translate-x-1')}`}>Home</Link>
              <hr />
              <Link to='/main' className={`text-[#512C16] text-2xl hover:text-3xl duration-[600ms] transition-all ease-in-out h-[30px] w-[200px] ${show ? ('-translate-x-[300px]') :('translate-x-1')}`}>Add Recipe</Link>
              <hr />
              <Link to='/main' className={`text-[#512C16] text-2xl hover:text-3xl duration-[700ms] transition-all ease-in-out h-[30px] ${show ? ('-translate-x-[300px]') :('translate-x-1')}`}>View Recipe</Link>
              <hr />
              <Link to='/login' className={`text-[#512C16] text-2xl hover:text-3xl duration-[800ms] transition-all ease-in-out h-[30px] ${show ? ('-translate-x-[300px]') :('translate-x-1')}`}>Login</Link>
              <hr />
            </ul>
      </div>
    </div>
    
    <div className='flex items-center justify-between px-4 py-1'>
      {/*Logo  */}
      <div className='flex justify-center items-center'>
        <p className='text-6xl font-bold text-[#D1C79F]'>R</p>
        <p className='flex flex-col gap-[0] text-[#512C16]'>
          <span>ecipe</span>
          <span>Keeper</span>
        </p>
      </div>
      {/*Nav items */}
      <div>
        <div className='hidden md:flex'>
          <ul className='flex gap-[32px] font-bold'>
            <Link to='/main' className='text-[#E9CA49]'>Home</Link>
            <Link to='/main' className='text-[#512C16]'>Add Recipe</Link>
            <Link to='/main' className='text-[#512C16]'>View Recipe</Link>
            <Link to='/main' className='text-[#512C16]'>Login</Link>
          </ul>
        </div>
      </div>
      {/*User details */}
      <div className='flex items-center gap-4'>
        <div>
          <img className='w-[30px] h-[30px]' src={userImg} alt=""  />
        </div>
        <div className='flex md:hidden'>
          {/*Responsive Navbar Logo */}
          <button onClick={() => setShow(!show)}>{show ? <RiMenu3Line /> : <ImCancelCircle/>}</button>
        </div>
      </div>
      
    </div>
  </>
  )
}
