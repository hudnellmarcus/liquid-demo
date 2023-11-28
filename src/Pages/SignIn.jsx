import React from 'react'
import wtbGold from '../wtb-gold.jpg'; 
import liquidLabel from '../Liquid-Label.png'
import { Link } from 'react-router-dom';
//import Header from '../Components/Header'

const SignInPage = () => {

  return (
    <div className="flex h-screen flex-row" >
        <div className="flex flex-1 flex-col justify-center p-3 sm:p-6">
            <div className="flex justify-start items-start mb-24 ml-10">
                <img src={liquidLabel} alt="logo"/>
            </div>
            <div className='flex flex-1 flex-col h-80 -mt-10  m-6 w-2/3' >
                <div className="flex flex-col justify-start ml-6">
                    <h2 className='text-2xl font-bold text-black'>Login or Sign Up
                    </h2>
                </div>              
                <div className="flex flex-col justify-start py-5 ml-6">
                    <h4 className="text-sm sm:text-md font-semibold text-black py-2">Phone Number, Email or Username</h4>
                    <input
                        type="text"
                        className="w-auto p-2 border border-gray-200 rounded-md text-sm"
                        placeholder="Enter your phone number, email or username"
                    />
                    <h4 className="text-sm sm:text-md font-semibold text-black py-2">Password</h4>
                    <input
                        type="text"
                        className="w-auto p-2 text-sm border border-gray-200 rounded-md"
                        placeholder="Enter your password"
                    />
                </div> 
                <div className="flex justify-end -mt-6">
                    <p className="font-bold">
                        Forgot Password?
                    </p>
                </div>                            
                <div className="flex justify-center py-4">
                    <Link to="/homepage">
                        <button
                            className="w-80 h-12 py-2 px-4 bg-amber-400 text-black font-bold rounded-full"
                            type="submit"
                    >   
                                Login 
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row justify-center">
                    <p className="p-1 text-sm">Major Moves Only!</p> 
                    <Link to="/register/1">
                    <p className="p-1 text-yellow-400 font-semibold">Sign Up</p>
                    </Link>
                </div>
                <div className="flex flex-col justify-center text-center mt-2">
                    <p className='text-sm'>By signing up for a LIQUID account, this means you agree to LIQUID's{' '}
                    <span className="text-yellow-400 font-semibold">Privacy Policy</span> and{' '}
                    <span className="text-yellow-400 font-semibold">Terms of Service</span>
                    </p>
                </div>
            </div>

        </div>
        <div className="flex flex-1 w-auto h-auto">
            <img src={wtbGold} alt="We the best" className="w-full h-full object-cover"/> 
        </div>
    </div>

  )
}

export default SignInPage