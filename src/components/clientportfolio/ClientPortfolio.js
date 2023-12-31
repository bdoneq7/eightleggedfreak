import React from 'react';
import './ClientPortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";

const ClientPortfolio = () => {
    return  (
        <div className='clientportfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='iconmain' /><span> Website</span> Portfolio</h2>
                <p>Nova Ash Artistry Card
                </p>

                <p>Joey Joey Imagination Station Card
                </p>

                <p>Exo Solaria Union Card
                </p>

                <p>Gods of Aumin Card
                </p>

                <p>What's Out There
                </p>
                
            </div>

          </div>

        </div>
    )
}

export default ClientPortfolio;