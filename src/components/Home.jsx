import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className='m-0 p-0' id="home">
            <div className='d-flex flex-column justify-content-center align-items-center vh-100 home pt-5'>
                <Card className='home'>
                    <Card.Body>
                    <Row className="align-items-end">
                        <Col xs={2}>
                            <span className="text">HI IM</span>
                        </Col>
                        <Col xs={10}>
                            <div className="flex-grow-1 line mb-2"></div>
                        </Col>
                    </Row>
                    <h1 className='name text-uppercase'>Kirubavathi</h1>
                    {/* <h4>Frontend Developer | React, Typescript, Javascript</h4> */}
                    <h4 className='text-uppercase float-right px-0 domain'>Front-End Developer</h4>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Home
