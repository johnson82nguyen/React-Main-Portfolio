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
            <Document file={samplePDF}>
                <Page pageNumber={1}/>
            </Document>

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


