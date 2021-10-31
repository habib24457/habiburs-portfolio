import React from 'react';
import { Card } from 'react-bootstrap';
import frontend from '../../../images/front.png';
import backend from '../../../images/backend.png';
import tool from '../../../images/tool.png';
import Zoom from 'react-reveal/Zoom';

const OverviewNskill = () => {
    return (
        <div className="container">
            <Zoom>
                <div className="row justify-content-center">
                    <div className="col-md-12 mt-5 text-center">
                        <h2 className="second-color">Skills Overview</h2>
                        <p className="myText-style">I've built websites using the modern web development tools.<br />
                        Below you can have a quick overview of my skills.<br />
                        </p>
                        <hr />
                    </div>
                </div>
            </Zoom>

            <Zoom>
                <div className=" row mt-5 mb-5 ">
                    <div className="col-md-4 justify-content-center">
                        <div className="card shadow second-color myText-style" style={{ width: '18rem', height: '18rem' }}>
                            <img className="card-img-top mx-auto d-block p-3" style={{ width: '100px', height: '100px' }} src={frontend} alt="" />
                            <Card.Body>
                                <Card.Title className="text-center">Frontend</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>React JS</li>
                                        <li>Javascript,ES6</li>
                                        <li>Typescript</li>
                                        <li>Bootstrap,Material UI</li>
                                        <li>HTML5,CSS3,SASS</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>

                    <div className="col-md-4 justify-content-center">
                        <Card className="shadow second-color myText-style" style={{ width: '18rem', height: '18rem' }}>
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
                    </div>

                    <div className="col-md-4 justify-content-center">
                        <Card className="shadow second-color myText-style" style={{ width: '18rem', height: '18rem' }}>
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
                    </div>

                    </div>
            </Zoom>
        </div>
    );
};

export default OverviewNskill;