import React from 'react'
import rewardsData from '../RewardData';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import RewardTable from '../Components/RewardTable';

const RedeemedRewards = () => {
  return (
    <div className="flex flex-col h-screen overflow-auto">
        <div className="grid grid-cols-4 grid-rows-8  bg-amber-400 w-full">
            <div className="row-span-1 col-span-4">
                <NavBar />
            </div>
                <div className="flex row-span-6 col-span-2 items-center justify-center">
                    <h1 className="text-7xl font-bold text-white align-middle">We The <span className="text-7xl text-black font-bold">Best!</span>
                    </h1>
                </div>    
            <div className="flex col-start-4 mr-auto row-span-6 content-center">
                <img src={khaled} alt="khaled" className="object-contain h-96 w-auto mb-auto mx-auto content-center"/>
            </div>
        </div>
        <div className="flex flex-col items-start border-red-500 border-4">
            <div className="flex flex-col border-green-500 border-4">
                <h1 className="text-5xl text-black font-bold">Redeemed Rewards</h1>
               <RewardTable data={rewardsData}/>
            </div>
        </div>
            <Footer />
    </div>

  )
}

export default RedeemedRewards