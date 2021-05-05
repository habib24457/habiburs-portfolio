import React from 'react';
import { Row, Col } from 'react-bootstrap';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
//import projects from '../../../images/projects.jpg';
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

// Import Swiper styles

const Projects = () => {
    return (
        <div>
            <Row>
                <Col className="mt-5 text-center second-color myText-style">
                    <h2>My Recent Projects</h2>
                    <hr />
                </Col>
            </Row>

            <Row className="w-auto mt-5 p-5 justify-content-center" style={{ backgroundColor: '#7c60f6' }}>
                <Col>
                    <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project1} alt="" />

                        <div class="card-body text-center myText-style">
                            <h5 class="card-title  font-weight-bold">City Traveller</h5>
                            <p class="card-text">In this website the user can choose a ride and book tickets.</p>
                        </div>
                        <div>
                        <ul class="tags">
                                <span className="">React</span>
                                <span className="">Firebase</span>
                                <span className="">Context-API</span>
                                <span className="">Bootstrap</span>
                            </ul>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://city-traveller-auth.web.app/home" target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>Live Site
                            
                            </a>
                            <a href="https://github.com/habib24457/City-Traveller-Auth" target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project2} alt="" />
                        <div class="card-body text-center  myText-style">
                            <h5 class="card-title font-weight-bold">Picnic Supermarket</h5>
                            <p class="card-text">This is a e-commerce website where the user can buy products and the admin can add and manage products.</p>
                        </div>
                        <ul class="tags">
                                <span className="">React</span>
                                <span className="">Express</span>
                                <span className="">MongoDB</span>
                                <span className="">Bootstrap</span>
                            </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://picnic-supermarket-auth.web.app/home" target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/picnic-online-supermarket" target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </Col>
                <Col>
                <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project3} alt="" />
                        <div class="card-body text-center myText-style">
                            <h5 class="card-title  font-weight-bold">Football Mania</h5>
                            <p class="card-text">After fetching data from third party sports API, this website shows the details of different data of football teams.</p>
                        </div>
                        <ul class="tags">
                                <span className="">React</span>
                                <span className="">React-Router</span>
                                <span className="">API</span>
                                <span className="">Bootstrap</span>
                            </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://stupefied-rosalind-165088.netlify.app/"target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/Football-mania" target="_blank" rel="noreferrer" style={{color:'#31466d',textDecoration: 'none'}}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;