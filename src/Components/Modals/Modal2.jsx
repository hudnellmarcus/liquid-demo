import React from 'react';
import screen2 from '../../Assets/Member DJ Khaled/Modals/modal2_screen.png';
import x from '../../Assets/Member DJ Khaled/Modals/x.png';
import backArrow from '../../Assets/Member DJ Khaled/Modals/left_arrow.png';

const Modal2 = ({ onContinue, onReturn }) => {
  return (
      <div className="flex flex-col items-center">
          <button onClick={onReturn}>
                <img src={backArrow} alt="back" className="justify-start"/>
            </button>
          <img src={screen2} alt="plaid" className=""/>
          <button  
          onClick={onContinue}
          className="bg-amber-400 font-bold px-2 py-2 rounded-full w-32">Continue</button>
      </div>
  )
}

export default Modal2;