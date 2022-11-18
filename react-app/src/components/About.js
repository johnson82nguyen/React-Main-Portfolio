import React from 'react';
import './About.css';


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
        </div>
    )
}

export default About;