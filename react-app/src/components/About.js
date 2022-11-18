import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Hi my name is John Nguyen</p>
                    <p>I'm a software engineer</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About;