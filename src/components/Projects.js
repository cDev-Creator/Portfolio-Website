import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/logo.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Projects = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
    return(
    <section className="projects" id="projects">
        <Container>
      
             <Row className='align-items-center project-card'>
                <h1 className='projects-title'>My Projects</h1>
                    <Col xs={12} md={6} xl={7}>
                    <img src={project1} alt='Header' height='350' width='600'></img>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="projects-btn"onClick={() => console.log('learn more')}><span>Learn More!</span></button>
                    </Col>
                </Row>

                <Row className='align-items-center project-card'>
                    <Col xs={12} md={6} xl={7}>
                    <img src={project1} alt='Header' height='350' width='600'></img>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="projects-btn"onClick={() => console.log('learn more')}><span>Learn More!</span></button>

                    </Col>
                    <Col>
                    </Col>
                </Row>
                <div className="col-12">
                    <div className="minor-project-bx wow zoomIn">
                        <h2>Additional Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme minor-project-slider">
                            <div className="project-item">
                                <img src={project2} alt="Image" />
                                <h5>Project 1</h5>
                            </div>
                            <div className="project-item">
                                <img src={project2} alt="Image" />
                                <h5>Project 2</h5>
                            </div>
                            <div className="project-item">
                                <img src={project2} alt="Image" />
                                <h5>Project 3</h5>
                            </div>
                            <div className="project-item">
                                <img src={project2} alt="Image" />
                                <h5>Project 4</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </section>   
    )
}