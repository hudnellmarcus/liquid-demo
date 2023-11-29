import React from 'react';
import boa from '../../Assets/Member DJ Khaled/Modals/boa_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal5 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col items-center border-4 rounded-md border-gray-100">
        <div className="flex flex-row items-center bg-red-400 h-auto w-auto">
            <div className="flex justify-center w-1/2">
                <img src={boa} alt="" className="" />
            </div>
        </div>
        <div className="flex flex-col my-2">
            <h3 className="text-4xl font-bold my-4">Sign in</h3>
            <div className="flex flex-col">
                <p className="p-1">Username</p>
                <input
                    placeholder="Username"
                    className="w-full border border-gray-400 px-2 py-2"
                />
                <p className="p-1">Password</p>
                <input
                    placeholder="Password"
                    className="w-full border border-gray-400 px-2 py-2"
                />
            </div>
            <button 
                onClick={onContinue}
                className="rounded-full bg-red-400 py-2 px-4 text-blue-600 text-lg font-bold my-6">Sign In</button>
        </div>
        <button 
            onClick={onReturn}
            className='place-self-start ml-4 mb-3'>
                <img src={backArrow} alt="" className="w-8"/>
        </button>
    </div>
  )
}

export default Modal5;