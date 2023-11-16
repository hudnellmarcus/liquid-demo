import React from 'react';
import screen2 from '../../Assets/Member DJ Khaled/Modals/modal2_screen.png';

const Modal2 = () => {
  return (
    <div className="flex flex-col items-center">
        <img src={screen2} alt="plaid" className="w-64 h-auto"/>
        <button  className="bg-amber-400 font-bold px-2 py-2 rounded-full w-32">Continue</button>
    </div>
  )
}

export default Modal2