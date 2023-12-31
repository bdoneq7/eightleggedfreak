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
                    We offer 4 packages that include Website Development, Logo Design, Website Hosting, and Website Maintenance.<br/>
                    </p>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default ServicesPackages;