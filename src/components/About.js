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
                        <p>I’m a college student looking to grow my software and web development experience . I have an Associate’s degree in cybersecurity from Sullivan University and am now working towards completing my Bachelor’s degree. My programming journey kickstarted when I took an intro to programming class my first semester of college.<br></br> <br></br>
                        The technologies I have been working with most recently are React.js/Npm and C#. I have been working on various exercises to hone these skills. My largest project using them so far is the portfolio website you are viewing! In the past, I used C# in the context of game development. Two of my main creations were a path finding maze game and a rocket simulator which traversed though a variety of obstacles. But my largest project was a first-person shooter in a complex cyberpunk environment filled with dangerous AIs. I have also taken two C# driven programming classes over the course of my college education. Currently, I am enrolled in one called Visual Programming which has a focus on building applications that use Graphical User Interfaces in C#. <br></br> <br></br> 
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