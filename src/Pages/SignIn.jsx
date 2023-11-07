import React from 'react'
import wtbGold from '../wtb-gold.jpg'; 
import Header from '../Components/Header';
import liquidLabel from '../Liquid-Label.png'
//import Header from '../Components/Header'

const SignInPage = () => {

  return (
    <div className="flex h-screen flex-row" >
        <div className="flex flex-1 flex-col justify-center p-3 sm:p-6">
            <div className="flex justify-start items-start mb-24">
                <img src={liquidLabel} alt="logo"/>
            </div>
            <div className='flex flex-1 flex-col h-80 -mt-10 m-6' >
                <div className="flex flex-col justify-start">
                    <h2 className='text-2xl font-bold text-black'>Login or Sign Up
                    </h2>
                </div>              
                <div className="flex flex-col justify-start py-5">
                    <h4 className="text-sm sm:text-md font-semibold text-black py-2">Phone Number, Email or Username</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        placeholder="Enter your phone number, email or username"
                    />
                    <h4 className="text-sm sm:text-md font-semibold text-black py-2">Password</h4>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-200 rounded-md"
                        placeholder="Enter your password"
                    />
                </div> 
                <div className="flex justify-end">
                    <p className="font-bold">
                        Forgot Password?
                    </p>
                </div>                            
                <div className="flex justify-center py-4">
                    <button
                        className="w-full h-14 m-4 py-2 px-4 bg-amber-400 text-black font-bold rounded-full"
                        type="submit"
                    >   
                        Login 
                    </button>
                </div>
                <div className="flex flex-row justify-center -mt-3">
                    <p className="p-1">Major Moves Only!</p> 
                    <p className="p-1 text-yellow-400 font-semibold">Sign Up</p>
                </div>
                <div className="flex flex-col justify-center mt-4 text-center">
                    <p>By signing up for a LIQUID account, this means you agree to LIQUID's{' '}
                    <span className="text-yellow-400 font-semibold">Privacy Policy</span> and{' '}
                    <span className="text-yellow-400 font-semibold">Terms of Service</span>
                    </p>
                </div>
            </div>

        </div>
        <div className="flex flex-1">
            <img src={wtbGold} alt="We the best" className="w-full h-full object-cover"/> 
        </div>
    </div>

  )
}

export default SignInPage