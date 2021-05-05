import React from 'react';
import { Row, Col } from 'react-bootstrap';
import blogs from '../../../images/blogs.jpg';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <Row className="mt-5 pt-5 text-center second-color myText-style">
                <Col>
                    <h2>My Blogs</h2>
                    <hr />
                </Col>
            </Row>
            <Row className="mt-5"> 
                    <Col xs={12} md={8} className="d-flex mt-5">
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
                    </Col>
    

                <Col xs={6} md={4}>
                    <img src={blogs} style={{ height: '450px', width: '450px' }} alt="blogs" />
                </Col>

            </Row>
        </div>
    );
};

export default Blogs;