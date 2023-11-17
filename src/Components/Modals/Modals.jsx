import React, { useState } from 'react';


import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';
import Modal7 from './Modal7';
import Modal8 from './Modal8';
import Modal9 from './Modal9';
import Modal10 from './Modal10';


const Modals = ({ close }) => {
    const [currentModal, setCurrentModal] = useState(1);

    const nextModal = () => {
      if(currentModal < 10) {
        setCurrentModal(currentModal + 1);
      }
    };
  
    const prevModal = () => {
      if (currentModal > 1) {
        setCurrentModal(currentModal - 1);
      }
    };

    const handleContinue = () => {
      nextModal();
    };

    const handleReturn = () => {
      prevModal();
    };

  return (
   
    
    <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>
        <div className='bg-white p-10 max-w-[800px] rounded-md shadow-md'>
          {currentModal === 1 && <Modal1  onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 2 && <Modal2 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 3 && <Modal3 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 4 && <Modal4 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 5 && <Modal5 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 6 && <Modal6 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 7 && <Modal7 onContinue= {handleContinue} onReturn={handleReturn} />}
          {currentModal === 8 && <Modal8 onContinue= {handleContinue} onReturn={handleReturn} /> }
          {currentModal === 9 && <Modal9 onContinue= {handleContinue} onReturn={handleReturn} /> }
          {currentModal === 10 && <Modal10 onContinue= {handleContinue} onReturn={handleReturn} /> }
        </div>
    </div>
  
  )
  
};

export default Modals;
{/*}  <div className="flex flex-col w-2/3 items-center">
</div> */}