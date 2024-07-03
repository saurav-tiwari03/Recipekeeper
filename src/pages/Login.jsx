import { useState } from 'react'
import Icon from './../assets/Web Icon.png'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { PiSpinnerGapLight } from "react-icons/pi";
import { useLogin } from '../hooks/useLogin';


export default function Login() {
  const [email,setEmail] = useState('');  
  const [password,setPassword] = useState('');  
  const [showPassword,setShowPassword] = useState(false);
  const {login,isLoading,error} = useLogin()


  const loginHandler = (e) => {
    e.preventDefault();
    login(email,password)
  }

  return (
    <>
      <div className='login-page'>
        <div className=''>
          <img src={Icon} alt="" width={200} />
        </div>
        <div className='flex mt-12 items-center justify-center md:items-start md:justify-start'>
          <form onSubmit={loginHandler} className='login-bg md:ml-4 h-[320px] md:h-[400px] w-[300px] md:w-[600px]'>
            <div className=''>
              <p className='text-center text-3xl md:text-6xl my-2 font-inputForm font-semibold'>Welcome!</p>
            </div>
            <div className='flex gap-2 flex-col items-center justify-center md:mt-12'>
              <div>
                <input className='bg-[#d1af93] h-[50px] w-[250px] md:w-[350px] outline-none rounded-md text-white placeholder:font-inputForm placeholder:text-[#483A24] pl-2 form-input' type="text" placeholder='Email : ' onChange={(e) => setEmail(e.target.value)} />
                <div className='form-input-border'></div>
              </div>
              <div className='relative flex items-center w-[250px] md:w-[350px]'>
                <input className='bg-[#d1af93] h-[50px] w-[350px] outline-none rounded-md relative text-white placeholder:font-inputForm placeholder:text-[#483A24] pl-2' type={showPassword ? 'text' : 'password'} placeholder='Password : 'onChange={(e) => setPassword(e.target.value)}/>
                <div className='absolute text-[#483a24] right-3' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</div>
              </div>
            </div>
            <div className='flex items-center justify-center mt-8'>
              <button className='bg-[#eddd9f] rounded-xl h-[50px] w-[100px] text-xl font-semibold font-inputForm flex items-center justify-center' >
                {
                  isLoading ? < PiSpinnerGapLight className='animate-spin'/> : 'Login'
                }
              </button>
            </div>
            {error && <p className='text-red-500'>{error.response.data.message}</p>}
            <div className='flex gap-1 items-center justify-center mt-8'>
              <p className='font-Lato'>Dont have an account! </p>
              <Link className='' to='/'>Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
