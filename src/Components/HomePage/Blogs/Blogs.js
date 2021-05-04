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
                    <hr/>
                </Col>
            </Row>
            <Row className="mt-5">

                <Col xs={12} md={8} className="d-flex mt-5">
                    <div class="card text-white bg-success mr-2 mb-3" style={{maxWidth: '18rem',maxHeight: '18rem'}}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="btn btn-warning">Read more</button>
                        </div>
                        </div>

                        <div class="card text-white bg-success mr-2 mb-3" style={{maxWidth: '18rem',maxHeight: '18rem'}}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="btn btn-warning">Read more</button>
                        </div>
                        </div>

                        <div class="card text-white bg-success mr-2 mb-3" style={{maxWidth: '18rem',maxHeight: '18rem'}}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Success card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="btn btn-warning">Read more</button>
                        </div>
                        </div>
                </Col>



                    <Col xs={6} md={4}>
                        <img src={blogs} style={{ height: '450px', width: '450px' }} alt="" />
                    </Col>

            </Row>
        </div>
    );
};

export default Blogs;