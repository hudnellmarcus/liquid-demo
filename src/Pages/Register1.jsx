import React from 'react';
import liquidLogo from '../Liquid-Label.png';
import progressBar from '../Assets/Member DJ Khaled/Progress_bar_1.png';
import { Link } from 'react-router-dom';

const Register1 = ()=> {

  return (
    <div className="flex h-auto flex-col items-center">
        <div className="mr-auto px-4">
            <img src={liquidLogo} alt="logo" /> 
        </div>
        <div className="flex flex-row w-2/3 justify-between space-x-4">
            <div className="flex space-x-4">
                <p className="text-sm">Step 1</p> 
                <p className="text-sm font-semibold">Add your personal details</p>
            </div>
            <div>
                <p className="mr-10 text-sm">Step 1/3</p>
            </div>
        </div>
            <div className="flex p-4">
                <img src={progressBar} alt=""/>
            </div>
        <div className="flex flex-col items-center mt-4">
            <div className="flex items-center flex-col">
                <h1 className="text-2xl font-semibold p-2">Add your personal information</h1>
                <p className="text-sm">To continue, please enter your name, email, and date of birth.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-4 gap-5 py-4 w-full">
                <span className="col-start-1 row-span-1">
                    <p className="font-semibold text-xl">First Name</p>
                    <input type="text" placeholder="Your first name" className="border-gray-300 border-2 py-2 px-6"/>
                </span>
                <span className="">
                    <p className="font-semibold text-lg">Last Name</p>
                    <input type="text" placeholder="Your last name" className="border-gray-300 border-2 py-2 px-12"/>
                </span>
                <span className="">
                    <p className="font-semibold text-lg">Phone Number</p>
                    <input type="text" placeholder="Your phone number" className="border-gray-300 border-2 py-2 px-12"/>
                </span>
                <span className="col-start-2">
                    <p className="font-semibold text-lg">Email</p>
                    <input type="text" placeholder="Your email" className="border-gray-300 border-2 py-2 px-12" />
                </span>
                <span className="col-start-1">
                    <p className="font-semibold text-lg">Date of Birth</p>
                    <input type="date" placeholder="Select date" className="border-gray-300 border-2 py-2 px-16"/>
                </span>
                <span className="col-start-1 row-span-4">
                    <p className="font-semibold text-lg">Password</p>
                    <input type="password" placeholder="Enter password" className="border-gray-300 border-2 py-2 px-12"/>
                </span>
                <span className="col-start-2 p-1">
                    <p className="font-semibold text-lg">Confirm Password</p>
                    <input type="password" placeholder="Re-enter password" className="border-gray-300 border-2 py-2 px-12"/>
                </span>
            <div className="flex items-center col-span-2 -mt-24">
                <div className="flex p-7">
                    <input type="checkbox" />
                    <p className="p-1 text-sm">I have read and agree to the</p> 
                    <span className="p-1 text-sm text-amber-400">Privacy Policy</span>
                    <p className="p-1 text-sm">and</p>
                    <span className="p-1 text-amber-400 text-sm">Terms of Service</span>
                </div>
            </div>
            </div>
            <div className="flex  mb-24 w-full justify-between">
                <button className="bg-white text-black font-bold border-slate-300 border-2 w-36 h-10 py-2 px-4 rounded-full">Previous</button>
                <Link to="/register/2">
                    <button className="bg-amber-400 text-black font-bold py-2 px-4 w-36 rounded-full justify-end">Continue</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register1