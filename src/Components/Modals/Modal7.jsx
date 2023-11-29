import React from 'react';
import boa from '../../Assets/Member DJ Khaled/Modals/boa_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal7 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-200 rounded-md">
        <div className="flex flex-row items-center bg-red-400 w-auto">
            <div className="flex justify-center w-1/2">
                <img src={boa} alt="" className="h-auto" />
            </div>
        </div>
        <div className="flex flex-col my-6">
            <div className="my-2 p-2">
                <h3 className="text-3xl font-bold py-1">Verification</h3>
                <p>Enter the security code sent to *** *** 1111</p>
            </div>
            <div className="flex flex-col">
                <p className="p-1">Code</p>
                <input
                    placeholder="Code"
                    className="w-full border border-gray-400 px-2 py-2"
                />
            </div>
            <button 
            onClick={onContinue}
            className="rounded-full bg-red-400 py-2 px-4 text-blue-600 text-lg font-bold mt-8">Submit</button>
        </div>
        <button 
            onClick={onReturn}
            className='place-self-start ml-4 mb-3'>
                <img src={backArrow} alt="" className="w-8"/>
        </button>
    </div>
  )
};

export default Modal7;