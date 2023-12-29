import React from 'react';
import './ServicesStyles.css';

const Services = () => {
    return  (
        <div className='cloud'>
            <div className='container'>
                <div className='content'>
                    <h2><span>Web Development</span> Services</h2>
                    <p>We offer packages that include Website Development, Logo Design, Website Hosting, and Website Maintenance. </p>
                    <p>Custom Website Development starts at $1,000</p>
                    <p>Logo Design starts at $399</p>
                    <p>Website Hosting starts at $50/month</p>
                    <p>Website Maintenance starts at $50/month</p>
                    <div><button>Learn More</button></div>
                </div>
            </div>

        </div>
    )
}

export default Services;