import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <>
        <Row className="text-center mt-5 pt-5">
            <Col className="second-color myText-style">
                <h1>Contact me</h1> 
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <form action="https://formsubmit.co/habiburehman390@gmail.com" method="POST">
                    <div class="form-group">
                        <input type="email" 
                        class="form-control" id="" aria-describedby="emailHelp" 
                        placeholder="Enter Your email" required/> 
                        <br/>
                         <input type="text" 
                        class="form-control" id="" aria-describedby="emailHelp" 
                        placeholder="Enter Your Name" required/> 
                        <br/>
                        <input type="hidden" name="_next" value="https://habibur-portfolio.netlify.app/"/>
                        <input type="hidden" name="_captcha" value="false"/>
                         <textarea class="form-control" id="" rows="3" name="message" placeholder="Write a message" required></textarea> 
                         <br/>     
                         <button type="submit" class="brand-button">Send Email</button>
                    </div>
            </form>
           </Col> 
        </Row>
        </>
    );
};

export default ContactMe;