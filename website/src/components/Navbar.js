import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
            <div className="logo">
            </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={0} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={0} style={{ color: '#ffffff' }} />)}
                </div>
                <ul id="nav1" className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-30} duration={500} onClick={closeMenu}> Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} offset={-200} smooth={true} exact='true' duration={500} onClick={closeMenu}> About </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="goals" spy={true} offset={-190} smooth={true} duration={500} onClick={closeMenu}> Goals </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="portfolio" spy={true} offset={-100} smooth={true} duration={500} onClick={closeMenu}> Portfolio </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} offset={-100} smooth={true} duration={500} onClick={closeMenu}> Contact </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar