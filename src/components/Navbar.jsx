// import userImg from './../assets/User img.png'
import WebIcon from './../assets/Web Icon.png'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useLogout';
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  const imageUrl = user?.imageUrl || false;

  return (
    <>
      <div className='flex items-center justify-between px-4 py-1'>
        {/* Logo */}
        <div className='flex justify-center items-center'>
          <Link to='/'>
            <img className='h-[70px] w-[140px]' src={WebIcon} alt="Logo" />
          </Link>
        </div>
        {/* Nav items */}
        <div>
          <div className='hidden md:flex'>
            <ul className='flex gap-[32px] font-bold '>
              <Link to='/' className='text-[#E9CA49] relative'>
                <p id='nav-icon'>Home</p>
              </Link>
              <Link to='/main' className='text-[#512C16] relative'>
                <p id='nav-icon'>Add Recipe</p>
              </Link>
              <Link to='/recipes' className='text-[#512C16] relative'>
                <p id='nav-icon'>View Recipe</p>
              </Link>
              {user ? (
                <button id='nav-icon' onClick={logoutHandler}>Logout</button>
              ) : (
                <Link to='/login' className='text-[#512C16] relative'>
                  <p id='nav-icon'>Login</p>
                </Link>
              )}
            </ul>
          </div>
        </div>
        {/* User details */}
        <div className='flex items-center gap-4'>
          <div>
            <Link to={`/${user ? `user/${user.userName}` : 'login'}`}>
              {user ? (
                <img className='w-[30px] h-[30px] rounded-full' src={imageUrl} alt="User" />
              ) : (
                <FaRegUserCircle className='w-[30px] h-[30px]' />
              )}
            </Link>
          </div>
          <div className='flex md:hidden'>
            {/* Responsive Navbar Logo */}
            <button onClick={() => setShow(!show)}>
              {show ? <RiMenu3Line /> : <ImCancelCircle />}
            </button>
          </div>
        </div>
      </div>
      {/* Responsive navbar */}
      <div className='flex md:hidden z-[100]'>
        <div id='bg-blur' className={`drop-shadow-lg w-full duration-500 transition-all ease-in-out flex items-center justify-center absolute ${show ? '-translate-x-[600px]' : 'translate-x-0'} p-4`}>
          <ul className='flex flex-col font-bold gap-2 px-[30px] py-[5px] w-full'>
            <Link to='/' className={`text-[#512C16] text-2xl duration-[500ms] transition-all ease-in-out h-[20px] w-[100px] ${show ? '-translate-x-[300px]' : 'translate-x-0'}`}>Home</Link>
            <hr />
            <Link to='/main' className={`text-[#512C16] text-2xl duration-[600ms] transition-all ease-in-out h-[30px] w-[200px] ${show ? '-translate-x-[300px]' : 'translate-x-0'}`}>Add Recipe</Link>
            <hr />
            <Link to='/recipes' className={`text-[#512C16] text-2xl duration-[700ms] transition-all ease-in-out h-[30px] ${show ? '-translate-x-[300px]' : 'translate-x-0'}`}>View Recipe</Link>
            <hr />
            {user ? (
              <span className={`text-[#512C16] text-2xl duration-[800ms] transition-all ease-in-out h-[30px] ${show ? '-translate-x-[300px]' : 'translate-x-0'}`} onClick={logoutHandler}>Logout</span>
            ) : (
              <Link to='/login' className={`text-[#512C16] text-2xl duration-[800ms] transition-all ease-in-out h-[30px] ${show ? '-translate-x-[300px]' : 'translate-x-0'}`}>Login</Link>
            )}
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
}
