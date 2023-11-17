import React from 'react';
import boa from '../../Assets/Member DJ Khaled/Modals/boa_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal6 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-400">
        <div className="flex flex-row items-center bg-red-400 h-36 w-auto">
            <div className="flex justify-center w-full">
                <img src={boa} alt="" className="h-auto" />
            </div>
        </div>
        <div className="flex flex-col my-12">
            <div className="my-2 p-2">
                <h3 className="text-3xl font-bold py-1">Verify your identity</h3>
                <p>How should we get in touch?</p>
            </div>
            <div className="flex flex-col">
                <p className="p-1">Tell us how</p>
                <input
                    placeholder="Mobile"
                    className="w-full border border-gray-400 px-2 py-2"
                />
            </div>
            <button 
            onClick={onContinue}
            className="rounded-full bg-red-400 py-2 px-4 text-blue-600 text-lg font-bold mt-8">Get code</button>
        </div>
        <button 
            onClick={onReturn}
            className='place-self-start ml-4 mb-3'>
                <img src={backArrow} alt="" className="w-8"/>
        </button>
    </div>
  );
};

export default Modal6;