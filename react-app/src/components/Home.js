import React from 'react';
import Typewriter from 'typewriter-effect'
import './Home.css'

const Home = () => {
    return (
        <div id="home" className="homeContainer">
            <h1 className="header_name">
                John Nguyen
            </h1>
            <h3 className="typewriter">
            <Typewriter
                onInit={(typewriter) => {
                typewriter
                .changeDelay(30)
                .typeString("Hello!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("I'm a Software Engineer")
                .pauseFor(1000)
                .changeDeleteSpeed(30)
                .deleteChars(17)
                .typeString("web developer")
                .pauseFor(1000)
                .deleteChars(13)
                .typeString("basketball/tennis player")
                .pauseFor(1000)
                .deleteChars(24)
                .typeString("gamer")
                .pauseFor(1000)
                .deleteChars(5)
                .typeString("martial artist")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to my portfolio!")
                .pauseFor(1000000)
                .start();
            }}
            />
            </h3>
        </div>
    )
}

export default Home;
