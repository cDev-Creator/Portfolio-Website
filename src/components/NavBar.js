import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {useState, useEffect} from "react";

import logo from '../assets/img/mothclear.png';
import nav1 from '../assets/img/nav1.png';
import nav2 from '../assets/img/nav2.png';
import nav3 from '../assets/img/nav3.png';

import { HashLink} from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const updateActiveLink = (value) => {
    setActiveLink(value);
  }
    return (
    <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img className="logo" src={logo} alt="Logo" width="80"/>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              <span className="nav-toggle-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}onClick={() => updateActiveLink('about')} >About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => updateActiveLink('projects')} >Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}onClick={() => updateActiveLink('contact')} >Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                {/*   <a href="#"><img src={nav1} alt=""/></a>
                  <a href="#"><img src={nav2} alt=""/></a> */}
                  <a href="https://github.com/cDev-Creator" target="_blank" rel="noreferrer noopener" ><img src={nav3} alt=""/></a> 
              </div>
              <HashLink to='#contact'>
              <button className="vvd"><span>Message Me!</span></button>
              </HashLink>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
   ) 
}   