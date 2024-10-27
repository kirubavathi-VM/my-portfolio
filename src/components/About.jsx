import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container fluid className='m-0 p-0' id="about">
            <div className='about-section p-5'>
                <Container>
                    <h1 className='mb-4'>About Me</h1>
                    <div className="divider mb-4"></div>
                    <p className='mt-4'>
                        I'm Kirubavathi, a passionate Frontend Developer specializing in creating dynamic and interactive user interfaces using <strong>React.js</strong> and <strong>Next.js</strong>. My goal is to deliver scalable, efficient, and cross-browser-compatible web solutions that perform optimally across all devices.
                        In addition to my front-end expertise, I have experience with backend development using <strong>Python</strong> and Django, enabling me to collaborate effectively with backend teams to enhance functionality and create user-centric products.
                        I also manage projects using version control systems like <strong>Git</strong> and task-tracking tools like <strong>Jira</strong>, ensuring smooth collaboration and efficient project management.
                    </p>
                </Container>
            </div>
        </Container>
    );
};

export default About;


