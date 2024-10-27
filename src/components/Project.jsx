import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Project = () => {
    const Project = [
        {
            title: "HydraSave",
            description: "Data normalization tool built using React and Next.js.",
            link: "https://hydrasave.com/",
        },
        {
            title: "AI Chatbot (KiruBot)",
            description: "Interactive AI chatbot using Llama 3.1 and Langchain.",
            link: "/projects/aichatbot",
        },
    ];

    return (
        <Container fluid className='m-0 p-0' id="projects">
            <div className='projects-section p-5'>
                    <h1 className='mb-4'>Projects</h1>
                    <div className="divider mb-4"></div>
                    <p className='mb-4'>
                        Here are some of the projects I've worked on that showcase my skills in frontend and backend development. Each project reflects my dedication to creating user-friendly and efficient applications.
                    </p>
                    <Row>
                        {Project.map((project, index) => (
                            <Col md={6} key={index} className='my-4'>
                                <Card className='card-design'>
                                    <Card.Body>
                                        <h3 className='text-center'>{project.title}</h3>
                                        <p className='text-center'>
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            className='learn-more-link'
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View Project <i className="fa-solid fa-arrow-up-right-from-square mx-1"></i>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
            </div>
        </Container>
    );
};

export default Project;
