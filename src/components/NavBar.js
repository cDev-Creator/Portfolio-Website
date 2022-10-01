import {Navbar, Nav, Container} from 'react-bootstrap';
import {useState, useEffect} from "react";

import logo from '../assets/img/logo.svg';

import nav1 from '../assets/img/nav1.png';
/* import nav2 from '...assets/img/nav2.png';
import nav3 from '...assets/img/nav3.png'; */


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                isScrolled = true;
            }else {
                isScrolled = false;
            }
        }
        window.addEventListener('scroll', onScroll);
        return () =>window.removeEventListener('scroll', onScroll);
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="Logo"/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              <span className="nav-toggle-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => updateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                  <a href="#"><img src={nav1} alt=""/></a>
                  <a href="#"><img src={nav1} alt=""/></a>
                  <a href="#"><img src={nav1} alt=""/></a> 
              </div>
              <button className=""onClick={() => console.log('connect')}><span>Let's Connect</span></button>

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   ) 
}   