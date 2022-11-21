import React from 'react'
import './Resume.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from '../pages/Johnson_Nguyen_Resume.pdf'

const Projects = () => {
    return (
        <div id="resume" className="projectContainer">
            <Document file={samplePDF}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}


export default Projects


