import React from 'react';
import NavBar from '../Components/NavBar';
import social from '../Assets/Member DJ Khaled/Social Media.png';
import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import PerkCarousel from '../Components/PerkCarousel';


const Homepage = () => {
  return (
  <div className="flex flex-col">
    <div className="flex flex-row justify-center p-1 h-15 bg-black">
      <p className="text-lg text-white mr-1">Free Membership. Click Here to</p> <span className="text-lg text-amber-400">Upgrade</span>
    </div>
    <div className="flex flex-col bg-amber-400 w-full h-2/3">
      <NavBar />
        <div className="flex flex-col items-start ml-20 mt-20 py-5 w-full">
          <h1 className="text-7xl font-bold text-white">We The Best!</h1>
          <h1 className="text-7xl font-bold text-black">Let's golf!</h1>
          <div className="flex flex-col w-50">
            <p className="text-2xl p-2 mt-8 items-start">"Major 🔑 Alert! Your passion is the 🔑 to success, and now it's paying you 
              <br />
            back! Dive into the vibes and enjoy major rewards while doing what you 
              <br />
            love. It's all about the journey, it's all about YOU! #WeTheBest 🚀🔑</p>
          </div>
        </div>
        <div className="flex flex-row p-3 ml-20">
          <img src={social} alt="socials" />
        </div>
        <div className="flex items-end justify-end object-contain">
            <img src={khaled} alt="khaled" className="object-contain absolute h-2/4 w-auto mr-20"/>
        </div>
    </div>
    <div className="flex flex-col items-center mt-20">
      <div className='flex flex-col items-center'>
        <h1 className="text-4xl text-black font-bold justify-center p-2">Unlocking Creativity with DJ Khaled Perks!</h1>
        <p className="text-xl justify-center">Unlock a world of benefits specially crafted for creators, packed with exciting rewards in our dedicated creators' offers section</p>
      </div>
    <div className="flex flex-col mt-10 w-1/2">
    <PerkCarousel />
    </div>
    </div>
  </div>
  )
}

export default Homepage;