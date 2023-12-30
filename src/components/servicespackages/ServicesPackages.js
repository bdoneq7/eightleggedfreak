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
                    We offer 3 packages that include Website Development, Logo Design, Website Hosting, and Website Maintenance.<br/>
                    <br/>
                    Basic Package Includes:<br/>
                    <br/>
                    Custom Website Development: $1,000<br/>
                    Logo Design: $399<br/>
                    Website Hosting starts at $50/month<br/>
                    Website Maintenance starts at $50/month<br/>
                    </p>
                    
                </div>
            </div>

        </div>
    )
}

export default ServicesPackages;