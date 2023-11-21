import React, { useState } from 'react';
import liquidLogo from '../Liquid-Label.png';
import pricingCard from '../Assets/Member DJ Khaled/Pricing Card.png';
import free from '../Assets/Member DJ Khaled/Pricing Card_free.png';
import premium from '../Assets/Member DJ Khaled/Pricing Card_premium.png';
import vip from '../Assets/Member DJ Khaled/Pricing Card_vip.png';
import platinum from '../Assets/Member DJ Khaled/Pricing Card_platinum.png';
import progressBar from '../Assets/Member DJ Khaled/progress-bar_2.png'; 
import { Link } from 'react-router-dom';

import Modals from '../Components/Modals/Modals';


const  Register2 = () => {
    const [open, setOpen ] = useState(false);

    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false);


  return (
    <div className="flex h-screen flex-col items-center">
          <div className="mr-auto px-4">
            <img src={liquidLogo} alt="logo" /> 
        </div>
        <div className="flex flex-row w-2/3 justify-between space-x-4">
            <div className="flex space-x-4">
                <p className="">Step 2</p> 
                <p>Membership Type</p>
            </div>
            <div>
                <p className="mr-10">Step 2/3</p>
            </div>
        </div>
            <div className="flex p-4">
                <img src={progressBar} alt=""/>
            </div>
        <div className="flex flex-col mt-10 items-center p-5">
            <h1 className="text-3xl font-bold p-2">Choose Your Membership Type</h1>
            <p>Select membership type you prefer</p>
        </div>
        <div className="grid grid-cols-8 p-5 mt-5 mx-12">
            <div className="flex col-start-1 col-span-4 row-span-full">
                <img src={pricingCard} alt="benefits" />
            </div>
            <div className="flex col-start-5 object-contain  border-4">
                <img src={free} alt="vip" className="object-cover ml-10"/>
            </div>
            <div className="flex col-start-6 object-contain">
                <img src={premium} alt="premium" className="object-cover ml-10"/>
            </div>
            <div className="flex col-start-7 object-contain">
                <img src={platinum} alt="platinum" className="object-cover ml-10"/>
            </div>
            <div className="flex col-start-8 object-contain">
                <img src={vip} alt="vip" className="object-cover ml-5"/>
            </div>
        </div>
        <div className="flex w-full justify-between">
                <button className="bg-white text-black font-bold border-slate-300 border-2 w-48 h-16 py-2 px-4 ml-20 rounded-full">Previous</button>
              
                    <button 
                    onClick={handleOpen}
                    className="bg-amber-400 text-black font-bold py-2 px-4 w-48 rounded-full justify-end mr-20">Continue</button>

                    {
                        open && <Modals open={open} close={handleClose}/> 
                    }
            
        </div>
    </div>
  )
}

export default Register2