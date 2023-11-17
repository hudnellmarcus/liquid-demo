import React from 'react';
import boa from '../../Assets/Member DJ Khaled/Modals/boa_logo.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal8 = ({ onContinue, onReturn }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-400">
        <div className="flex flex-row items-center bg-red-400 h-36 w-auto">
            <div className="flex justify-center w-full">
                <img src={boa} alt="" className="h-auto" />
            </div>
        </div>
        <div className="flex flex-col my-12">
            <div className="my-2 p-2">
                <h3 className="text-2xl font-bold py-1">Connect account information</h3>
                <p>Select the accounts you want Bank of America to connect with Plaid. Please note that not all account information may be avilable for connecting at this time.</p>
            </div>
            <div className="flex flex-col mt-6">
                <p className="p-1 text-xl">Select account(s) to share</p>
                <button 
                    onClick={onContinue}
                    className="w-full border border-gray-400 hover:bg-red-300 px-2 py-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row space-x-2">
                            <input type="checkbox" />
                            <p className="text-lg font-semibold">Plaid Checking</p>
                        </div>
                        <div className="flex items-start">
                            <p className="py-2 mx-4">*** *** 0000</p>
                        </div>
                    </div>
                </button>
                <button 
                    onClick={onContinue}
                    className="w-full border border-gray-400 hover:bg-red-300 px-2 py-2 mt-2">
                    <div className="flex flex-col">
                        <div className="flex flex-row space-x-2">
                            <input type="checkbox" />
                            <p className="text-lg font-semibold">Plaid Savings</p>
                        </div>
                        <div className="flex items-start">
                            <p className="py-2 mx-4">*** *** 1111</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <button 
            onClick={onReturn}
            className='place-self-start ml-4 mb-3'>
                <img src={backArrow} alt="" className="w-8"/>
        </button>
    </div>
  )
};

export default Modal8