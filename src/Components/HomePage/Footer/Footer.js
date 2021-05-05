import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


//style={{background:'linear-gradient(45deg, #44abd6, #5c71e0',height:'200px'}}

const Footer = () => {
    return (
        <>
            <Row className="text-center mt-5 text-white">
                <Col>
                    <h3>Stay in touch</h3>
                    <a className="mr-2" href="https://www.linkedin.com/in/habib24457/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>

                    <a className="mr-2" href="https://github.com/habib24457" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>

                    <a className="mr-2" href="https://twitter.com/imhabib007" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </Col>
            </Row>
            <Row className="mt-1 text-white">
                <Col className="text-center">
                    <p>Phone: +491630809858</p>
                    <p>Email: habiburehman390@gmail.com</p>
                    <p>© Copyright — 2021 — by Habibur Rahman</p>
                </Col>
            </Row>
        </>
    );
};

export default Footer;