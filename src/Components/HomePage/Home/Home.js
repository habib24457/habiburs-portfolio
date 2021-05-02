import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import './Home.css';
//import Fade from 'react-reveal/Fade';
import back from '../../../images/back.png';
import OverviewNskill from '../OverviewNskill/OverviewNskill';
import Footer from '../Footer/Footer';
import Slide from 'react-reveal/Slide';
import Projects from '../Projects/Projects';



const Home = () => {
    return (
        <>
        <Container fluid style={{backgroundImage:`url(${back})`,backgroundRepeat:'no-repeat', }}>
            <NavigationBar></NavigationBar>
            <Slide left>
                <Header></Header>
            </Slide>          
        </Container>
        <Container>
            <OverviewNskill></OverviewNskill>          
        </Container>

        <Container>
            <Projects></Projects>
        </Container>

        <Container fluid style={{background:'linear-gradient(45deg, #44abd6, #5c71e0',height:'200px'}}>
            <Footer></Footer>
        </Container>
        </>
    );
};

export default Home;