import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import './Home.css';
//import Fade from 'react-reveal/Fade';
import back1 from '../../../images/back1.png';
//import back2 from '../../../images/back2.png';
import back4 from '../../../images/back4.png';
import OverviewNskill from '../OverviewNskill/OverviewNskill';
import Footer from '../Footer/Footer';
//import Slide from 'react-reveal/Slide';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Blogs from '../Blogs/Blogs';
//import back3 from '../../../images/back3.png';
import Zoom from 'react-reveal/Zoom';



const Home = () => {
    return (
        <>
            <Container fluid style={{ backgroundImage: `url(${back1})`, backgroundRepeat: 'no-repeat', }}>
                <NavigationBar></NavigationBar>
                <Header></Header>
            </Container>
            <Container>
                <OverviewNskill></OverviewNskill>
            </Container>

            <Container fluid>
                <Projects></Projects>
            </Container>

            <Container>
                    <Blogs></Blogs>
            </Container>

            <Container  fluid style={{ backgroundImage: `url(${back4})`, backgroundRepeat: 'no-repeat' }} >
                <Zoom>
                <ContactMe></ContactMe>
                </Zoom>               
            </Container>

            <Container fluid style={{ background: 'linear-gradient(45deg, #44abd6, #5c71e0', height: '200px' }}
            >
                <Footer></Footer>
            </Container>
        </>
    );
};

export default Home;