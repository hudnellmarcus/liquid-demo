import React from 'react'
import liquidLogo from '../Liquid-Label.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex flex-row w-fit items-center space-x-10 ml-20 mt-5">
        <img src={liquidLogo} alt="logo" /> 
          <div className="flex space-x-10 text-2xl">
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
    </div>
    
  )
}

export default NavBar;