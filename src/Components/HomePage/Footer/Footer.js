import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

//style={{background:'linear-gradient(45deg, #44abd6, #5c71e0',height:'200px'}}

const Footer = () => {
    return (
        <>
        <Row className="text-center mt-5 second-color">
            <Col>
            <h3>My social media links</h3>
            <a href="https://www.linkedin.com/in/habib24457/" target="_blank" rel="noreferrer">
                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </Col>
        </Row>
        <Row className="mt-5 second-color">
           <Col className="text-center">
            <p>© Copyright — 2021 — by Habibur Rahman</p>
           </Col>
        </Row>
        </>
    );
};

export default Footer;