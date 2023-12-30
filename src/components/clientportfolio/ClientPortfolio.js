import React from 'react';
import './ClientPortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";

const ClientPortfolio = () => {
    return  (
        <div className='clientportfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='iconmain' /><span> Website</span> Portfolio</h2>
                <p>Cards of Client Websites
                </p>
                
            </div>

          </div>

        </div>
    )
}

export default ClientPortfolio;