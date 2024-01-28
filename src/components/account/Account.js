import React from 'react';
import { FaFileCode } from "react-icons/fa";
import './AccountStyles.css';
import {UserAuth} from '../../context/AuthContext';

const Account = () => {

    const {user} = UserAuth();

    return  (
        <div className='account'>
            <div className='container'>
                <div className='content'>
                    
                <h2><FaFileCode className='iconmain'/><span> Welcome,</span> {user?.displayName}</h2>
                  
                    <p>
                    Account Page
                        </p>
                    
                    
                    <div>
                    
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account;
