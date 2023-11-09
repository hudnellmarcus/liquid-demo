import React from 'react';
import liquidLogo from '../Liquid-Label.png';
import ProgressBar from '../Components/ProgressBar';

const Register1 = ()=> {

  return (
    <div className="flex h-screen flex-col m-1 border-red-600 border-4">
        <div>
            <img src={liquidLogo} alt="logo" /> 
        </div>
        <div className="flex border-green-600 border-4">
            <span>
                <p>Step 1</p> 
                <p>Add you personal details</p>
                <p className="">Step 1/3</p>
            </span>
        </div>
        <div className="flex flex-col items-center border-blue-500 border-4">
            <div>
                <h1 className="text-3xl font-semibold p-2">Add your personal information</h1>
                <p>To continue, please enter your name, email, and date of birth.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 gap-5 py-4 w-1/2">
                <span className="col-start-1 row-span-1">
                    <p className="font-semibold text-xl">First Name</p>
                    <input type="text" placeholder="Your first name" className="border-gray-300 border-2 py-3 px-10"/>
                </span>
                <span className="">
                    <p className="font-semibold text-xl">Last Name</p>
                    <input type="text" placeholder="Your last name" className="border-gray-300 border-2 py-3 px-10"/>
                </span>
                <span className="">
                    <p className="font-semibold text-xl">Phone Number</p>
                    <input type="text" placeholder="Your phone number" className="border-gray-300 border-2 py-3 px-10"/>
                </span>
                <span className="col-start-2">
                    <p className="font-semibold text-xl">Email</p>
                    <input type="text" placeholder="Your email" className="border-gray-300 border-2 py-3 px-10" />
                </span>
                <span className="col-start-1">
                    <p className="font-semibold text-xl">Date of Birth</p>
                    <input type="date" placeholder="Select date" className="border-gray-300 border-2 py-3 px-10"/>
                </span>
                <span className="col-start-1 row-span-4">
                    <p className="font-semibold text-xl">Password</p>
                    <input type="password" placeholder="Enter password" className="border-gray-300 border-2 py-3 px-10"/>
                </span>
                <span className="col-start-2 p-1">
                    <p className="font-semibold text-xl">Confirm Password</p>
                    <input type="password" placeholder="Re-enter password" className="border-gray-300 border-2 py-3 px-6"/>
                </span>
                <div className="">
                    <button className="bg-white text-black font-bold border-slate-300 border-2 w-24 h-12 py-2 px-4 rounded-full">Previous</button>
                    <button className="bg-amber-400 text-white font-bold py-2 px-4 rounded-full">Continue</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register1