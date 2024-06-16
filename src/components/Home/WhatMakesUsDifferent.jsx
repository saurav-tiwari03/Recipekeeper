import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";

export default function WhatMakesUsDifferent() {
  return (
    <div className="">
      <Headline />
    </div>
  )
}


function Headline () {
  const [show0,setShow0] = useState(false);
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);

  const showHandler = (index) => {
    if(index === 0){
      setShow0(!show0)
      setShow1(false)
      setShow2(false)
      setShow3(false)
    }
    else if(index === 1){
      setShow0(false)
      setShow1(!show1)
      setShow2(false)
      setShow3(false)
    }
    else if(index === 2){
      setShow0(false)
      setShow1(false)
      setShow2(!show2)
      setShow3(false)
    }
    else if(index === 3){
      setShow0(false)
      setShow1(false)
      setShow2(false)
      setShow3(!show3)
    }
  }

  return (
    <div className="mb-12">
      <div className="flex flex-col md:items-start ml-0 md:ml-10 items-center mb-4" >
        <h1 className="text-black text-2xl font-bold ">What makes use different</h1>
        <div className="h-[4px] w-[300px] bg-[#D3C8A3] "></div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="bg-[#fffde7] w-[75%] px-8 rounded-tr-[55px] drop-shadow py-4">
          <ul className="flex flex-col gap-4">
            <li className="">
              <button onClick={() => showHandler(0)} className="text-[#A04818] text-start text-xs md:text-2xl font-bold flex items-center justify-between w-full px-8">
                <span className="text-start ml-[-20px]">Collaborative Recipe Creating & Sharing</span>
                <span className={`transition-all ease-in-out dur  ation-[600ms] ${show0 ? 'rotate-180' : 'rotate-0'}`}>< IoIosArrowDown /></span>
              </button>
              <div className={`grid px-8 overflow-hidden transition-all duration-300 ease-in-out text-black ${show0 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden flex items-center" >
                  <span className="text-xl">< MdArrowRight /></span>
                  <span className="text-[10px] md:text-xl" >Facilitate seamless recipe creation with clear & interactive forums.</span>
                </p>
              </div>
            </li>
            <hr />
            <li className="w-full">
              <button onClick={() => showHandler(1)} className="text-[#A04818] text-xs md:text-2xl font-bold flex items-center justify-between w-full px-8">
                <span className="text-start ml-[-20px]">Scale Recipe Tool</span>
                <span className={`transition-all ease-in-out duration-[600ms] ${show1 ? 'rotate-180' : 'rotate-0'}`}>< IoIosArrowDown /></span>
              </button>
              <div className={`grid px-8 overflow-hidden transition-all duration-300 ease-in-out text-black ${show1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden flex items-center ">
                  <span className="text-xl"><MdArrowRight/> </span>
                  <span className="text-[10px] md:text-xl">Input number of person to get rought amount of ingredient required.</span>
                </p>
              </div>
            </li>
            <hr />
            <li className="w-full">
              <button onClick={() => showHandler(2)} className="text-[#A04818] text-xs md:text-2xl font-bold flex items-center justify-between w-full px-8">
                <span className="text-start ml-[-20px]">Add Recipes to favourites</span>
                <span className={`transition-all ease-in-out duration-[600ms] ${show2 ? 'rotate-180' : 'rotate-0'}`}>< IoIosArrowDown /></span>
              </button>
              <div className={`grid px-8 overflow-hidden transition-all duration-300 ease-in-out text-black ${show2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden flex items-center">
                  <span className="text-xl"><MdArrowRight /></span>
                  <span className="text-[10px] md:text-xl">Create a fav list and add your favourites recipes there.</span>
                </p>
              </div>
            </li>
            <hr />
            <li className="w-full">
              <button onClick={() => showHandler(3)} className="text-[#A04818] text-xs md:text-2xl font-bold flex items-center justify-between w-full px-8">
                <span className="text-start ml-[-20px]">Monetization</span>
                <span className={`transition-all ease-in-out duration-[600ms] ${show3 ? 'rotate-180' : 'rotate-0'}`}>< IoIosArrowDown /></span>
              </button>
              <div className={`grid px-8 overflow-hidden transition-all duration-300 ease-in-out text-black ${show3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className="overflow-hidden flex items-center">
                  <span className="text-xl">< MdArrowRight /></span>
                  <span className="text-[10px] md:text-xl">Earn Money by posting recipes (Currently under Development).</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
