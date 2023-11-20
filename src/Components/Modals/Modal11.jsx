import React from 'react';

import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';
import plaid from '../../Assets/Member DJ Khaled/Modals/plaid_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import woman from '../../Assets/Member DJ Khaled/Modals/clipboard_woman.png';
import { Link } from 'react-router-dom';

const Modal11 = ({ onReturn }) => {
  return (
    <div className="flex flex-col m-6 w-3/5 mx-auto">
        <div className="flex flex-row justify-between p-2 items-start">
            <button onClick={onReturn}>
                <img src={backArrow} alt="back"/>
            </button>
            <img src={plaid} alt="logo"/>
            <img src={x} alt="x"/>
        </div>
        <div className="flex flex-col items-center">
            <img src={woman} alt="woman" className="w-72 h-auto"/>
            <h3 className="text-3xl font-bold">Your account has been successfully linked to LIQUID</h3>
        </div>
        <div className='flex flex-col items-center'>
            <Link to="/homepage" className="">
                <button className="bg-amber-400 py-3 px-4 text-2xl font-bold rounded-full mt-24 justify-center">Continue</button>
            </Link>
        </div>
    </div>
  )
}

export default Modal11;