import React from 'react';
import './HowItWorksStyles.css';
import { FcProcess } from "react-icons/fc";
import { LuStepForward } from "react-icons/lu";

const HowItWorks = () => {
    return  (
        <div className='howitworks'>
          <div className='container'>
            <div className='content'>
                <h2><FcProcess className='iconmain' /><span> How It Works</span> </h2>
                <p>
                8 Legged Freak is your one-stop shop for developing your new website and we are excited to be bring your vision
                to life! We will walk you through how our web development process works to ensure you know exactly what to expect.
                </p>
                <p>
                < LuStepForward className='iconmain' /> STEP 1: Fill Out Website Needs Evaluation Contact Form
                </p>
                <p>
                  STEP 2: Choose Web Development Package
                </p>
                <p>
                  STEP 3: Choose Web Hosting & Maintenance Package
                </p>
                <p>
                  STEP 4: In Person or Zoom Meeting with Brian to get to know each other. We will begin the
                  Discovery Phase to discuss all of the elements of the website project scope to define success, 
                  and work on goal identification. 
                </p>
                <p>
                  STEP 5: Sign Web Development, Hosting, and Maintenance Contract
                </p>
                <p>
                  STEP 6: Pay 50% Deposit of Chosen Web Development Package
                </p>
                <p>
                  STEP 7: Brian completes Web Development Stages. This includes 3 Phases.<br/>
                  A. Creative Phase: Brian creates a website concept, prototype, layout, and interface.<br/>
                  B. Development Phase: Time to start coding and build the actual website! Brian will give you
                  regular updates to make sure we stay in sync.
                  C. Pre-Launch Phase: Extended testing of all website features to make sure everything is working
                  perfectly and to make sure it's just right.
                </p>
                <p>
                  STEP 8: Pay remaining 50% cost of Chosen Web Development Package
                </p>
                <p>
                  STEP 9: Subscribe to Chosen Monthly Hosting and Maintenance Plan
                </p>
                <p>
                  STEP 10: Your Website will now become live on the Internet & your website files will be provided to you
                </p>
                <p>
                  STEP 11: Brian will update and maintain your website as needed per your Chosen Monthly Maintenance Plan. This
                  includes making routine tweaks and updates as necessary. 
                </p>
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default HowItWorks;