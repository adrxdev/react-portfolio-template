import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faHtml5, faPhp } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faComputer, faHammer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
];

const labelsSecond = [
    "VsCode",
    "Git",
    "Windows",
    "Linux",

];

const labelsThird = [
    "PHP (Learning)",
    "MySQL (Learning)",
    "MongoDB (Learning)",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>Front-End Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using this technologies such as HTML and CSS. I have a strong proficiency in the  process of frontend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHammer} size="3x"/>
                    <h3>Tools I Use</h3>
                    <p>From development to deployment, I leverage modern DevOps tools and automation workflows. I help clients implement CI/CD pipelines, automated testing, and scalable deployment systems to ensure a smooth and reliable Go-Live process.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPhp} size="3x"/>
                    <h3>Back-End Web Development</h3>
                    <p>I build the backbone of web applications powering features, handling data, and keeping everything running behind the scenes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;