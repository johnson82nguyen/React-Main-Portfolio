import React from 'react';
import './Projects.css';
import { useState } from 'react';
import background from '../images/free_image.jpg';
import { FaExternalLinkAlt, FaWeight } from 'react-icons/fa';

const Projects = () => {

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
        </div>
    )
}


export default Projects