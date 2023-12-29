import React from 'react';
import './PortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";

const Portfolio = () => {
    return  (
        <div className='portfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='icon' /><span> Website</span> Portfolio</h2>
                <p>Creative Custom Web Sites that are designed to be Professional and Responsive using React and Modern CSS</p>
                <div>
                    <button>Explore</button>
                </div>
            </div>

          </div>

        </div>
    )
}

export default Portfolio;