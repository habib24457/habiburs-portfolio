import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import prism from '../../../images/project01.png';
import slider from '../../../images/slider.png';
import hungryMonster from '../../../images/hungryMonster.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Style.css';

const ProjectsBlogs = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 text-center second-color">
                    <h2>My Recent Projects</h2>
                    <p className="myText-style">There are some projects that I have built recently.
                    <br />
                    You will find more cool projects in my Github.
                        </p>
                    <hr />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4">
                <div class="card" style={{ width: '22rem',height: '40rem'}}>
                        <img class="card-img-top project-image" src={prism} alt="" />
                        <div class="card-body text-center description-text">
                            <h5 class="card-title font-weight-bold">Prism Photography</h5>
                            <p class="card-text">This website is for professional photographers or a big  photography studio.Features:</p>
                            <ul>
                                <li>CLient: Book appointment, check appointment, pay for services, write review after authentication</li>
                                <li>Admin:Check appointments, check paid orders and reviews, update</li>
                            </ul>
                        </div>
                        <ul class="tags">
                            <span>React</span>
                            <span>Express</span>
                            <span>MongoDB</span>
                            <span>Bootstrap</span>
                            <span>Firebase</span>
                            <span>Heroku</span>
                        </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://prism-photo-studio.web.app/" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/Prism-photography-client" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Client
                            </a>
                            <a href="https://github.com/habib24457/prism-photo-server" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Server
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                <div class="card" style={{ width: '22rem',height: '40rem'}}>
                        <img class="card-img-top project-image" src={project2} alt="" />
                        <div class="card-body text-center description-text">
                            <h5 class="card-title font-weight-bold">Picnic Supermarket</h5>
                            <p class="card-text">This is a e-commerce website where,</p>
                            <ul>
                                <li>Client: Can add products to cart after authentication,Pay for the products.</li>
                                <li>Admin:Can add and update products to the website, add new admin.</li>
                            </ul>
                        </div>
                        <ul class="tags">
                            <span>React</span>
                            <span>Express</span>
                            <span>MongoDB</span>
                            <span>Bootstrap</span>
                            <span>Firebase</span>
                            <span>Heroku</span>
                        </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://picnic-supermarket-auth.web.app/home" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/Picnic-e-commerce" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Client
                            </a>
                            <a href="https://github.com/habib24457/picnic-ecommerce-server" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Server
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-4">
                <div class="card" style={{ width: '22rem',height: '40rem' }}>
                        <img class="card-img-top project-image" src={project1} alt="" />

                        <div class="card-body text-center description-text">
                            <h5 class="card-title  font-weight-bold">Plane Ticket</h5>
                            <p class="card-text">In this website the user can choose a ride and book tickets.</p>
                            <ul>
                                <li>Client: Authenticated user can choose vehicle and select different tickets.</li>
                            </ul>
                        </div>
                        <div>
                            <ul class="tags">
                                <span className="">React</span>
                                <span className="">Firebase</span>
                                <span className="">Context-API</span>
                                <span className="">Google map-API</span>
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
            </div>

            <div className="row">

            <div className="col-md-4">
                    <div class="card" style={{ width: '22rem',height: '35rem' }}>
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




                <div className="col-md-4">
                    <div class="card" style={{ width: '22rem',height: '35rem'}}>
                        <img class="card-img-top project-image" src={slider} alt="" />
                        <div class="card-body text-center description-text">
                            <h5 class="card-title font-weight-bold">Fancy Slider</h5>
                            <p class="card-text">This website loads data from 'Pixabay' API based on the user search
                             and then if the user selects some of the pictures the site will create a slide with the selected pictures.</p>
                        </div>
                        <ul class="tags">
                            <span>Javascript</span>
                            <span>API</span>
                            <span>Bootstrap</span>
                            <span>Netlify</span>
                        </ul>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://habib24457.github.io/my-fency-slider/" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/my-fency-slider" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div class="card" style={{ width: '22rem',height: '35rem' }}>
                        <img class="card-img-top project-image" src={hungryMonster} alt="" />

                        <div class="card-body text-center description-text">
                            <h5 class="card-title  font-weight-bold">Hungry Monster</h5>
                            <p class="card-text">This website shows the user all kinds of dishes according to their search.
                            The data is loaded from 'the MealDB' API and if the user clicks on the meal it shows the ingredients.</p>
                        </div>
                        <div>
                            <ul class="tags">
                                <span className="">Javascript</span>
                                <span className="">Github</span>
                            </ul>
                        </div>
                        <div class="card-body d-flex justify-content-between">
                            <a href="https://habib24457.github.io/hungry-monster-api/" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />Live Site
                            </a>
                            <a href="https://github.com/habib24457/hungry-monster-api" target="_blank" rel="noreferrer" style={{ color: '#31466d', textDecoration: 'none' }}>
                                <FontAwesomeIcon icon={faGithub} size="2x" />Code
                            </a>
                        </div>
                    </div>
                </div>



              

            </div>

            <div className="row justify-content-center mt-3">
                <a href="https://github.com/habib24457" target="_blank" rel="noreferrer">
                    <button className="brand-button">More Projects on Github</button>
                </a>
            </div>


            <div className="row">
                <div className="col-md-12 mt-5 text-center second-color myText-style">
                    <h2>Read My Blogs</h2>
                    <p className="myText-style">I love to write down things together.
                    <br />
                    These blogs I have written from my understanding in different topics.
                    </p>
                    <hr />
                </div>
            </div>


            <div className="row">
                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">React</div>
                        <div class="card-body">
                            <h5 class="card-title">Fundamentals React</h5>
                            <p class="card-text">This is a easy guide to react,as this blog describes
                            some of the core fundamentals of react.</p>

                            <a href="https://habiburehman390.medium.com/10-things-you-must-know-about-react-764bcab587ac" target="_blank" rel="noreferrer">
                                <button className="brand-button">Read My Blog</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">Javascript</div>
                        <div class="card-body">
                            <h5 class="card-title">Tricky Javascript Staffs</h5>
                            <p class="card-text">This blog focuses on some of the random but Tricky or essential features about JS and web development. </p>

                            <a href="https://dev.to/habiburrahman/things-about-javascript-you-ll-have-fun-learning-3nl9" target="_blank" rel="noreferrer">
                                <button className="brand-button">Read My Blog</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card text-white bg-info mb-3 text-center shadow rounded" style={{ width: '18rem', height: '18rem' }}>
                        <div class="card-header">Javascript</div>
                        <div class="card-body">
                            <h5 class="card-title">Javascript,ES6;CrossBrowser testing</h5>
                            <p class="card-text">This blog summarizes some JavaScript topics that I have learned.</p>

                            <a href="https://habiburehman390.medium.com/javascript-error-handling-fe9a8cbf515b" target="_blank" rel="noreferrer">
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