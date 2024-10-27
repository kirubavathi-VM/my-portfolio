import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    const contacts = [
        {
            href: `mailto:kiruba17bev@gmail.com`,
            icon: "fa-solid fa-envelope",
            text: "kiruba17bev@gmail.com"
        },
        {
            href: `tel:+919080388221`,
            icon: "fa-solid fa-phone",
            text: "+91 9080388221"
        },
        {
            href: "https://www.linkedin.com/in/kirubavathi-vm-17bev/",
            icon: "fa-brands fa-linkedin",
            text: "linkedin.com/in/kirubavathi-vm-17bev",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ];

    return (
        <Container fluid className='m-0 p-0' id="contact">
            <div className='contact-section p-5'>
                <Container>
                    <h1 className='mb-4'>Contact Me</h1>
                    <div className="divider mb-4"></div>
                    <Row className="social-links">
                        {contacts.map((contact, index) => (
                            <Col key={index} md={4} className="d-flex align-items-center">
                                <a 
                                    href={contact.href}
                                    target={contact.target}
                                    rel={contact.rel}
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    <i className={contact.icon}></i>
                                </a>
                                <span className="ml-2">{contact.text}</span>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default Contact;
