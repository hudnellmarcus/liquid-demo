import React from 'react';
import logo from '../Assets/Member DJ Khaled/logo_white.png';

const Footer = () => {
  return (
    <div className="flex flex-row w-auto bg-black text-white">
        <div className="flex flex-col w-full m-4">
            <img src={logo} alt="logo" className="flex object-contain h-auto w-24"/>
           
                <hr className='h-2 text-white m-2 w-full'/>
           
            <div className="flex flex-row justify-between m-2 text-sm">
                <p>© 2023 Liquid All rights reserved</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
};

export default Footer;