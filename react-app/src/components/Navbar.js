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
                <Link to="home" spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}> John's Website </Link>
            </div>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500} onclick={closeMenu}> Home </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about" spy={true} offset={-100} smooth={true} duration={500} onclick={closeMenu}> About </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="projects" spy={true} offset={50} smooth={true} duration={500} onclick={closeMenu}> Projects </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="contact" spy={true} offset={50} smooth={true} duration={500} onclick={closeMenu}> Contact </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar