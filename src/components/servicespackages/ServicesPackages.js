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
                    </p>
                    <p>
                    <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
                    <stripe-pricing-table pricing-table-id="prctbl_1OT5OfLCcJ68aY6LoDu4Nd8w"
                    publishable-key="pk_live_51IqURFLCcJ68aY6LPWagifSMjKqmp0Rld1FZQhfSH7NXfJCIWmQNNIWfCIpVAV9FzHm8h9GruOakwuPBXN2N7TfE00Ow8I0ras">
                    </stripe-pricing-table>
                    </p>
                    
                </div>
            </div>

        </div>
    )
}

export default ServicesPackages;