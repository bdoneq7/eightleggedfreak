import React from 'react';
import { FaReact } from "react-icons/fa";
import './ServicesStyles.css';

const Services = () => {
    return  (
        <div className='services'>
            <div className='container'>
                <div className='content'>
                    <h2><FaReact className='icon' /><span> Web Development</span> Services</h2>
                    <p>
                    We offer packages that include Website Development, Logo Design, Website Hosting, and Website Maintenance.<br/>
                    <br/>
                    Custom Website Development starts at $1,000<br/>
                    Logo Design starts at $399<br/>
                    Website Hosting starts at $50/month<br/>
                    Website Maintenance starts at $50/month<br/>
                    </p>
                    <div><button>Learn More</button></div>
                </div>
            </div>

        </div>
    )
}

export default Services;