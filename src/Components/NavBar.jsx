import React from 'react'
import liquidLogo from '../Liquid-Label.png';
import { Link } from 'react-router-dom';
import settings from '../Assets/Member DJ Khaled/Settings_Button.png';

const NavBar = () => {
  return (
    <div className="flex flex-row w-full items-center space-x-10 bg-amber-400">
        <img src={liquidLogo} alt="logo" className="ml-14 mt-2"/> 
          <div className="flex space-x-10 text-lg mt-2">
            <Link to="/offers">
              <p className="ml-20">Offers</p>
            </Link>
            <Link to="/rewards">
              <p>Redeemed Rewards</p>
            </Link>
            <Link to="/perks">
              <p>DJ Khaled Perks</p>
            </Link>
          </div>
          <div className="flex m">
            <Link to="/settings">
              <img src={settings} alt="" className="h-10 mt-2"/>
            </Link>
          </div>
    </div>
    
  )
}

export default NavBar;