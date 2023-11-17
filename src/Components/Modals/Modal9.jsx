import React from 'react';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal9 = ({onContinue, onReturn}) =>  {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row space-x-12">
            <div className="text-xl">Plaid Checking</div>
            <div>*** *** 0000</div>
        </div>
        <div className="py-4">
            <h3 className="text-xl font-semibold py-1">Statements</h3>
            <p className="text-lg">All of your checking, savings, mortgage, home equity, lines of credit, and credit card statements will be shared with the authorized third party as they become available online</p>
        </div>
        <div className="py-1">
            <h3 className="text-xl font-semibold py-1">Profile Information</h3>
            <p className="text-lg">Account ownership, name, primary address, email, and phone number will be shared with the authorized third party.</p>
        </div>
        <div className="py-4">
            <h3 className="text-xl font-semibold">Terms and Conditions</h3>
            <div className="flex flex-row space-x-3">
                <input type="checkbox" />
                <p className="text-lg">I have read and accept the Terms and Conditions</p>
            </div>
        </div>
        <button  
        onClick={onContinue}
        className="rounded-full bg-red-400 py-3 px-4 text-blue-600 text-lg font-bold mt-8">Connect account information</button>
        <button 
            onClick={onReturn}
            className='place-self-start ml-2 mt-4'>
                <img src={backArrow} alt="" className="w-8"/>
        </button>
    </div>
  )
}

export default Modal9;