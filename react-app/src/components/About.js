import React from 'react';
import './About.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2 className="aboutHeader">About</h2>
                    <span className='line'></span>
                    <p className="paragraph1">Hi my name is John Nguyen. I am a software engineer and a
                    graduate from the University Of Minnesota Twin-Cities. </p>
                     <p className="paragraph1"> I'm passionate about programming and always eager to learn new technologies. Some
                     of these interests include video game programming, AI/machine learning, and web development. </p>
                     <p className="paragraph1"> Outside of work, I like to spend time with my girlfriend and explore foods, events, parks, and beaches around Los Angeles.</p>
                     <p className="paragraph1"> My other hobbies also include Tennis, Basketball, Video gaming, and I just started picking up Brazilian Jiu Jitsu.</p>
                </div>
            </div>


            <div className="aboutMeIcons"> 
            <a href="https://github.com/johnson82nguyen" style={{color: 'gray'}} title="github" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/johnson-nguyen82/" style={{color: 'skyblue'}} target="_blank"><FaLinkedin/></a>
            <a href="https://www.instagram.com/j_nguyen32" style={{color: 'pink'}}target="_blank"><FaInstagram/></a>
            <a href="https://open.spotify.com/user/king.johnson2015" style={{color: 'white'}} target="_blank"><FaSpotify/></a>

            </div>
        </div>
    )
}

export default About;