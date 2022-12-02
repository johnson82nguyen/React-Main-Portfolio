import React from 'react';
import './Projects.css';
import { useState } from 'react';
import background from '../images/free_image.jpg';
import { FaExternalLinkAlt, FaWeight } from 'react-icons/fa';
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
    margin-bottom: 500px;
    border: 0;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    font-family: sans-serif;
    font-weight: bold;
    border-outline: 0px;
    margin-left: 48%;
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
            
            </div>

            <div id="project2" onClick={(




            ) => {
                window.open("https://github.com/johnson82nguyen/new_website", "_blank_")
            }} className="project2">
           
            </div>

            <div className="project3">
            </div>


            <div className="button-container">
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