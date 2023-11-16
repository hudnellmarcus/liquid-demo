import React from 'react';
import khaled from '../Rectangle 2.png';
import wtbCrop from '../wtb_crop.png';
import liquidLogo from '../Liquid-Label.png';
import paragraph from "../major_move.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-1 flex-col h-screen relative">
      <div className="fle w-52 m-5">
        <img src={liquidLogo} alt="logo" className="h-14"/>
      </div>
      <div className="flex flex-col w-1/3 h-76 absolute top-0 right-0  bg-amber-400 justify-end rounded-bl-3xl">
        <div className="flex space-x-2 pt-3 justify-center">
          <Link to="/">
            <button className="bg-white text-black font-bold w-24 h-12 py-2 px-4 rounded-full">Log In</button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
          </Link>
        </div>
        <img src={khaled} alt="khaled" className="object-cover w-full h-full m-auto" />
      </div>
      <div className="flex items-start flex-col mt-32 ml-10 w-1/2 relative">
        <img src={paragraph} alt="major move" className="m-10" />
        <p className="ml-10 py-5 -mt-5">WTB Members save hundres every year on tee times, gear, and trips!</p>
       <Link to="/register/1">
          <button className="bg-black px-6 py-6 rounded-full ml-10 mt-10 text-lg text-white font-bold">Join the DJ Khaled Membership Today</button>
        </Link>
      </div>
      <div className="flex absolute bottom-0 right-0">
        <img src={wtbCrop} alt="we the best" className="mr-20 h-80 w-full"/>
      </div>
    </div>
  )
}

export default LandingPage