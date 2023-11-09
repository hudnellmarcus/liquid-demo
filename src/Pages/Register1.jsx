import React from 'react';
import liquidLogo from '../Liquid-Label.png';
import ProgressBar from '../Components/ProgressBar';

const Register1 = ()=> {

  return (
    <div className="flex h-screen flex-col m-1 items-center">
        <div className="mr-auto px-4">
            <img src={liquidLogo} alt="logo" /> 
        </div>
        <div className="flex flex-row w-2/3 justify-between space-x-4">
            <div className="flex space-x-4">
                <p className="">Step 1</p> 
                <p>Add your personal details</p>
            </div>
            <div>
                <p className="mr-10">Step 1/3</p>
            </div>
        </div>
        <div className="flex flex-col items-center mt-10">
            <div>
                <h1 className="text-3xl font-semibold p-2">Add your personal information</h1>
                <p>To continue, please enter your name, email, and date of birth.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 gap-5 py-4 w-full">
                <span className="col-start-1 row-span-1">
                    <p className="font-semibold text-xl">First Name</p>
                    <input type="text" placeholder="Your first name" className="border-gray-300 border-2 py-3 px-12"/>
                </span>
                <span className="">
                    <p className="font-semibold text-xl">Last Name</p>
                    <input type="text" placeholder="Your last name" className="border-gray-300 border-2 py-3 px-12"/>
                </span>
                <span className="">
                    <p className="font-semibold text-xl">Phone Number</p>
                    <input type="text" placeholder="Your phone number" className="border-gray-300 border-2 py-3 px-12"/>
                </span>
                <span className="col-start-2">
                    <p className="font-semibold text-xl">Email</p>
                    <input type="text" placeholder="Your email" className="border-gray-300 border-2 py-3 px-12" />
                </span>
                <span className="col-start-1">
                    <p className="font-semibold text-xl">Date of Birth</p>
                    <input type="date" placeholder="Select date" className="border-gray-300 border-2 py-3 px-16"/>
                </span>
                <span className="col-start-1 row-span-4">
                    <p className="font-semibold text-xl">Password</p>
                    <input type="password" placeholder="Enter password" className="border-gray-300 border-2 py-3 px-12"/>
                </span>
                <span className="col-start-2 p-1">
                    <p className="font-semibold text-xl">Confirm Password</p>
                    <input type="password" placeholder="Re-enter password" className="border-gray-300 border-2 py-3 px-12"/>
                </span>
            <div className="flex items-center col-span-2 -mt-20">
                <div className="flex p-7">
                    <input type="checkbox" />
                    <p className="p-1">I have read and agree to the</p> 
                    <span className="p-1">Privacy Policy</span>
                    <p className="p-1">and</p>
                    <span className="p-1">Terms of Service</span>
                </div>
            </div>
            </div>
            <div className="flex -mt-5 w-full justify-between">
                <button className="bg-white text-black font-bold border-slate-300 border-2 w-48 h-12 py-2 px-4 rounded-full">Previous</button>
                <button className="bg-amber-400 text-black font-bold py-2 px-4 w-48 rounded-full justify-end">Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Register1