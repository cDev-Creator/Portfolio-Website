import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import moth from '../assets/img/mothclear.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink} from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";
  

export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeInLeft animate__slow" : ""}> 
                            {/* {<span className='tagline'>Welcome to my Portfolio</span>} */}
                            <h1>Hello there!<br></br><br></br>I'm<span className='my-name'> Natalie McCoy</span><span className='wrap'>, Developer</span></h1>
                            <p>I am an aspiring full-stack developer from Kentucky. I enjoy creating beautiful, engaging, and accessible user experiences!</p>
                        </div>}
                        </TrackVisibility>
                    <Router>
                        <HashLink className="contact-link" to='#contact'>
                            <button className="vvd ">Message Me<ArrowRightCircle size={25}/></button>
                        </HashLink>
                    </Router>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={moth} alt='Header' width='550'></img>
                    </Col>
                </Row>

            </Container>


        </section>
    )
}