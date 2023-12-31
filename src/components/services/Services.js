import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import './ServicesStyles.css';
import {Link} from 'react-router-dom';

const Services = () => {
    return  (
        <div className='services'>
            <div className='container'>
                <div className='content'>
                    <h2><FaReact className='iconmain' /><span> Web Development</span> Services</h2>
                    <p>
                    We offer 4 Web Development Packages, 4 Website Hosting Plans, and 4 Website Maintenance Plans:<br/>
                    <br/>
                    Our Basic Web Development Package starts at $1,399<br/>
                    <br/>
                    Our Basic Website Hosting Plan starts at $50/month<br/>
                    <br/>
                    Our Basic Website Maintenance Plan starts at $50/month<br/>
                    </p>
                    <div>
                        <button>
                        <Link to='/services'>
                            Learn More <FaArrowRightLong className='iconbutton' />
                        </Link>    
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services;