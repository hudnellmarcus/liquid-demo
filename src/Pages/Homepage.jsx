import React from 'react';
import NavBar from '../Components/NavBar';
import social from '../Assets/Member DJ Khaled/Social Media.png';
import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import PerkCarousel from '../Components/PerkCarousel';
import rewards from '../Assets/Member DJ Khaled/Rewards_Placeholder.png';
import Footer from '../Components/Footer';



const Homepage = () => {
  return (
  <div className="flex flex-col h-screen overflow-auto">
    <div className="flex flex-row justify-center p-1 h-12 bg-black">
      <p className="text-sm text-white mr-1">Free Membership. Click Here to</p> <span className="text-sm text-amber-400">Upgrade</span>
    </div>
      <NavBar />
    <div className="flex flex-row bg-amber-400 w-auto h-auto">
      <div className="flex-col">
        <div className="flex flex-col items-start ml-16 py-5 w-full">
          <h1 className="text-5xl font-bold text-white">We The Best!</h1>
          <h1 className="text-5xl font-bold text-black">Let's golf!</h1>
          <div className="flex flex-col w-3/4">
            <p className="text-xl p-2 mt-8 items-start">"Major 🔑 Alert! Your passion is the 🔑 to success, and now  <br /> it's paying you back! Dive into the vibes and enjoy major rewards  <br /> while doing what you            
            love. It's all about the journey, it's all about YOU! #WeTheBest 🚀🔑</p>
          </div>
        </div>
        <div className="flex flex-row p-2 mb-12 ml-14">
          <img src={social} alt="socials" />
        </div>
      </div>
        <div className="flex items-start place-self-end w-1/3 h-auto justify-end mr-4">
            <img src={khaled} alt="khaled" className="mt-2 object-contain"/>
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
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col p-2">
          <h1 className="text-4xl font-bold justify-center p-2">Elevate Your Creative Journey with Exclusive Rewarded Offers!</h1>
          <p className="text-xl p-1">Unlock a world of benefits specially crafted for creators, packed with exciting rewards in our dedicated creator's offers section!</p>
        </div>
        <div className="flex p-2">
          <img src={rewards} alt="rewards" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Homepage;