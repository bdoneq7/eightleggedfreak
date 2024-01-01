import React from 'react';
import './ContactStyles.css';

const Contact = () => {
    return  (
        <div className='contact'>
            <div className='container'>
                <div className='form-container'>

                    <form name="contact" method="POST" data-netlify="true">

                    <h2><span>Contact</span> Brian</h2>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
                </div>
            </div>

        </div>
    )
}

export default Contact;