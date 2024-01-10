import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import { FaSpider } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
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
                        <h2>8 Legged Freak, LLC &copy; Copyright 2024. All Rights Reserved.</h2>
                     
                    </div>
                    <ScrollLink activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' alt="Scroll to Top" title="Scroll to Top" />
                    </ScrollLink>
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
                        <p>Pre-Order FAQ</p>
                        <p>Create Account</p>
                        <p>Account Login</p>
                        <p>Referrals</p>
                    </div>

                    <div className="col">
                        <h3>General</h3>
                        <p>Privacy Policy</p>
                        <p>Legal Policy</p>
                        <p>Sitemap</p>
                        <p>Resources</p>
                    </div>

                    <form>
                        <h3>Call Brian Today 813.551.9096</h3>
                        <h4><FaLocationDot className='icon' alt="8 Legged Freak" title="8 Legged Freak" /> Located in Plant City, FL</h4>
                        <br/>
                        
                        <input type="email" placeholder='Email Brian to Begin Your Website Consult' />
                        
                        <RouterLink to='/contact'>
                        <FiMail className='mail-icon' alt="Click Here to Contact Brian" title="Click Here to Contact Brian" />
                        </RouterLink>

                        <h4>Follow 8LeggedFreak on Social Media </h4>
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