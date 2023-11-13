import React, { useState } from 'react';
import SettingsNav from '../Components/SettingsNav';

import settingsLinear from '../Assets/Member DJ Khaled/Account Settings Linear.png';
import settingsFill from '../Assets/Member DJ Khaled/Account Settings Fill.png';
import preferencesLinear from '../Assets/Member DJ Khaled/Offer Preferences Linear.png';
import preferencesFill from '../Assets/Member DJ Khaled/Offer Preferences Fill.png';
import premiumFill from '../Assets/Member DJ Khaled/Upgrade To Premium Fill.png';
import premiumLinear from '../Assets/Member DJ Khaled/Upgrade To Premium Linear.png';
import offerPreferences from '../Assets/Member DJ Khaled/offer_preferences_ss.png';
import pricing from '../Assets/Member DJ Khaled/Pricing Lists.png';

const AccountSettings = () => {
    const [ activatedTab, setActivatedTab ] = useState('settings');

    const handleTabClick = (buttonType) => {
        setActivatedTab(buttonType)
    };
  
    return (
        <div className="flex h-screen flex-col">
            <SettingsNav />
             <div className="m-8 mt-12">
                 <h1 className="text-5xl font-semibold">Settings & Preferences</h1>
             </div>
             <div className="flex flex-row mt-12 h-auto m-8">
                    <div className="flex flex-col items-start w-1/3">

                            <button 
                             onClick={() => handleTabClick('settings')}
                             className="border-gray-300 border-2 w-full h-32 flex flex-row">
                                 <img 
                                     src={ activatedTab === 'settings' ? settingsFill : settingsLinear} 
                                     alt={activatedTab === 'settings' ? 'settings fill' : 'settings linear'}
                                     className="h-10 my-5 mx-4"/>
                                     <div className="flex flex-col my-auto mx-6 items-start">
                                         <h5 className="font-bold text-2xl">Account Settings</h5>
                                         <p className="py-2 text-xl">Provide personal details</p>
                                     </div>
                            </button>


                        <button 
                         onClick={() => handleTabClick('preferences')}
                         className="border-gray-300 border-2 w-full h-32 flex flex-row">
                             <img 
                                 src={activatedTab === 'preferences' ? preferencesFill : preferencesLinear} 
                                 alt={activatedTab === 'preferences' ? 'preferences fill' : 'preferences linear'} 
                                 className="h-10 my-5 mx-4"/>
                             <div  className="flex flex-col my-auto mx-6 items-start">
                                 <h5 className="font-bold text-2xl">Offer Preferences</h5>
                                 <p className="py-2 text-xl">Choose offer preferences</p>
                             </div>
                        </button>

                        <button 
                         onClick={() => handleTabClick('upgrade')}
                         className="border-gray-300 border-2 w-full h-32 flex flex-row">
                             <img 
                                  src={activatedTab === 'upgrade' ? premiumFill : premiumLinear}
                                  alt={activatedTab === 'upgrade' ? 'premium fill' :  'premium linear'} 
                               className="h-10 my-5 mx-4"/>
                                 <div  className="flex flex-col my-auto mx-6 items-start">
                                     <h5 className="font-bold text-2xl">Upgrade to premium</h5>
                                     <p className="py-2 text-xl mr-10">Upgrade your account to premium</p>
                                 </div>
                        </button>
                    </div>
                    { activatedTab === 'settings' && 
                        <div className="flex flex-col h-full w-2/3 my-14">
                            <div className="justify-start">
                                <h1 className="text-3xl font-bold p-2">Your Account</h1>
                            </div>
                            <div className="grid grid-cols-2 grid-rows-4 gap-5 py-4 w-full ml-4">
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
                        </div>
                </div>
                    }
                    {
                      activatedTab === 'preferences' &&
                          <div className="ml-10">
                              <img src={offerPreferences} alt="preferences"/>
                          </div>
                  } 
                    {
                      activatedTab === 'upgrade' &&
                        <div className="flex flex-col p-4">
                          <div>
                              <h5 className="font-bold text-3xl">Upgrade Membership</h5>
                          </div>
                          <div>
                              <img src={pricing} alt='pricing'/>
                          </div>
                        </div>
                    }
        </div>
            <div className="flex space-x-8 justify-end mr-10 mt-16">
                <button className="border-gray-300 font-bold border-2 py-4 px-12 rounded-full">Cancel</button>
                <button className="border-gray-300 bg-amber-400 font-bold border-2 py-3 px-12 rounded-full">Save</button>
            </div>
    </div>
  )
}

export default AccountSettings