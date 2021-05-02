import React from 'react';
import {Container, Navbar, Nav, Row, Col } from 'react-bootstrap';

const NavigationBar = () => {
    return (
       <Container>
            <Row>
                <Col>                          
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Habibur Rahman</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="https://drive.google.com/file/d/10Y8Gbl2ZzCs_FTj9hk6-AdZ_8gfIuPmP/view?usp=sharing" target="_blank">Cover Letter</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Projects
                     </Nav.Link>
                     <Nav.Link href="#deets">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Col> 
            </Row>
            </Container>
       
    );
};

export default NavigationBar;