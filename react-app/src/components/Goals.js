import React from 'react';
import './Goals.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from '../pages/goals.pdf';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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
    &:hover {
        background-color: #9FD8EF;
    }
    `

    return (
        <>
        <h1 className="goalsHeader">Goals</h1>
        <div id="goals" className="goalsContainer">
            <h1 style={{textAlign:"center"}}>Impossible list</h1>
            <h5>*Denotes Completed</h5>
            <h4>Career Goals:</h4>
            <ul>
                <li>Work for a FAANG company.</li>
                <li><strike>Land my first Software Engineering Job.</strike> <b>(*Summer 2021)</b></li>
                <li> <strike> Work for a startup </strike> <b> (*Summer 2021) </b></li>
                <li>Develop a video game professionally for a company.</li>
                <li>Obtain a project management or leadership position/role in development.</li>
                <li>Manage and run a large open-source project.</li>
                <li>Be able to mentor Junior engineers.</li>
            </ul>
            <h4>Life goals:</h4>
            <ul>
                <li><strike> Graduate College </strike> (* Spring 2020) </li>
                <li><strike>Treat my family and friends to dinner after landing my first career Software Engineering Job.</strike><b>(*Summer 2021)</b></li>
                <li>Buy and own a house.</li>
                <li>Buy and own a car.</li>
                <li><strike>Move out of Minnesota.</strike><b>(*Summer 2021)</b></li>
                <li>Rent out my future properties.</li>
                <li><strike>Buy my mom a LV purse.</strike><b>(*Summer 2022)</b></li>
                <li>Coach tennis/jiu jitsu after I'm done with my career.</li>
            </ul>

            <h4>Health/Gym goals:</h4>
            <ul>
                <li>Run a 5-minute mile.</li>
                <li>Run a marathon</li>
                <li><strike> Bench 225 x 8 </strike> <b>(*Winter 2021)</b></li>
                <li><strike> Bench 315 x 1 </strike> <b>(*Winter 2021)</b></li>
                <li><strike> Squat 405 x 1 </strike> <b> (*Winter 2017)</b></li>
                <li><strike> Squat 305 x 8 </strike> <b> (*Winter 2017) </b></li>
                <li>15 pull-ups</li>
                <li>5 muscle-ups</li>
                <li>6 Pack</li>
            </ul>
            <h4>Hobbies/Interests:</h4>
            <ul>
                <li>Obtain a blue belt in Brazilian Jiu Jitsu</li>
                <li>Go snowboarding on a mountain</li>
                <li>Play in a tennis tournament in California</li>
                <li>Play in a tennis tournament in Europe or Asia</li>
                <li>Cook a beef wellington from scratch</li>
                <li>Max all levels in Old School RuneScape (MMORPG game I played as a kid and currently).</li>
                <li>Travel to Korea/Japan/Sweden/Germany/Switzerland.</li>
                <li>Own over 20 GitHub Repositories.</li>
                <li>Start cycling.</li>
                <li>Try Omakase.</li>
                <li>Attend a NFL SuperBowl.</li>
                <li><strike> Attend a league of legends watch party. </strike> <b>(*Fall 2017, *Fall 2022)</b></li>

            </ul>

        </div>

        <div className="goals-button-container">
            <Link to="portfolio" spy={true} offset={-100} smooth={true} duration={500}>
                <Button> 
                    Portfolio
                </Button>
            </Link>
        </div>
        </>
    )
}


export default Projects


