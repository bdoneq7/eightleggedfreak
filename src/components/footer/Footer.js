import React from 'react';
import {Link} from 'react-router-dom';
import { FaSpider } from "react-icons/fa6";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FiMail, FiInstagram, FiFacebook, FiLinkedin} from 'react-icons/fi';
import { IoLogoYoutube } from "react-icons/io";
import './FooterStyles.css';

const Footer = () => {
    return  (
        <div className='footer'>

            <div className="container">

                <div className="top">

                    <div className="logo-footer">
                        <FaSpider className='icon' alt="8 Legged Freak" title="8 Legged Freak" />
                        <h2>8 Legged Freak, LLC based in Plant City, FL</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' alt="Scroll to Top" title="Scroll to Top" />
                    </Link>
                </div>

                <div className="col-container">

                    <div className="col">
                        <h3>Company</h3>
                        <p>About Brian</p>
                        <p>Portfolio</p>
                        <p>How It Works</p>
                        <p>Contact Brian</p>
                    </div>

                    <div className="col">
                        <h3>Services</h3>
                        <p>Web Development</p>
                        <p>Logo Design</p>
                        <p>Web Hosting</p>
                        <p>Web Maintenance</p>
                    </div>

                    <div className="col">
                        <h3>Clients</h3>
                        <p>Account Login</p>
                        <p>Referrals</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3>Menu</h3>
                        <p>Privacy Policy</p>
                        <p>Legal Policy</p>
                        <p>Sitemap</p>
                        <p>Link</p>
                    </div>

                    <form>
                        <h3>Call Brian Today 813.551.9096</h3>
                        
                        <input type="email" placeholder='Contact Brian to Start Now!' />
                        
                        <Link to='/contact'>
                        <FiMail className='mail-icon' alt="Click Here to Contact Brian" title="Click Here to Contact Brian" />
                        </Link>

                        <h3>Follow Us on Social Media </h3>
                        <div className="social-group">
                            <FiLinkedin className='social-icon' alt="Linkedin" title="Linkedin"/>
                            <FiFacebook className='social-icon' alt="Facebook" title="Facebook"/>
                            <FiInstagram className='social-icon' alt="Instagram" title="Instagram"/>
                            <IoLogoYoutube className='social-icon' alt="YouTube" title="YouTube"/>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Footer;