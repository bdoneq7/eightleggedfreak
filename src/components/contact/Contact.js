import React from 'react';
import './ContactStyles.css';

const Contact = () => {
    return  (
        <div className='contact'>
            <div className='container'>
                <div className='form-container'>

                <form name="contactform" method="POST" data-netlify="true">
                        
                        <h2><span>Contact</span> Brian</h2>
                        
                        <div>
                            <label>Full Name</label>
                            <input type="text" placeholder='Enter Your Full Name' />
                        </div>
                       
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter Your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter Your Message' />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact;