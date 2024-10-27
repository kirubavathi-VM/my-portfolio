import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillsData = [
    { skill: 'React.js', level: 80 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'TypeScript', level: 80 },
    { skill: 'Next.js', level: 80 },
    { skill: 'Python', level: 75 },
    { skill: 'Django', level: 70 },
    { skill: 'SQL', level: 85 },
    { skill: 'Git', level: 90 },
];

const Skills = () => {
    return (
        <Container fluid className='m-0 p-0' id="skills">
            <div className='skills-section p-5'>
                    <h1 className='mb-4'>My Skills</h1>
                    <div className="divider mb-4"></div>
                    <p>
                        I have a strong foundation in front-end and back-end development through various technologies. This section showcases my proficiency levels in each.
                    </p>
                    <Row>
                        {skillsData.map((skill, index) => (
                            <Col xs={12} md={6} key={index} className='skill mb-4'>
                                <h5>{skill.skill}</h5>
                                <div className='progress'>
                                    <div
                                        className='progress-bar'
                                        style={{ width: `${skill.level}%` }}
                                        aria-valuenow={skill.level}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
            </div>
        </Container>
    );
};

export default Skills;
