import React from 'react';
import './Header.css';
import { Row, Col, Container } from 'react-bootstrap';
import profile from '../../../images/profile.jpg';


const Header = () => {
    return (
        <Container>
            <Row className="mt-5">
            <Col className="mt-5 pt-5 text-center">
                        <img className="shadow-lg" style={{ width: '300px', height: '350px',padding:'4px',borderRadius: '15px'}} src={profile} alt="profile" />
                    </Col> 
                        <Col className=" mt-5 pt-5" >
                            <div className="myText-style">
                                <h1 className="second-color">Hi</h1>
                                <h1><span className="second-color">I'm Habibur Rahman</span> </h1>
                                <h5 className="second-color">Student | Web Developer</h5>
                                <h5>I am a passionate web developer specialized in both frontend and backend.</h5>
                            </div>
                            <br/>
                            <br/>
                            <a class="resume-button"
                        href="https://drive.google.com/file/d/1AvijN0Zwv7oEhxRNDmXlRDboWXgo3rfb/view?usp=sharing" 
                        target="_blank" rel="noreferrer" role="button" style={{textDecoration:'none'}}>
                            Download My Resume</a>
                        </Col>                         

            </Row>
        </Container>
    );
};

export default Header;