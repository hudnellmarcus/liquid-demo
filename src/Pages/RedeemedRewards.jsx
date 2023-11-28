import React, { useState } from 'react'
import rewardsData from '../RewardData';

import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import RewardTable from '../Components/RewardTable';

const RedeemedRewards = () => {
    const [selectedType, setSelectedType ] = useState('all')

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

   
    const filterRewards = (data, selectedType) => {
        if (selectedType === 'all') {
            return data
        }
        return data.filter(reward => reward.rewardType === selectedType);
    };

    const filteredRewards = rewardsData.filter(reward => reward.rewardType === selectedType);
    

    const totalAmountSpent = selectedType === 'all' 
        ? rewardsData.reduce((total, reward) => total + reward.amountSpent, 0) 
        : filteredRewards.reduce((total, reward) => total + reward.amountSpent, 0);

    const totalCashbackRewards = filterRewards(rewardsData, selectedType)
                                .reduce((total, reward) => total + (reward.amountSpent * reward.cashbackPercent), 0);
    
    const totalRedemptions = selectedType === 'all' ? rewardsData.length : filteredRewards.length; 


  return (
    <div className="flex flex-col h-screen overflow-auto">
        <div className="grid grid-cols-4 grid-rows-8  bg-amber-400 w-auto h-auto border-2">
            <div className="row-span-1 col-span-4">
                <NavBar />
            </div>
                <div className="flex row-span-6 col-span-2 items-center justify-center">
                    <h1 className="text-6xl font-bold text-white align-middle">We The <span className="text-7xl text-black font-bold">Best!</span>
                    </h1>
                </div>    
            <div className="flex col-start-4 row-span-6 row-end-8 content-center">
                <img src={khaled} alt="khaled" className="object-contain w-auto mb-auto mx-auto content-center"/>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex flex-col my-4 p-2 w-full">
                <h1 className="text-4xl text-black font-bold ml-6">Redeemed Rewards</h1>
                <div className="flex flex-row m-8 justify-around">
                    <div className="flex flex-row items-center space-x-4 border border-gray-200 rounded-md px-4 py-2">
                     <p className="text-xl text-green-600 font-semibold">${totalAmountSpent.toFixed(2)}</p><p className="text-sm">Total Amount Spent</p>
                    </div>
                    <div className="flex flex-row space-x-4 items-center border border-gray-200 rounded-md px-4 py-2">
                        <p className="text-xl text-green-600 font-semibold">${totalCashbackRewards.toFixed(2)}</p><p className="text-sm">Total Cashback Rewards</p>
                    </div>
                    <div className="flex flex-row space-x-4 items-center border border-gray-200 rounded-md px-4 py-2">
                      <p className="text-xl text-green-600 font-semibold">{totalRedemptions}</p><p className="text-sm">Total Redemptions</p>
                    </div>
                </div>
                <div className="flex mt-6">
                    <select 
                        value={selectedType} 
                        onChange={handleTypeChange} 
                        className="my-2 mx-4 p-2 bg-amber-400 rounded-full font-bold"
                    >
                        <option value="all">Reward Type</option>  
                        <option value="Exploding Reward">Exploding Rewards</option>  
                        <option value="Expiring Reward">Expiring Rewards</option>  
                        <option value="Repeat Reward">Repeat Rewards</option>  
                    </select>
                    <select  className="my-2 mx-4 p-2 bg-amber-400 rounded-full font-bold">
                             <option>Bank Account Filter</option>   
                    </select>
                    <select  className="my-2 mx-4 p-2 bg-amber-400 rounded-full font-bold">
                             <option>Date Range Filter</option>
                    </select>
                </div>

                <div className="flex mt-4">
                    <RewardTable data={filterRewards(rewardsData, selectedType)} />
               </div>
            </div>
        </div>
            <Footer />
    </div>

  )
}

export default RedeemedRewards