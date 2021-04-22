import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faGraduationCap, faBookReader } from '@fortawesome/free-solid-svg-icons';
import study from '../../../images/study.jpg';

const Education = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col className="text-center">
                    <h1>
                        <FontAwesomeIcon icon={faUniversity} />
                        Education</h1>
                        <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <img style={{ height: '550px', width: '500px' }} src={study} alt="study" />
                </Col>
                <Col className="mt-5 pt-5">
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} size="2x" />
                        <h3>University: Daffodil International University</h3>
                        <h4 className="text-secondary">Course:Computer Science and Engineering</h4>
                        <h5 className="text-secondary">Period:Winter 2015 - Summer 2017</h5>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBookReader} size="2x" />
                        <h3>University: Rhein Waal University of Applied Science</h3>
                        <h4 className="text-secondary">Course:Communication and Information Engineering</h4>
                        <h5 className="text-secondary">Period:Winter 2017 - Present</h5>
                    </div>
                </Col>

            </Row>

        </Container>
    );
};

export default Education;