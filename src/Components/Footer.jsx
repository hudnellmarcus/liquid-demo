import React from 'react';
import logo from '../Assets/Member DJ Khaled/logo_white.png';

const Footer = () => {
  return (
    <div className="flex bg-black text-white h-full w-full mt-24">
        <div className="flex flex-col 2 w-full m-12 ">
            <img src={logo} alt="logo" className="flex object-contain h-auto w-36"/>
            <div className="flex">
                <hr className='h-1 m-5 justify-start w-full'/>
            </div>
            <div className="flex flex-row justify-between m-2">
                <p>© 2023 Liquid All rights reserved</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    
    
    </div>
  )
};

export default Footer;