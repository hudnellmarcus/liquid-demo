import React from 'react';
import Modal1 from './Modal1';
import Modal2 from './Modal2';

const Modals = (props) => {
  return (
    <div className="flex flex-col">
        <Modal1 {...props}/>
        <Modal2 {...props}/>
    </div>
  )
  
}

export default Modals