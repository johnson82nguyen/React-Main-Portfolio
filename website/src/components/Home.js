import React from 'react';
import Typewriter from 'typewriter-effect'
import './Home.css';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Home = () => {

    const Button = styled.button`
        background-color: skyblue;
        color: white;
        text-align: center;
        align-items: center;
        padding: 20px 32px;
        border-radius: 5px;
        border: 0;
        outline: 0;
        box-shadow: 0px 2px 2px lightgray;
        margin-top: 80px;
        transition: ease background-color 250ms;
        font-family: sans-serif;
        font-weight: bold;
        border-outline: 0px;
        &:hover {
            background-color: #9FD8EF;
        }
    `

    return (
        <div id="home" className="homeContainer">
            <div className='header-div'>
                <h1 className="header_name">
                    John Nguyen
                </h1>
            </div> 
            <div className="typeWriter-div">
                <h3 className="typewriter">
                    <Typewriter
                    options={{
                        loop:true
                    }}
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
                        .typeString("Welcome to my website!")
                        .pauseFor(5000)
                        .start();
                    }}
                    />
                </h3>    
            </div>
            <div className="button-container">
                <Link to="about" spy={true} offset={-200} smooth={true} duration={500}>
                    <Button> 
                        About Me
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
