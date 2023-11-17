import React from 'react';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';
import plaid from '../../Assets/Member DJ Khaled/Modals/plaid_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import boa from '../../Assets/Member DJ Khaled/Modals/boa.png';
import wf from '../../Assets/Member DJ Khaled/Modals/wf.png';
import citi from '../../Assets/Member DJ Khaled/Modals/citi.png';
import chase from '../../Assets/Member DJ Khaled/Modals/chase.png';
import usBank from '../../Assets/Member DJ Khaled/Modals/us_bank.png';
import capOne from '../../Assets/Member DJ Khaled/Modals/cap1.png';



const Modal3 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col m-6">
        <div className="flex flex-row justify-between p-2 items-start">
            <button onClick={onReturn}>
                <img src={backArrow} alt="back"/>
            </button>
            <img src={plaid} alt="logo"/>
            <img src={x} alt="x"/>
        </div>
            <div className="text-3xl text-black font-bold my-6">
                Select your institution
            </div>
            <input
                type="text"
                placeholder="Search Institution"
                className="px-2 py-2 m-2 border border-blue-900"
            />    
        <div className="flex flex-col">
            <div  className="flex flex-row">
                <img src={wf} alt="" className="p-2"/>
                <img src={chase} alt="" className="p-2"/>
            </div>
            <div  className="flex flex-row">
                <button  onClick={onContinue}>
                    <img src={boa} alt="" className="p-2"/>
                </button>
                <img src={citi} alt=""className="p-2"/>
            </div>
            <div className="flex flex-row">
                <img src={usBank} alt="" className="p-2"/>
                <img src={capOne} alt="" className="p-2"/>
            </div>
        </div>
    </div>
  )
}

export default Modal3;