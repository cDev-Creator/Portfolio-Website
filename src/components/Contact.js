import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/img/mothclear.png';
import emailjs from "emailjs-com";

export const Contact = () => {
 
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById("message").style.display = 'block';
    emailjs.sendForm("service_8sjeme9","contact_mil3w2b", e.target, "57uokk2RisLqzWlkd")
        .then((result) => {
            document.getElementById('message').textContent = "Your message was sent successfully!";
            console.log(result.text);
        }, (error) => {
            document.getElementById('message').textContent = "There was an issue submiting your message.";
            console.log(error.text);
        });
        e.target.reset()
    }

  return (
    <section className="contact" id="contact">
      <Container className="new-email-bx">
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          <h2>──── Get In Touch ────</h2>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__slow" : ""}>
                
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstName" placeholder="First Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name="lastName" placeholder="Last Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  name="email" placeholder="Email Address"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  name="phone" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" required></textarea>
                      <button><span>Submit</span></button>
                      <p id="message"></p>
                    </Col>
               
                  
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}