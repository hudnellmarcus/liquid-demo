import React from 'react';
import { Link } from 'react-router-dom';

import main from '../../Assets/Member DJ Khaled/Modals/modal_10.png';
import info from '../../Assets/Member DJ Khaled/Modals/bank_info.png';
import plaid from '../../Assets/Member DJ Khaled/Modals/plaid_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal10 = ({ onContinue, onReturn}) => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row justify-between p-2 items-start mb-4">
            <button onClick={onReturn}>
                <img src={backArrow} alt="back"/>
            </button>
            <img src={plaid} alt="logo"/>
            <img src={x} alt="x"/>
        </div>
        <div className="flex flex-col">
            <img src={main} alt="" className="h-1/2"/>
            <img src={info} alt="" className="-mt-36"/>
        </div>
        <div className="flex flex-col items-center">
            <Link to="/homepage">
                <button className="bg-amber-400 rounded-full px-6 py-3 mt-24 text-xl font-bold">Continue</button>
            </Link>
        </div>
        <p className="place-self-center mt-8 text-xl text-amber-400 font-bold">Learn More</p>
    </div>
  )
}

export default Modal10;