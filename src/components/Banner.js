import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import header from "../assets/img/logo.svg";

import 'animate.css';

import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> 
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1>{"Hi! I'm Natalie McCoy"}<span className='wrap'>, Developer</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>}
                        </TrackVisibility>
                     
                        <button onclick={()=> console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt='Header' width='250'></img>

                    </Col>
                </Row>

            </Container>


        </section>
    )
}