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
                    We offer 4 Web Development Packages, 4 Website Hosting Plans, and 4 Website Maintenance Plans:<br/>
                    <br/>
                    Our Basic Web Development Package starts at $1,399<br/>
                    <br/>
                    Our Basic Website Hosting Plan starts at $50/month<br/>
                    <br/>
                    Our Basic Website Maintenance Plan starts at $50/month<br/>
                    </p>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default ServicesPackages;