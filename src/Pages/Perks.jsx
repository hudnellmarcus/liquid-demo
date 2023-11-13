import React, { useState } from 'react';


import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import PerkCarousel from '../Components/PerkCarousel';

import khaled from '../Assets/Member DJ Khaled/djk 1.png';
import perkToolbar from '../Assets/Member DJ Khaled/perk_toolbar.png';

const Perks = () => {
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
        <div className="flex flex-col">
            <div className="flex flex-row p-4 mx-12 my-12 space-x-8">
                <button 
                    className={`px-6 py-2 font-semibold text-lg border-gray-200 border-2 rounded-full ${activeButton === 'all' ? 'text-white bg-amber-400' : 'text-black bg-white'}`}
                    onClick={() => handleButtonClick('all')}>All</button>
                <button 
                    className={`px-6 py-2 font-semibold text-lg border-gray-200 border-2 rounded-full ${activeButton === 'limited time' ? 'text-white bg-amber-400' : 'text-black bg-white'}`}
                    onClick={() => handleButtonClick('limited time')}>Activated</button>
            </div>
            <div>
                <img src={perkToolbar} alt="toolbar" className="ml-12"/>
            </div>
            <div className="flex flex-col items-center mt-16">
                <div className="flex flex-col w-2/3">
                    <PerkCarousel />
                </div>
            </div>
        </div>
            <Footer />
    </div>

  )
}

export default Perks