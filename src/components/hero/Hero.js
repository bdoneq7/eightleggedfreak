import React from 'react';
import { MdOutlineMonitor } from "react-icons/md";
import './HeroStyles.css';

const Hero = () => {
    return  (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    
                <h2><MdOutlineMonitor className='icon' /><span> Custom</span> Websites</h2>
                  
                    <p>Brian Done builds quality custom websites to help you achieve your desired results and deliver
                        a professional responsive website! </p>
                    <div><button>Learn More</button></div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
