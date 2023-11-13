import React from 'react'
import khaled_crop from '../Assets/Member DJ Khaled/DJK1 1.png';
import khaled_crop2 from '../Assets/Member DJ Khaled/Khaled_foot.png';
import engagement from '../Assets/Member DJ Khaled/engagement (1) 1.png';
import box from '../Assets/Member DJ Khaled/box_pink.png';
import ProgressBar from './ProgressBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const CarouselCard1 = () => {
    return (
        <div className="flex flex-col mt-3 border-gray-400 border-8 rounded-xl min-height-300">
            <div className="flex flex-row">
                <div className="bg-amber-400">
                    <img src={khaled_crop} alt="khaled" />
                </div>
                <div className="flex flex-col bg-gray-300 h-full w-full">
                    <h1 className="text-2xl font-bold text-amber-400 m-5">ENGAGEMENT/COMMUNICATION PERK</h1>
                    <p className="text-xl ml-5 mr-5">Spend $100 with brand partners on your first day as a 
                    <br />
                    member and get a text from me!</p>
                    <div className="flex flex-row justify-between m-5">
                        <button className="bg-amber-400 text-black font-semibold rounded-full px-8 py-2">Next</button>
                        <img src={engagement} alt="engagement" className="border-black border-2 rounded-full h-15" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start rounded-xl h-24 bg-slate-300 m-5">
                <h3 className="text-xl font-semibold ml-5 mt-2">Perk progress 32%</h3>
                <ProgressBar progressPercentage={32}/>
            </div>
        </div>
    )
}

const CarouselCard2 = () => {
    return (
        <div className="flex flex-col mt-3 border-gray-400 border-8 rounded-xl">
            <div className="flex flex-row w-full">
                <div className="bg-amber-400">
                    <img src={khaled_crop2} alt="khaled2" />
                </div>
                <div className="flex flex-col bg-pink-100 h-full w-full">
                    <h1 className="text-2xl font-bold text-amber-400 m-5">GIVEAWAYS PERK</h1>
                    <p className="text-xl ml-5 mr-5">As a paid member you get a free Member T-shirt sent to
                    <br />
                    you upon sign up!</p>
                    <div className="flex flex-row justify-between m-5">
                     <button className="bg-amber-400 text-black font-semibold rounded-full px-6 py-3 w-32 h-12 mt-3">Next</button>
                        <img src={box} alt="engagement" className="border-black border-2 rounded-full h-15" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start rounded-xl h-24 bg-slate-300 m-5">
                <h3 className="text-xl font-semibold ml-5 mt-2">Perk progress 24%</h3>
                <ProgressBar progressPercentage={24}/>
            </div>
        </div>
    )
}



const PerkCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (    
    <div>
        <Slider {...settings}>
            <CarouselCard1 />
            <CarouselCard2 />
        </Slider>
    </div>
  
  )
}

export default PerkCarousel; 