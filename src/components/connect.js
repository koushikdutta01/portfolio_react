import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqydkvn");

    if (state.succeeded) {
        return (
            <section className="contact" id='connect'>
                <Container>
                    <div className="success-message p-5 text-center">
                        <h2>Message Received!</h2>
                        <p>Thanks for reaching out. I'll get back to you shortly via email.</p>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="contact" id='connect'>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} className="px-1 mb-3">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Koushik Dutta"
                                        required
                                    />
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                    />
                                </Col>
                                <Col size={12} className="px-1 mb-3">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        required
                                    />
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                </Col>
                                <Col size={12} className="px-1 mb-3">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can I help you?"
                                        rows="4"
                                        required
                                    />
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />
                                </Col>
                                <Col size={12} className="px-1">
                                    <button type="submit" disabled={state.submitting}>
                                        {state.submitting ? "Sending..." : "Send Message"}
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>    
            </Container>
        </section>
    );
}

export default ContactForm;
