import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import mypicture from '../assets/img/nat.png';
import project2 from '../assets/img/logo.svg';



export const About = () =>{

    return (
        <Container>
        <section className='about'>
        <h1 className='about-title'>About Me</h1>
             <Row>
                
                <Col className='about-info text-start' xs={12} md={6} xl={5}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                       
                    </Col>
                    <Col xs={12} md={6} xl={7} >
                    <img class="mypicture" src={mypicture} alt='Header' height='300' width='300'></img>
                    </Col>
                   
                </Row>


            </section>
        </Container>

    )
}