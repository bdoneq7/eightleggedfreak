import React from 'react';
import { FaFileCode } from "react-icons/fa";
import './AccountStyles.css';

const Account = () => {
    return  (
        <div className='account'>
            <div className='container'>
                <div className='content'>
                    
                <h2><FaFileCode className='iconmain'/><span> Welcome,</span> Customer</h2>
                  
                    <p>
                    Account Page
                        </p>
                    
                    <button className="button">Logout</button>
                    <div>
                    
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account;
