import React from 'react';
import './Projects.css';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Projects = () => {


    const Button = styled.button`
    background-color: skyblue;
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
    margin-top: 50px;
    &:hover {
        background-color: #9FD8EF;
    }
    `

    return (
        <div id="portfolio" className="projectsContainer">
            <div className="portfolioHeader"> 
                <h1>Portfolio</h1> 
            </div>
            <div id="project1" onClick={() => {
                window.open("https://github.com/johnson82nguyen/BattleShip", "_blank_");
            }} className="project1">

                <h1>BattleShip</h1>
                <span>Java project consists of good understanding of object oriented design and multiple dimensional matrices. </span>
            </div>
            <div id="project2" onClick={(
            ) => {
                window.open("https://github.com/johnson82nguyen/new_website", "_blank_")
            }} className="project2">
           
                <h1>Personal Website</h1>
                <span>Built with React.js framework and node.js server. Hosted on Netlify</span>
            </div>
            <div className="project3">
                <h1>Python</h1>
                <span>Simple python project utilizing PyTurtle module. This was my first programming assignment in college.</span>
            </div>
            <div className="button-project-container">
                <Link to="contact" spy={true} offset={-50} smooth={true} duration={500}>
                    <Button> 
                        Contact
                    </Button>
                </Link>
            </div>


        </div>
    )
}


export default Projects