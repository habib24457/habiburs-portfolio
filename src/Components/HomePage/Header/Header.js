import React from 'react';
import './Header.css';
import { Row, Col, Container } from 'react-bootstrap';
import profile from '../../../images/profile.jpg';


const Header = () => {
    return (
        <Container>
            <Row className="mt-5">
                        <Col className=" mt-5 pt-5" >
                            <div className="myText-style">
                                <h1><span className="second-color">Habibur Rahman</span> </h1>
                                <h5 className="second-color">I'm a junior web developer with knowledge of frontend and backend(beginner) development.
                                I always focus on writing clean and efficient code. I am passionate about programming and always ready to take challenges.
                                To learn more about me, please have a look at my resume.
                        </h5>
                            </div>
                            <br />
                            <a class="btn btn-warning" 
                        href="https://drive.google.com/file/d/1AvijN0Zwv7oEhxRNDmXlRDboWXgo3rfb/view?usp=sharing" 
                        target="_blank" rel="noreferrer" role="button">
                            Download My Resume</a>
                        </Col>
                   

                  <Col className="mt-5 pt-5 text-center">
                        <img className="shadow-lg" style={{ width: '300px', height: '350px', borderRadius: '50%',padding:'4px' }} src={profile} alt="profile" />
                    </Col>              

            </Row>
        </Container>
    );
};

export default Header;