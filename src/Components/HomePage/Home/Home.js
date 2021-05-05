import React from 'react';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import './Home.css';
//import Fade from 'react-reveal/Fade';
//import back1 from '../../../images/back1.png';
//import back2 from '../../../images/back2.png';
//import back4 from '../../../images/back4.png';
import OverviewNskill from '../OverviewNskill/OverviewNskill';
import Footer from '../Footer/Footer';
//import Slide from 'react-reveal/Slide';
//import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
//import back3 from '../../../images/back3.png';
import Zoom from 'react-reveal/Zoom';
import ProjectsBlogs from '../ProjectsBlogs/ProjectsBlogs';



const Home = () => {
    return (
        <>
        <div className="BG" style={{ 
        backgroundColor: '#0a1a2f',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: 'auto'
        }}> 
            <div className="container-fluid">
                <NavigationBar></NavigationBar>
                <Header></Header>
                
            </div>

            <OverviewNskill></OverviewNskill>
            <ProjectsBlogs></ProjectsBlogs>

            <Container>
                <Zoom>
                <ContactMe></ContactMe>
                </Zoom>               
            </Container>
            
            <Footer></Footer>

            </div>
        </>
    );
};

export default Home;