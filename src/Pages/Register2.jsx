import React, { useState } from 'react';
import liquidLogo from '../Liquid-Label.png';
import pricingCard from '../Assets/Member DJ Khaled/Pricing_full.png';
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
    <div className="flex h-screen flex-col items-center overflow-y-auto">
          <div className="mr-auto px-4">
            <img src={liquidLogo} alt="logo" /> 
        </div>
        <div className="flex flex-row w-2/3 justify-between space-x-4">
            <div className="flex space-x-4">
                <p className="text-sm">Step 2</p> 
                <p className='text-sm font-semibold'>Membership Type</p>
            </div>
            <div>
                <p className="mr-10 text-sm">Step 2/3</p>
            </div>
        </div>
            <div className="flex p-4">
                <img src={progressBar} alt=""/>
            </div>
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold p-2">Choose Your Membership Type</h1>
            <p className="text-sm">Select membership type you prefer</p>
        </div>
        <div className="flex flex-row items-center py-4">
            <div className="flex h-full justify-center">
                <img src={pricingCard} alt="benefits" className='ml-14'/>
            </div>
        </div>
        <div className="flex w-full justify-between mt-6 mb-6">
                <button className="bg-white text-black font-bold border-slate-300 border-2 w-48 py-2 px-4 ml-20 rounded-full">Previous</button>
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