import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import mypicture from '../assets/img/nat.png';

export const About = () =>{

    return (
        <section className='about' id='about'>
        <Container>
       
        <h1 className='about-title'>About Me <span className='dec-line'> ────</span></h1><br></br>
             <Row>
                
                <Col className='about-info text-start' xs={12} md={6} xl={5}>
                        <p>I’m a college student looking to grow my software and web development experience . I study at Sullivan University and my major is cybersecurity. My programming journey kickstarted when I took an intro to programming class my first semester of college.<br></br> <br></br>
                        One hobby that I enjoy working on is game development. Two of my main creations so far are a path finding maze game and a rocket simulator which traverses though a variety of obstacles in a vibrant environment. But my largest project so far is a first-person shooter which takes place in a complex cyberpunk world filled with dangerous AIs. It has been a learning journey which has sharpened my skills in design, creativity and storytelling, as well as programming of course.<br></br> <br></br>
                        Besides coding, I enjoy hosting game nights for my friends, playing the guitar / piano, horseback riding and just getting out in nature!</p>
                       
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                    <img class="mypicture" src={mypicture} alt='Header' height='300' width='300'></img>
                    </Col>
                   
                </Row>


         
        </Container>
        </section>

    )
}