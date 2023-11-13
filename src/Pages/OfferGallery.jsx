import React, { useState} from 'react'

import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import rewards1 from '../Assets/Member DJ Khaled/all_rewards1.png';
import rewards2 from '../Assets/Member DJ Khaled/all_rewards2.png';
import rewards3 from '../Assets/Member DJ Khaled/all_rewards3.png';
import activated from '../Assets/Member DJ Khaled/activated_rewards.png';
import expired from '../Assets/Member DJ Khaled/expired_rewards.png';

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';



const OfferGallery = () => {
    const [ activeButton, setActiveButton ] = useState('all');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

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
        <div className="flex flex-row p-4 mx-12 my-12 space-x-8">
            <button 
            className={`px-6 py-2 font-semibold text-lg border-black border-2 rounded-full ${activeButton === 'all' ? 'text-white bg-black' : 'text-black bg-white'}`}
            onClick={() => handleButtonClick('all')}>All</button>
            <button 
             className={`px-6 py-2 font-semibold text-lg border-black border-2 rounded-full ${activeButton === 'activated' ? 'text-white bg-amber-400' : 'text-black bg-white'}`}
            onClick={() => handleButtonClick('activated')}>Activated</button>
            <button 
           className={`px-6 py-2 font-semibold text-lg border-black border-2 rounded-full ${activeButton === 'expired' ? 'text-white bg-amber-400' : 'text-black bg-white'}`}
            onClick={() => handleButtonClick('expired')}>Expired</button>
        </div>
            {   activeButton === 'all' &&
        <div className="flex flex-col items-start p-4">
            <div className="flex p-2">
                <img src={rewards1} alt="reward1" className="flex object-contain"/>
            </div>
            <div className="flex p-2">
                <img src={rewards2} alt="reward2" />
            </div>
            <div className="flex p-2 ml-14">
                <img src={rewards3} alt="reward3" />
            </div>
        </div>
            }
            {   activeButton === 'activated' &&
        <div className="flex flex-col items-start p-4">
            <div className="flex p-2">
                <img src={activated} alt="reward1" className="flex object-contain"/>
            </div>
        </div>
            }
            {   activeButton === 'expired' &&
        <div className="flex flex-col items-start p-4">
            <div className="flex p-2">
                <img src={expired} alt="reward1" className="flex object-contain"/>
            </div>
        </div>
            }
        <Footer />
    </div>
  )
}

export default OfferGallery;