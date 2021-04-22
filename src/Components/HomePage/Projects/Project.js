import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact} from '@fortawesome/free-brands-svg-icons';

const Project = () => {
    return (
        <Container>
            <Row className="mt-5 pt-5">
                <Col className="text-center">
                    <h1>
                        <FontAwesomeIcon icon={faReact}/>
                         My Projects</h1>
                         <hr/>
                </Col>
            </Row>
        </Container>
    );
};

export default Project;