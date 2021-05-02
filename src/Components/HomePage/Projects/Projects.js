import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from '../../../images/project1.png';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const Projects = () => {
    return (
        <>
            <Row>
                <Col className="mt-5 text-center">
                    <h2>My Recent Projects</h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                        "clickable": true
                    }} className="mySwiper">
                        <SwiperSlide>
                            <div>
                                <img src={project1} alt="" />
                                <h4>City Traveller</h4>
                                <p></p>
                                <Button variant="warning">Live site</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </>
    );
};

export default Projects;