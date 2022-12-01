import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';





const Footer = () => {



    return (
        <div className="footer">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}> John Nguyen's Website v1 </Link>
            <a style={{color: 'skyblue'}} href="https://github.com/johnson82nguyen/new_website">Check out the source code</a>
        </div>
    )
}


export default Footer;