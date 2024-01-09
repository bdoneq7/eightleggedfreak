import React from 'react';
import { FaReact } from "react-icons/fa";
import './ServicesPackagesStyles.css';



const ServicesPackages = () => {
    return  (
        <div className='servicespackages'>
            <div className='container'>
                <div className='content'>
                    <h2><FaReact className='iconmain' /><span> Web Development</span> Packages</h2>
                    <p>
                    8LeggedFreak offers 4 Web Development Packages and 4 Website Hosting / Maintenance Plans.<br/>
                    <br/>
                    Web Development Packages require paying a 50% Deposit of the total package price before work can begin
                    on your website. After your website has been completed according to our agreed upon contract, then you
                    will pay the remaining 50% of the web development package cost.
                    <br/>
                    <br/>
                    Web Development Packages begin at $1,399<br/>
                    <br/>
                    Website Hosting and Post-Development Website Maintenance Plans begin at $99/month<br/>
                    </p>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default ServicesPackages;