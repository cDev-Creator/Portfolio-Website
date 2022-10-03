import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import project1 from '../assets/img/lunchroom.png';
import project2 from '../assets/img/guessit.png';
import project3 from '../assets/img/guessit2.png';

import project4 from '../assets/img/sketchpad.png';
import project5 from '../assets/img/bookly.png';
import project6 from '../assets/img/mushroomsnmoons.png';
import project7 from '../assets/img/wiki.png';

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

    
const [showed, setShowed] = useState(true);

    return(
    <section className="projects" id="projects">
        <Container>
      
             <Row className='align-items-center project-card'>
                    <Col xs={12} md={6} xl={7}>
                    <h1 className='projects-title'>My Projects<span className='dec-line'> ────</span></h1>
                    <img src={project1} alt='Project Img' height='380' width='630'></img>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <p className='hcs-text'>Over this past summer, I was contracted by a private school which goes starts at pre-k and goes through 8th grade. The job was to program a lunchroom system entirely from scratch which would replace their dated system. As I began researching into the sort of technologies this would require, I quickly learned I would have to teach myself many new things. The main would be the programming language that would comprise most of the program, PHP. <br></br> <br></br> 
                        I completed the 1.0 version of this site in August before school was in session. My program is currently being used every day by their teachers to log all information relating to lunch orders. But there are still many additional features I plan on adding in the coming months!
                        </p>
                        <button className="projects-btn"onClick={() => console.log('learn more')}><span>Learn More!</span></button>
                    </Col>
                </Row>

                <Row className='align-items-center project-card'>
                    <Col xs={12} md={6} xl={7}>
                    <img src={project2} alt='Project Img' height='630' width='300'></img>
                    <img src={project3} alt='Project Img' height='630' width='300'></img>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='guessit-text'>
                        <p>As I was first learning web development, this was the first entirely self-directed project I embarked on. I knew what features I wanted to have, so I researched and planned out how I would achieve my goals. I created this game for my friends and I to play. We enjoyed playing the classic hand-held game catch phrase, but after so long we wanted to customize our own categories and word pools. It is meant to be played on a mobile phone because the game play requires passing a device around.<br></br> <br></br></p>
                        show?<ul id="guessit-list">
                            <li><p> Add the categories you would like at the bottom of the home page (ex. cinema, travel, celebrities etc.)and  then add the words you would like to each category. </p></li>
                            <li><p> Divide your players into teams (red and blue.) </p></li>
                            <li><p> After you have added a sufficient amount of content,pick a category and hit select. A 60 second countdown timer will then begin and you must try to describe the randomly generated word/phrase to your teammate without using any parts of the word or rhyming. Once they have guessed correctly, pass the phone to the next player. </p></li>
                            <li><p> This continues until time runs out and the player who is holding the device when time runs out must allocate a point to the opposing team using the red and blue buttons that will appear.</p></li>
                            <li><p> This cycle continues until a team gets 7 points when a victory page is displayed and a winner is determined!</p></li>
                        </ul>:null

                   
                     
            <button className="projects-btn"  onClick={()=>setShowed(!showed)}>How to Play?</button>
        


         
      

                       

                    </Col>
                    <Col>
                    </Col>
                </Row>
                <div className="col-12">
                    <div className="minor-project-bx wow zoomIn">
                        <h2>──── Additional Projects ────</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme minor-project-slider">
                            <div className="project-item">
                                <img src={project4} alt="Image" height='230' />
                                <h5>Project 1</h5>

                            <div class="text-overlay">
                                <div class="project-description">Lorem Ipsum is simply dummy text of the printing.</div>
                            </div>
                            </div>
                            <div className="project-item">
                                <img src={project5} alt="Image" height='230' />
                                <h5>Project 2</h5>
                            </div>
                            <div className="project-item">
                                <img src={project6} alt="Image" height='230' />
                                <h5>Project 3</h5>
                            </div>
                            <div className="project-item">
                                <img src={project7} alt="Image" height='230' />
                                <h5>Project 4</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </section>   
    )
}