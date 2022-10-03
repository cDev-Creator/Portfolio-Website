import React from 'react';
import {Container, Col} from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () =>{
    return(
    <section className="skills" id="skills">
        <Container className="skill-bx">
        <h2>──── Technologies I work with ────</h2>
        <p>Throughout my programming journey I have added a variety of languages and technologies to my repertoire. <br></br>But I am very comfortable with learning and working with whatever language proves to be the  best tool for the job.<br></br> 
        I love working through complex problems and coming up with responsive and creative solutions! </p>

        <TrackVisibility>
            {({isVisible}) => 
            
                <div className={ isVisible ? "animate__animated animate__fadeIn animate__slow " : ""}> 
                      
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
                </div>}
            </TrackVisibility>
           
       
            


              
    </Container>
    </section>

    )
}