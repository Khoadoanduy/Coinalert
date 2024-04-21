import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Navbar.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginModal from '../Login/LoginModal'

function Navigation() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
                <div className={nav ? 'logo dark' : 'logo'}>
                    <h2>Coinalert</h2>
                </div>
                <ul className="nav-menu">
                    <a><li>Home</li></a>
                    <a><li>About</li></a>
                    
                </ul>
                <div className="login-wrapper">
                    <button onClick={openModal} className="login">Login</button>
                </div>
                <LoginModal isOpen={isModalOpen} onClose={closeModal} />
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

                </div>

                <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                    <ul className="mobile-nav">
                        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                        <Link to='about' smooth={true} duration={500} ><li>About</li></Link>
                    </ul>
                    <div className="mobile-menu-bottom">
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
                            <FaPinterest className='icon' />
                            <FaYoutube className='icon' />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <hr className ="line"></hr>
        </div>
    )
}

export default Navigation