import React from 'react';
import khaled from '../Rectangle 2.png';
import wtbCrop from '../wtb_crop.png';
import liquidLogo from '../Liquid-Label.png';
import paragraph from "../major_move.png";
import { Link } from 'react-router-dom';

const LandingPage = () => {

 { /*} return (

    <div className="grid grid-cols-8 grid-rows-5 h-screen">
    <div className="col-span-5 m-5 flex items-center">
      <img src={liquidLogo} alt="logo" className="h-14" />
    </div>
    <div className="grid col-span-3 col-start-6 row-span-3 grid-cols-2 grid-rows-2">
      <div className="grid grid-cols-auto grid-rows-auto col-span-2 row-span-2 h-full bg-amber-400 p-4         rounded-bl-3xl">
        <div className="flex flex-col col-span-2 pt-3 justify-center items-stretch">
          <Link to="/">
            <button className="bg-white text-black font-bold justify-between w-24 h-12 py-2 px-4 rounded-full">Log In</button>
            <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Sign Up</button>
          </Link>
        </div>
        <img src={khaled} alt="khaled" className=" object-fill row-end-3 mt-32 row-span-2 row-start-2 h-auto w-full" />
      </div>
    </div>
    <div className="col-span-4 flex items-start flex-col mt-32 ml-10 relative">
      <img src={paragraph} alt="major move" className="m-10" />
      <p className="col-span-2 row-start-2 ml-10 py-5 -mt-5">WTB Members save hundreds every year on tee times, gear, and trips!</p>
      <Link to="/register/1">
        <button className="bg-black px-6 py-6 rounded-full ml-10 mt-10 text-lg text-white font-bold">Join the DJ Khaled Membership Today</button>
      </Link>
    </div>
    <div className="col-start-6 col-span-2 row-start-4">
      <img src={wtbCrop} alt="we the best" className="mr-20 h-80 w-full" />
    </div>
  </div>
) */ }
    
    

  return (
    <div className="flex flex-1 flex-col h-screen">
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
      <div className="flex object-contain">
        <img src={wtbCrop} alt="we the best" className="ml-auto mr-60 object-cover max-h-80 min-w-fit"/>
      </div>
    </div>
  )

}

export default LandingPage;