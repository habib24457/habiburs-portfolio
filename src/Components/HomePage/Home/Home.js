import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import {Container} from 'react-bootstrap';
import MySkills from '../MySkills/MySkills';
import Education from '../Education/Education';
import Projects from '../Projects/Project';

const Home = () => {
    return (
        <Container fluid>
            <NavigationBar></NavigationBar>
           <Header></Header> 
           <Education></Education>
           <MySkills></MySkills>
           <Projects></Projects>
        </Container>
    );
};

export default Home;