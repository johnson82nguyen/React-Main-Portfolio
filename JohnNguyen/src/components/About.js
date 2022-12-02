import React from 'react';
import './About.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const About = () => {

    const Button = styled.button`
        background-color: #DCDCDC;
        color: white;
        text-align: center;
        align-items: center;
        padding: 20px 32px;
        border-radius: 5px;
        margin-top: 35px;
        border: 0;
        outline: 0;
        box-shadow: 0px 2px 2px lightgray;
        transition: ease background-color 250ms;
        font-family: sans-serif;
        font-weight: bold;
        border-outline: 0px;
        &:hover {
            background-color: #E0E0E0;
        }
    `

    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2 className="aboutHeader">About</h2>
                    <span className='line'></span>
                    <p className="paragraph1">Hi my name is John Nguyen. I am a software engineer and a
                    graduate from the University Of Minnesota Twin-Cities. </p>
                     <p className="paragraph1"> I'm passionate about building software applications and am excited to learn new technologies and make new friends on this journey. </p>
                     <p className="paragraph1"> Outside of work, I like to spend time with my girlfriend, explore foods, events, parks, and beaches around Los Angeles.</p>
                     <p className="paragraph1"> My other hobbies also include tennis, basketball, video games, e-sports, and I just started picking up Brazilian Jiu Jitsu.</p>
                </div>
            </div>

            <h3 className="socials">Connect with me</h3>
            <div className="aboutMeIcons"> 
            <a href="https://github.com/johnson82nguyen" style={{color: 'gray'}} title="GitHub" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/johnson-nguyen82/" style={{color: 'skyblue'}} title="LinkedIn" target="_blank"><FaLinkedin/></a>
            <a href="https://www.instagram.com/j_nguyen32" style={{color: 'pink'}} title="Instagram" target="_blank"><FaInstagram/></a>
            <a href="https://open.spotify.com/user/king.johnson2015" style={{color: 'white'}} title="Spotify" target="_blank"><FaSpotify/></a>
            <a href="https://twitter.com/j_nguyen32" style={{color: '#89cff0'}} title="Twitter" target="_blank"><FaTwitterSquare/></a>

            </div>
            <div className="button-container">
                <Link to="goals" spy={true} offset={-200} smooth={true} duration={500}>
                    <Button> 
                        Goals
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default About;