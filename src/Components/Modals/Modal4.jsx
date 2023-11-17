import React from 'react';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';
import plaid from '../../Assets/Member DJ Khaled/Modals/plaid_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import login from '../../Assets/Member DJ Khaled/Modals/log_in.png';


const Modal4 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col m-6">
      <div className="flex flex-row justify-between items-start">
        <button onClick={onReturn}>
          <img src={backArrow} alt="back"/>
        </button>
        <img src={plaid} alt="logo"/>
        <img src={x} alt="x"/>
      </div>
        <div className="mt-24">
          <img src={login} alt="" />
        </div>
        <button 
        onClick={onContinue}
        className="bg-amber-400 rounded-full px-4 py-2 my-36 font-semibold">Continue to login</button>
    </div>
  )
}

export default Modal4;