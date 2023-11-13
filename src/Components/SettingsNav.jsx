import React from 'react';

import logo from '../Assets/Member DJ Khaled/just_logo.png';
import settings from '../Assets/Member DJ Khaled/ri_settings-3-fill.png';
import question from '../Assets/Member DJ Khaled/ri_question-fill.png';
import notification from '../Assets/Member DJ Khaled/ri_notification-2-fill.png';
import avatar from  '../Assets/Member DJ Khaled/avatar_khaled.png';


const SettingsNav = () => {
  return (
    <div className="flex flex-row bg-black justify-between">
        <div className="flex items-center ml-6 h-12">
            <img src={logo} alt="logo" />
            <div className="flex space-x-10 text-xl text-white">
                <p className="ml-20">Offers</p>
                <p>Redeemed Rewards</p>
            </div>
        </div>
        <div className="flex flex-row space-x-4 items-center mr-6">
            <div className="flex flex-row h-6 space-x-4">
                <img src={settings} alt="settings" />
                <img src={question} alt="question" />
                <img src={notification} alt="notification" />
            </div>
            <div>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    </div>
  )
}

export default SettingsNav