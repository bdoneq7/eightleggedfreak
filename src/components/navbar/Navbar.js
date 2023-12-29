import React, {useState} from 'react';
import { FaSpider } from "react-icons/fa6";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
    const [nav,setNav] =useState(false);
    const handleNav = () => setNav(!nav);

    return  (
        <div name='top' className='navbar'>
            <div className='container'>
                <div className='logo'>
                <FaSpider className='icon' />
                    <h1>8 Legged Freak</h1>
                    
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutbrian'>About Brian</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button>Sign in</button>
                </ul>

                <div className='hamburger'onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                  
                </div>

            </div>

        </div>
    )
}

export default Navbar;