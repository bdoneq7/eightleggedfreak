import React, {useState} from 'react';
import { FaSpider } from "react-icons/fa6";
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './NavbarStyles.css';
import {GoogleButton} from 'react-google-button';
import {UserAuth} from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const { googleSignIn } = UserAuth();
    const {user, logOut} = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {

    try {
        await googleSignIn();
       
    } catch (error) {
        console.log(error);
    }
};

    // useEffect(() => {
    //     if(user !=null) {
    //         navigate('/');   
    //         } 
    //         else if (!user) {
    //             navigate('/');
    //         }
    // }, );

    

    

    const handleSignOut = async () => {

        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }


    const [nav,setNav] =useState(false);
    const handleNav = () => setNav(!nav);

    return  (
        <div name='top' className='navbar'>
            <div className='container'>
                <div className='logo'>
                
                <FaSpider className='icon' alt="8 Legged Freak" title="8 Legged Freak" />
                
                    <h1>8 Legged Freak</h1>
                   
                    
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutbrian'>About Brian</Link></li>
                    <li><Link to='/clientportfolio'>Portfolio</Link></li>
                    <li><Link to='/servicespackages'>Pricing</Link></li>
                    <li><Link to='/howitworks'>How It Works</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    
                    {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <GoogleButton className="googlebutton" onClick={handleGoogleSignIn}/> }
                </ul>

                <div className='hamburger'onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                  
                </div>

            </div>

        </div>
    )
}

export default Navbar;