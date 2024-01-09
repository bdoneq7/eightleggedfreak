import React from 'react';
import './ClientPortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";
import NovaAshArtistry from "../../assets/novaashartistry.png";

const ClientPortfolio = () => {
    return  (
        <div className='clientportfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='iconmain' /><span> Website</span> Portfolio</h2>
                <p>Nova Ash Artistry<br/>
                <img src={NovaAshArtistry} style={{ width: "100%", height: "100%" }} alt="Nova Ash Artistry" title="Nova Ash Artistry" />
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