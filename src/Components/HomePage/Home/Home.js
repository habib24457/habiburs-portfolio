import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import './Home.css';
//import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import back from '../../../images/back.png';
import OverviewNskill from '../OverviewNskill/OverviewNskill';

const Home = () => {
    return (
        <>
        <Container fluid style={{backgroundImage:`url(${back})`,backgroundRepeat:'no-repeat', }}>
            <NavigationBar></NavigationBar>
            <LightSpeed left>
                <Header></Header>
            </LightSpeed>          
        </Container>

        <Container>
            <OverviewNskill></OverviewNskill>
        </Container>
        </>
    );
};

export default Home;