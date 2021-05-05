import React from 'react';
import {Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons';

const NavigationBar = () => {
    return (
       <Container>
            <Row>
                <Col>                          
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand>
                   <h4>Habibur Rahman </h4> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                     <Nav.Link href="https://www.linkedin.com/in/habib24457/" target="_blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faLinkedin} size="2x" />
                     </Nav.Link>

                     <Nav.Link href="https://github.com/habib24457" target="_blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faGithub} size="2x" />
                     </Nav.Link>

                     <Nav.Link href="https://twitter.com/theHabibGuy" target="_blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faTwitter} size="2x" />
                     </Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Col> 
            </Row>
            </Container>
       
    );
};

export default NavigationBar;