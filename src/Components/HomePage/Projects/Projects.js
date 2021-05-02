import React from 'react';
import { Row, Col,Carousel } from 'react-bootstrap';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import study from '../../../images/study.jpg';
// Import Swiper styles

const Projects = () => {
    return (
        <>
            <Row>
                <Col className="mt-5 text-center">
                    <h2>My Recent Projects</h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col xs={6} md={4}>
                    <img style={{ width:'350px',height:'450px'}} src={study} alt=""/>
                </Col>
                <Col xs={12} md={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="text-secondary">First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                                <a href="https://city-traveller-auth.web.app/home" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Live Site</a>
                                <a href="https://github.com/habib24457/City-Traveller-Auth" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Github Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="https://picnic-supermarket-auth.web.app/home" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Live Site</a>
                                <a href="https://github.com/habib24457/picnic-online-supermarket" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Github Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                <a href="https://stupefied-rosalind-165088.netlify.app/" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Live Site</a>
                                <a href="https://github.com/habib24457/Football-mania" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank" rel="noreferrer">Github Link</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
};

export default Projects;