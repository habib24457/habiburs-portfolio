import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

const ProjectsBlogs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 text-center description-text">
                    <h2>My Recent Projects</h2>
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project1} alt="" />

                        <div class="card-body text-center description-text">
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
                            <a href="https://city-traveller-auth.web.app/home" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/City-Traveller-Auth" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project2} alt="" />
                        <div class="card-body text-center description-text">
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
                            <a href="https://picnic-supermarket-auth.web.app/home" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/picnic-online-supermarket" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" style={{ width: '22rem' }}>
                        <img class="card-img-top project-image" src={project3} alt="" />
                        <div class="card-body text-center description-text">
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
                            <a href="https://stupefied-rosalind-165088.netlify.app/" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/Football-mania" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-12 mt-5 text-center second-color myText-style">
                    <h2>Read My Blogs</h2>
                    <hr />
                </div>
            </div>


            <div className="row">
                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">Javascript</div>
                        <div class="card-body">
                            <h5 class="card-title">10 Javascript String methods</h5>
                            <p class="card-text">This blog describes top 10 basic methods of String in one place with examples.</p>

                            <a href="https://habiburehman390.medium.com/10-javascript-string-functionalities-a1b486ca83c3" target="_blank" rel="noreferrer">
                                <button className="brand-button">Read My Blog</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">Javascript</div>
                        <div class="card-body">
                            <h5 class="card-title">10 Javascript String methods</h5>
                            <p class="card-text">This blog describes top 10 basic methods of String in one place with examples.</p>

                            <a href="https://habiburehman390.medium.com/10-javascript-string-functionalities-a1b486ca83c3" target="_blank" rel="noreferrer">
                                <button className="brand-button">Read My Blog</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">Javascript</div>
                        <div class="card-body">
                            <h5 class="card-title">10 Javascript String methods</h5>
                            <p class="card-text">This blog describes top 10 basic methods of String in one place with examples.</p>

                            <a href="https://habiburehman390.medium.com/10-javascript-string-functionalities-a1b486ca83c3" target="_blank" rel="noreferrer">
                                <button className="brand-button">Read My Blog</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBlogs;