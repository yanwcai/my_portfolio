import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ProjectSection from "../ProjectSection";
import ConnectSection from '../ConnectSection';
import Footer from "../Footer";
import "../Footer.css";

const Home = () => {
    return ( 
        <>
            <HeroSection title="Hey! I am Stellar Cai" description={"An aspiring software engineer!"}/>
            <AboutSection />
            <ProjectSection />
            <ConnectSection />
            <Footer />
        </>
    );
};

export default Home;