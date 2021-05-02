import React from 'react';
import { Row, Col,Card } from 'react-bootstrap';
import frontend from '../../../images/front.png';
import backend from '../../../images/backend.png';
import tool from '../../../images/tool.png';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const OverviewNskill = () => {
    return (
        <>
            <Zoom>
                <Row>
                    <Col className="mt-5 text-center">
                        <h2>Skills Overview</h2>
                        <p>I've built websites using the modern web development tools.<br /> Below you can have a quick overview of my skills or you can check my resume.</p>
                        <a class="btn btn-warning" href="https://drive.google.com/file/d/1AvijN0Zwv7oEhxRNDmXlRDboWXgo3rfb/view?usp=sharing" target="_blank" rel="noreferrer" role="button">Download My Resume</a>
                    </Col>
                </Row>
            </Zoom>

            <Slide right>
            <Row className="mt-5 mb-5">
                <Col>
                    <Card className="shadow" style={{ width: '18rem', height: '18rem' }}>
                        <Card.Img class="mx-auto d-block p-3" style={{ width: '100px', height: '100px' }} variant="top" src={frontend} />
                        <Card.Body>
                            <Card.Title className="text-center">Frontend</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>React JS</li>
                                    <li>Javascript,ES6</li>
                                    <li>Bootstrap,Material UI</li>
                                    <li>HTML5,CSS3,SASS</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem', height: '18rem' }}>
                        <Card.Img class="mx-auto d-block p-3" style={{ width: '100px', height: '100px' }} variant="top" src={backend} />
                        <Card.Body>
                            <Card.Title className="text-center">Backend</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Node JS</li>
                                    <li>Express JS</li>
                                    <li>MongoDB</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow" style={{ width: '18rem', height: '18rem' }}>
                        <Card.Img class="mx-auto d-block p-3" style={{ width: '100px', height: '100px' }} variant="top" src={tool} />
                        <Card.Body>
                            <Card.Title className="text-center">Others</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Chrome Dev Tools</li>
                                    <li>Firebase</li>
                                    <li>Netlify,Heroku,Git</li>
                                    <li>Data structure,Algorithm</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Slide>
        </>
    );
};

export default OverviewNskill;