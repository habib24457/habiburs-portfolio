import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import frontend from '../../../images/frontend.jpg';
import backend from '../../../images/backend.jpg';
import otherTools from '../../../images/tools.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faLaptop } from '@fortawesome/free-solid-svg-icons'


const MySkills = () => {


    return (
        <Container className="myText-style">
            <Row className="mt-5 pt-5 pb-5">
                <Col className="text-center">
                    <h1 className="first-color">
                        <FontAwesomeIcon icon={faLaptop}/>
                        My skills</h1>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col className="mb-5">
                    <Card style={{ width: '18rem' }} className="shadow-lg rounded">
                        <Card.Img className="p-2" variant="top" src={frontend} />
                        <hr />
                        <Card.Body>
                            <Card.Title className="text-center"><h2>Frontend Tools</h2></Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    HTML5,CSS3</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    Javascript,ES6,ReactJS</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    Bootstrap,MaterialUI<br/>SASS</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-5">
                    <Card style={{ width: '18rem' }} className="shadow-lg rounded">
                        <Card.Img className="p-2" variant="top" src={backend} />
                        <hr />
                        <Card.Body>
                            <Card.Title className="text-center"><h2>Backend Tools</h2></Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    NodeJS</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    MongoDB</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    ExpressJS</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="mb-5">
                    <Card style={{ width: '18rem' }} className="shadow-lg rounded">
                        <Card.Img className="p-2" variant="top" src={otherTools} />
                        <hr />
                        <Card.Body>
                            <Card.Title className="text-center"><h2>Other Tools</h2></Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    Git</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    Authentication, Hosting</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faCheckCircle} size="1x" />
                                    Debug</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MySkills;