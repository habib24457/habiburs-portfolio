import React from 'react';
import {Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const NavigationBar = () => {
    return (
       <Container>
            <Row>
                <Col>                          
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Habibur's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#deets">About me</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Projects
                     </Nav.Link>
                     <Nav.Link href="#deets">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Col> 
            </Row>
            </Container>
       
    );
};

export default NavigationBar;