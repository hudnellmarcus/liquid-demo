import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react';

import khaled from '../../Assets/Member DJ Khaled/khaled foot.png';

function Modal1(props) {
  return (
            <div className="flex flex-row">
                <img src={khaled} alt={khaled} />
                <div className="flex flex-col m-4">
                    <h3 className="text-2xl font-bold">Pssst, we leverage Plaid to monitor the credit and bank accounts you already use to reward you for the purchases you’re already making. You’re so close!</h3>
                    <button className="bg-amber-400 font-bold px-2 py-6 rounded-full">Continue</button>
                </div>
            </div>
    
  )
}

export default Modal1