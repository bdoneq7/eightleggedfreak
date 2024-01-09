import React from 'react';
import { FaSpider } from "react-icons/fa6";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FiMail, FiInstagram, FiFacebook, FiLinkedin} from 'react-icons/fi';
import { IoLogoYoutube } from "react-icons/io";
import './FooterStyles.css';

import {Link} from 'react-scroll';

const Footer = () => {
    return  (
        <div className='footer'>

            <div className="container">

                <div className="top">

                    <div className="logo-footer">
                        <FaSpider className='icon' alt="8 Legged Freak" title="8 Legged Freak" />
                        <h2>8 Legged Freak, LLC</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' alt="Scroll to Top" title="Scroll to Top" />
                    </Link>
                </div>

                <div className="col-container">

                    <div className="col">
                        <h3>Portfolio</h3>
                        <p>Websites</p>
                        <p>Logos</p>
                        <p>Link</p>
                        <p>Link</p>
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
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3>Company</h3>
                        <p>About Brian</p>
                        <p>Why 8LeggedFreak?</p>
                        <p>How It Works</p>
                        <p>Contact Brian</p>
                    </div>

                    <form>
                        <h3>Call Brian Today 813.551.9096</h3>
                        <h3>Email Brian Today </h3>
                        <input type="email" placeholder='Enter Your Email' />
                        <FiMail className='mail-icon' />

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