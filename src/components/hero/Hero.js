import React from 'react';
import { FaFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './HeroStyles.css';

const Hero = () => {
    return  (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    
                <h2><FaFileCode className='iconmain'/><span> Custom</span> Web Development</h2>
                  
                    <p>Brian Done builds quality custom websites to help you achieve your desired results and deliver
                        a professional responsive website! </p>
                    <div><button>Learn More <FaArrowRightLong className='iconbutton'/></button></div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
