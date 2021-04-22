import React from 'react';
import './Header.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import profile from '../../../images/profile.jpg';

const Header = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col className=" mt-5 pt-5" >
                    <div className="myText-style">
                        <h1><span className="first-color">Habibur Rahman</span> </h1>
                        <h5>I'm a full stack web developer proficient in frontend and backend development.
                        I always focus on writing clean and efficient code. 
                </h5>
                    </div>
                    <br />
                    <Button className="mt-3 text-blue " variant="warning" size="lg">Learn more</Button>
                </Col>
                <Col className="mt-5 pt-5 text-center">
                    <img className="shadow-lg" style={{ width: '300px', height: '350px', borderRadius: '500px' }} src={profile} alt="profile" />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;