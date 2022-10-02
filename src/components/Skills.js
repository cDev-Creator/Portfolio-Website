import React from 'react';
import {Container, Col} from 'react-bootstrap';



export const Skills = () =>{
    return(
       
        <div className="skill-bx">
        <h2>Technologies I have worked with</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
        <Container>
        
        <div className="skills">
        <Col>

        <div className="skill-item">
            <li>JavaScript</li>
        </div>
        <div className="skill-item">
              
            <li>HTML</li>
        </div>
        <div className="skill-item">
              
            <li>CSS</li>
        </div>

        <div className="skill-item">
            <li>React.js</li>
        </div>
   
        </Col>

        <Col>
        <div className="skill-item">
            <li>PHP</li>
        </div>
        <div className="skill-item">
              
            <li>MySQL</li>
        </div>
        <div className="skill-item">
              
            <li>C#</li>
        </div>

        <div className="skill-item">
            <li>Npm</li>
        </div>
   
        </Col>

        <Col>
        <div className="skill-item">
            <li>Linux</li>
        </div>
        <div className="skill-item">
              
            <li>Git</li>
        </div>
        <div className="skill-item">
              
            <li>GitHub</li>
        </div>

        <div className="skill-item">
            <li>Unity</li>
        </div>
   
        </Col>
       
        </div>
        </Container>
    </div>
   
    )
}