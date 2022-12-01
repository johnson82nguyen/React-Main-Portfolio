import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';





const Footer = () => {



    return (
        <>
        <div className="footer">
            <Link style={{fontSize:"30px"}}to="home" spy={true} smooth={true} offset={50} duration={500}> Built by John Nguyen</Link>
        </div>
        <a className="finalGithub" style={{color: 'skyblue'}} href="https://github.com/johnson82nguyen/new_website">Check out the source code</a>
        <a style={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>Version 1 ... I'll be adding more soon!</a>
        </>
    )
}


export default Footer;