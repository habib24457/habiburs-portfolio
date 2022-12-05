import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavigationBar = () => {
  return (
    <>
      <Row>
        <Col>
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
          >
            <Navbar.Brand>Habibur Rahman</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <Nav.Link
                  href="https://www.linkedin.com/in/habib24457/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/habib24457"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default NavigationBar;
